import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import Header2 from '@/_components/headers/Header2'
import AboutSection from '@/_components/sections/AboutSection'
import ContactSection from '@/_components/sections/ContactSection'
import IntroDualSection from '@/_components/sections/IntroDualSection'
import Spacer from '@/_components/spacers/Spacer'
import { AppInfoData } from '@/_data/sample/AppinfoData'
import { ImagesData } from '@/_data/sample/ImagesData'
import { appInfoViewAction } from '@/app/admin/_data/actions/AppInfoActions'
import { Metadata } from 'next'




export const metadata: Metadata = {
    title: 'About Us | B. Chipadza Law Chambers',
    description: `Learn more about Own One Vehicles. We are Harare's premier 
        automotive import partner, dedicated to transparency, reliability, and 
        helping you source top-quality vehicles globally.
    `,
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


const CrumbsData = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About Us', href: '/about' },
]

export default async function page() {
    const [appData] = await Promise.all([
        appInfoViewAction()
    ])

    return (
        <>
            <Header2 name='About Us' image={ImagesData.header[3]} />
            <BreadCrumb data={CrumbsData} />

            <Spacer />
            <AboutSection
                title={AppInfoData.about.title}
                subtitle={AppInfoData.about.subtitle}
                details={AppInfoData.about.details}
            />

            <Spacer />
            <IntroDualSection
                title={AppInfoData.aboutInfo[0].title}
                subtitle={AppInfoData.aboutInfo[0].subtitle}
                details={AppInfoData.aboutInfo[0].details}
                dir='left'
                image={AppInfoData.aboutInfo[0].image}
            />

            <Spacer />
            <IntroDualSection
                title={AppInfoData.aboutInfo[1].title}
                subtitle={AppInfoData.aboutInfo[1].subtitle}
                details={AppInfoData.aboutInfo[1].details}
                dir='right'
                image={AppInfoData.aboutInfo[1].image}
            />

            <Spacer />
            <IntroDualSection
                title={AppInfoData.aboutInfo[2].title}
                subtitle={AppInfoData.aboutInfo[2].subtitle}
                details={AppInfoData.aboutInfo[2].details}
                dir='left'
                image={AppInfoData.aboutInfo[2].image}
            />

            <Spacer />
            <section className='bg-gray-50'>
                <Spacer />
                <ContactSection dbData={appData} />
                <Spacer />
            </section>
        </>
    )
}
