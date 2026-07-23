import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import Header2 from '@/_components/headers/Header2'
import ContactSection from '@/_components/sections/ContactSection'
import ServiceSection from '@/_components/sections/ServiceSection'
import Spacer from '@/_components/spacers/Spacer'
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


const CrumbsData = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Our Services', href: '/service' },
]

export default async function page() {
    const [appData] = await Promise.all([
        appInfoViewAction()
    ])

    return (
        <>
            <Header2 name='Our Services' />
            <BreadCrumb data={CrumbsData} />

            <Spacer />
            <ServiceSection name='Our Services' />

            <Spacer />
            <section className='bg-gray-50'>
                <Spacer />
                <ContactSection dbData={appData} />
                <Spacer />
            </section>


        </>
    )
}
