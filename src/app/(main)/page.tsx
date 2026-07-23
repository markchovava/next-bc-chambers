import ContactSection from "@/_components/sections/ContactSection";
import Spacer from "@/_components/spacers/Spacer";
import { appInfoViewAction } from "../admin/_data/actions/AppInfoActions";
import type { Metadata } from "next";
import IntroDualSection from "@/_components/sections/IntroDualSection";
import { AppInfoData } from "@/_data/sample/AppinfoData";
import { ServiceData } from "@/_data/sample/ServiceData";
import SpacerLarge from "@/_components/spacers/SpacerLarge";
import ServiceListSection from "@/_components/sections/ServiceListSection";
import NewsSection from "@/_components/sections/NewsSection";
import Header from "@/_components/headers/Header";
import { ImagesData } from "@/_data/sample/ImagesData";



export const metadata: Metadata = {
  title: 'Home | B. Chipadza Law Chambers',
  description: `Source and import your dream vehicle with confidence. 
    Own One Vehicles connects Harare buyers with high-quality, reliable 
    car imports, handling all logistics from sourcing to delivery.
  `,
  keywords: [
    'buy cars Harare',
    'car imports Zimbabwe',
    'import vehicles Harare',
    'quality used cars Zimbabwe',
    'Japanese car imports Harare',
    'UK car imports Zimbabwe',
    'Own One Vehicles',
    'trusted car dealer Harare'
  ],
  openGraph: {
    images: ['/assets/images/logos/logo.png'],
    title: 'Own One Vehicles | Trusted Car Imports to Harare, Zimbabwe',
    description: `Source and import your dream vehicle with confidence. 
      Own One Vehicles connects Harare buyers with high-quality, reliable 
      car imports, handling all logistics from sourcing to delivery.
    `,
  },
};


export default async function Page() {
  const [appData] = await Promise.all([
    appInfoViewAction()
  ])

  return (
    <>
      <Header image={ImagesData.banner[0]} />
      <SpacerLarge />
      <IntroDualSection
        title={AppInfoData.aboutInfo[0].title}
        subtitle={AppInfoData.aboutInfo[0].subtitle}
        details={AppInfoData.aboutInfo[0].details}
        href={AppInfoData.aboutInfo[0].href}
        btnName={AppInfoData.aboutInfo[0].btnName}
        dir='left'
        image={AppInfoData.aboutInfo[0].image}
      />

      <SpacerLarge />
      <IntroDualSection
        title={ServiceData.intro.title}
        subtitle={ServiceData.intro.subtitle}
        details={ServiceData.intro.details}
        href={ServiceData.intro.href}
        btnName={ServiceData.intro.btnName}
        dir='right'
        image={ServiceData.intro.image}
      />


      <SpacerLarge />

      <section className="w-full bg-gray-100">
        <Spacer />
        <ServiceListSection name="Our Expertise" />
        <Spacer />
      </section>

      <section className="bg-gray-50">
        <Spacer />
        <NewsSection name='Our News & Bulletins' />
        <Spacer />
      </section>

      <Spacer />
      <ContactSection dbData={appData} />
      <Spacer />



    </>
  );
}
