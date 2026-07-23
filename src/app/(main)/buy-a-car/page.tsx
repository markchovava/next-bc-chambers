import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import Heading1 from '@/_components/headings/Heading1'
import ShopSection from '@/_components/sections/ShopSection'
import Spacer from '@/_components/spacers/Spacer'
import { carFrontAction } from '@/app/admin/_data/actions/CarActions'
import { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'Buy a Car | Own One Vehicles | Your Car Import Partner',
    description: `Find your next vehicle. Browse our available inventory or 
        let us custom-source and import the exact car, SUV, or truck you want 
        directly to Harare.
    `,
    keywords: [
        'buy a car Harare',
        'source vehicle Zimbabwe',
        'import a car to Harare',
        'car import catalog Zimbabwe',
        'order car online Harare',
        'vehicles for sale Harare'
    ],
    openGraph: {
        images: ['/assets/images/logos/logo.png'],
        title: 'Buy a Car | Own One Vehicles | Your Car Import Partner',
        description: `Find your next vehicle. Browse our available inventory or 
            let us custom-source and import the exact car, SUV, or truck you want 
            directly to Harare.
        `,
    },
};



const CrumbsData = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Buy A Car', href: '/buy-a-car' },
]


export default async function page() {
    const [carData] = await Promise.all([
        carFrontAction()
    ]);

    return (
        <>
            <main className='bg-gray-50'>
                <BreadCrumb data={CrumbsData} />

                <div className="container__primary mb-8 pb-4 border-b border-gray-300">
                    <Spacer />
                    <Heading1 name="Buy A Car" />
                </div>

                <ShopSection dbData={carData} />

                <Spacer />
            </main>
        </>
    )
}
