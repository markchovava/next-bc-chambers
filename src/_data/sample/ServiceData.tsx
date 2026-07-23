import { ImagesData } from "./ImagesData";

export const ServiceData = {
    intro: {
        subtitle: 'Our Expertise',
        title: 'We are here to help you.',
        details: <>
            At B. Chipadza Law Chambers we apply our vast experience to business
            needs providing results focused legal expertise. We practice in over 12
            diverse areas of law. B. Chpadza Law Chambers specialises in corporate and commercial matters
            with a highly skilled team of lawyers and associates.
        </>,
        href: '/service',
        btnName: 'Our Expertise',
        image: ImagesData.other[5],
    },
    list: [
        {
            id: 12,
            image: ImagesData.other[0],
            name: 'Arbitration',
            iconType: 'Gavel',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Domestic and international commercial arbitration</li>
                    <li>Mediation and alternative dispute resolution (ADR)</li>
                    <li>Drafting arbitration clauses and agreements</li>
                    <li>Enforcement and challenge of arbitral awards</li>
                </ul>
            )
        },
        {
            id: 1,
            image: ImagesData.other[1],
            name: 'Commercial and Corporate Law',
            iconType: 'Briefcase',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Company formation, secretarial, and advisory services</li>
                    <li>Mergers, acquisitions, and corporate restructurings</li>
                    <li>Drafting and reviewing commercial contracts and agreements</li>
                    <li>Regulatory compliance and corporate governance advisory</li>
                </ul>
            )
        },
        {
            id: 2,
            image: ImagesData.other[2],
            name: 'Conveyancing and Notarial Practice',
            iconType: 'Home',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Property transfers, sales, and purchases</li>
                    <li>Registration of mortgage bonds and servitudes</li>
                    <li>Notarial attestations, authentications, and contracts</li>
                    <li>Sectional title developments and township establishment</li>
                </ul>
            )
        },
        {
            id: 3,
            image: ImagesData.other[3],
            name: 'Criminal Law',
            iconType: 'Scale',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Bail applications and formal representations</li>
                    <li>Criminal trial advocacy and defense representation</li>
                    <li>White-collar crime and corporate fraud defense</li>
                    <li>Appeals and reviews in higher courts</li>
                </ul>
            )
        },
        {
            id: 4,
            image: ImagesData.other[4],
            name: 'Energy and Mining',
            iconType: 'Zap',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Mining rights applications, transfers, and compliance</li>
                    <li>Energy project development and power purchase agreements (PPAs)</li>
                    <li>Environmental law compliance and regulatory advice</li>
                    <li>Negotiating joint ventures and concessions in natural resources</li>
                </ul>
            )
        },
        {
            id: 5,
            image: ImagesData.other[5],
            name: 'Estate Planning, Wills and Successions',
            iconType: 'FileText',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Drafting comprehensive last wills and testaments</li>
                    <li>Establishment and administration of family trusts</li>
                    <li>Deceased estate administration and liquidation</li>
                    <li>Estate planning to minimize tax and succession disputes</li>
                </ul>
            )
        },
        {
            id: 6,
            image: ImagesData.other[6],
            name: 'General Civil Litigation',
            iconType: 'Shield',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>High Court and Magistrates Court trial advocacy</li>
                    <li>Contractual disputes and debt recovery actions</li>
                    <li>Delictual claims and personal injury litigation</li>
                    <li>Interdicts, urgent applications, and conservatory relief</li>
                </ul>
            )
        },
        {
            id: 7,
            image: ImagesData.other[7],
            name: 'Insurance Law',
            iconType: 'FileCheck',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Policy interpretation and drafting advisory</li>
                    <li>Insurance claim disputes and repudiation challenges</li>
                    <li>Subrogated recoveries and liability defense</li>
                    <li>Regulatory compliance for insurance providers</li>
                </ul>
            )
        },
        {
            id: 8,
            image: ImagesData.other[8],
            name: 'Intellectual Property',
            iconType: 'Lightbulb',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Trademark, patent, and copyright registration</li>
                    <li>IP portfolio management, licensing, and assignment</li>
                    <li>Anti-counterfeiting and infringement litigation</li>
                    <li>Commercialization and tech-transfer agreements</li>
                </ul>
            )
        },
        {
            id: 9,
            image: ImagesData.other[4],
            name: 'Labour Law',
            iconType: 'Users',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Drafting employment contracts and workplace codes</li>
                    <li>Disciplinary hearings, retrenchments, and dismissals</li>
                    <li>Representation at Conciliation Boards and Labour Courts</li>
                    <li>Collective bargaining and trade union negotiations</li>
                </ul>
            )
        },
        {
            id: 10,
            image: ImagesData.other[0],
            name: 'Business Rescue and Insolvency',
            iconType: 'TrendingDown',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Corporate rescue proceedings and restructuring</li>
                    <li>Liquidations, sequestrations, and winding-up procedures</li>
                    <li>Enforcement of creditor rights and security</li>
                    <li>Advisory for distressed businesses and stakeholders</li>
                </ul>
            )
        },
        {
            id: 11,
            image: ImagesData.other[1],
            name: 'Tax Advice and Litigation',
            iconType: 'DollarSign',
            details: (
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Corporate and personal tax planning advisory</li>
                    <li>Handling revenue authority audits, disputes, and objections</li>
                    <li>Tax Court litigation and alternative dispute resolution</li>
                    <li>Cross-border transaction structuring for tax efficiency</li>
                </ul>
            )
        },
    ]
}