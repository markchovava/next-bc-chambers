import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import Header2 from "@/_components/headers/Header2"
import ContactSection from "@/_components/sections/ContactSection"
import Spacer from "@/_components/spacers/Spacer"
import TitleNormal from "@/_components/titles/TitleNormal"
import { appInfoViewAction } from "@/app/admin/_data/actions/AppInfoActions"
import { Metadata } from "next"




export const metadata: Metadata = {
    title: 'Contact Us | Own One Vehicles | Harare CBD Office',
    description: `Get in touch with Own One Vehicles today. Visit our office 
        in the Harare CBD, call us, or send an inquiry to start sourcing your 
        next vehicle with our expert team.
    `,
    keywords: [
        'contact Own One Vehicles',
        'car importer phone number Harare',
        'buy car office Harare CBD',
        'vehicle import inquiry Zimbabwe',
        'customer support Own One Vehicles'
    ],
    openGraph: {
        images: ['/assets/images/logos/logo.png'],
        title: 'Contact Us | Own One Vehicles | Harare CBD Office',
        description: `Get in touch with Own One Vehicles today. Visit our office 
            in the Harare CBD, call us, or send an inquiry to start sourcing your 
            next vehicle with our expert team.
        `,
    },
};



const CrumbsData = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Contact Us', href: '/contact' },
]

export default async function page() {
    const [appData] = await Promise.all([appInfoViewAction()])
    return (
        <>
            <Header2 name='Contact Us' />
            <BreadCrumb data={CrumbsData} />

            <Spacer />
            <div className="container__primary">
                <TitleNormal name="Contact Us" />
            </div>

            <ContactSection dbData={appData} />
            <Spacer />

        </>
    )
}
