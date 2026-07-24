import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import Header2 from '@/_components/headers/Header2'
import Heading1 from '@/_components/headings/Heading1'
import Heading2 from '@/_components/headings/Heading2'
import Heading3 from '@/_components/headings/Heading3'
import IconDefault from '@/_components/icons/IconDefault'
import NewsItem from '@/_components/items/NewsItem'
import ContactSection from '@/_components/sections/ContactSection'
import NewsViewSection from '@/_components/sections/NewsViewSection'
import Spacer from '@/_components/spacers/Spacer'
import TitleNormal from '@/_components/titles/TitleNormal'
import { ImagesData } from '@/_data/sample/ImagesData'
import { NewsData } from '@/_data/sample/NewsData'
import { NoImageData } from '@/_data/sample/NoImage'
import { ServiceData } from '@/_data/sample/ServiceData'
import { TrimString } from '@/_utils/StringManipulation'
import { appInfoViewAction } from '@/app/admin/_data/actions/AppInfoActions'
import { Metadata } from 'next'
import Link from 'next/link'




export const metadata: Metadata = {
    title: 'View Service | B. Chipadza Law Chambers',
    description: `View Service | B. Chipadza Law Chambers`,
    keywords: [
        'about Own One Vehicles',
        'reliable car importers Harare',
        'trusted vehicle sourcing Zimbabwe',
        'Harare car import agency',
        'clear car imports Zimbabwe',
        'automotive import experts'
    ],
    openGraph: {
        images: ['/assets/images/logos/logo.png'],
        title: 'About Us | Own One Vehicles | Your Car Import Partner',
        description: `Learn more about Own One Vehicles. We are Harare's premier 
        automotive import partner, dedicated to transparency, reliability, and 
        helping you source top-quality vehicles globally.
        `,
    },
};


interface Props {
    params: Promise<{
        id: string
    }>
}

export default async function page({ params }: Props) {
    const { id } = await params;
    const uid = Number(id)
    const data = NewsData.list.find((i) => uid === i.id)
    const [appData] = await Promise.all([
        appInfoViewAction()
    ])


    const CrumbsData = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'News', href: '/news' },
        { id: 2, name: data?.title ?? 'View Service', href: `/news/${id}` },
    ]

    return (
        <>
            <Header2
                name={TrimString(data?.title ?? 'View Service', 30)}
                image={ImagesData.header[2]} />
            <BreadCrumb data={CrumbsData} />

            <Spacer />
            <NewsViewSection data={data} />
            <Spacer />

            <section className='bg-gray-50'>
                <Spacer />
                <ContactSection dbData={appData} />
                <Spacer />
            </section>

        </>
    )
}
