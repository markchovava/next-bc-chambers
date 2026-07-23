import { ComfortaaSemiBold } from "@/_assets/fonts/comfortaa/ComfortaaFont";
import { ImagesData } from "./ImagesData";

export const AppInfoData = {
    name: 'Own One',
    phone: '0782 814471 / 0713 117190',
    address: 'Harare, Zimbabwe',
    email: 'info@ownone.co.zw',
    socials: [
        { name: 'facebook', href: '#' },
        { name: 'instagram', href: '#' },
        { name: 'tiktok', href: '#' },
        { name: 'whatsapp', href: '#' },
    ],
    intro: {
        title: `Welcome to B. Chipadza Law Chambers`,
        details: `One of the leading law firms in Zimbabwe.`,
        href: `/service`,
        btnName: `View Our Expertise`,
    },
    about: {
        subtitle: 'About Us',
        title: 'A Law firm you can trust',
        details: <>
            B. Chipadza Law Chambers is a dedicated and dynamic legal practice committed to delivering comprehensive, strategic, and reliable legal solutions. We serve a diverse clientele ranging from corporate entities and commercial enterprises to individuals, offering expert guidance with unwavering integrity, professionalism, and a strong focus on client success.
        </>,
    },
    aboutInfo: [
        {
            subtitle: 'About Us',
            title: 'Our Mission',
            details: <>
                To provide exceptional, client-focused legal representation with uncompromising integrity, strategic insight, and a relentless commitment to protecting our clients&apos; rights and interests across all matters.
            </>,
            href: '/about#mission',
            btnName: 'About Us',
            image: ImagesData.other[0],
        },
        {
            subtitle: 'About Us',
            title: 'Our Vision',
            details: <>
                To be a premier, forward-thinking law firm recognized for legal excellence, innovative advocacy, and trusted counsel, setting the benchmark for professional service delivery in the legal industry.
            </>,
            href: '/about#vision',
            btnName: 'About Us',
            image: ImagesData.other[1]
        },
        {
            subtitle: 'About Us',
            title: 'Our Values',
            details: <>
                Guided by a foundation of professional integrity, client dedication, meticulous attention to detail, and a commitment to delivering strategic, results-driven legal solutions.
            </>,
            href: '/about#vision',
            btnName: 'About Us',
            image: ImagesData.other[2]
        },
    ]

}