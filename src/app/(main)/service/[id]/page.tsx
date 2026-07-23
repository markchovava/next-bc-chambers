import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import Header2 from '@/_components/headers/Header2'
import ContactSection from '@/_components/sections/ContactSection'
import Spacer from '@/_components/spacers/Spacer'
import TitleNormal from '@/_components/titles/TitleNormal'
import { ServiceData } from '@/_data/sample/ServiceData'
import { appInfoViewAction } from '@/app/admin/_data/actions/AppInfoActions'
import { Metadata } from 'next'




export const metadata: Metadata = {
    title: 'Our Service | B. Chipadza Law Chambers',
    description: `Our Service | B. Chipadza Law Chambers`,
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
    const data = ServiceData.list.find((i) => uid === i.id)
    const [appData] = await Promise.all([
        appInfoViewAction()
    ])


    const CrumbsData = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Our Services', href: '/service' },
        { id: 2, name: data?.name ?? 'View Service', href: `/service/${id}` },
    ]

    return (
        <>
            <Header2 name={data?.name ?? 'View Service'} />
            <BreadCrumb data={CrumbsData} />


            <Spacer />
            <section>
                <div className='container__primary'>
                    <TitleNormal name={data?.name ?? ''} />
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='bg-gray-300 h-100 rounded-lg'>

                        </div>
                        <div className='flex flex-col justify-center'>
                            <h3 className='font-serif text-2xl'>What we do</h3>
                            {data?.details}
                        </div>
                    </div>
                </div>
            </section>

            <Spacer />
            <section className='bg-gray-50'>
                <Spacer />
                <ContactSection dbData={appData} />
                <Spacer />
            </section>

        </>
    )
}
