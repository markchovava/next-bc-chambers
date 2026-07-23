"use client"
import Link from 'next/link'
import { motion } from 'motion/react'
import { BillCorpNarBold } from '@/_assets/fonts/BillCorpNar/BillCorpNarFont'
import { MontserratMedium } from '@/_assets/fonts/montserrat/_MontserratFont'


interface Props {
    textCss?: string
    iconCss?: string
}

export default function Logo({ textCss = 'text-xl', iconCss = 'h-18' }: Props) {
    return (
        <Link href='/'>
            <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.85 }}
                className='flex justify-center items-center gap-2'>
                <img src='/assets/images/logos/logo.png' alt='Logo' className={`${iconCss} w-auto`} />
                <p className={`${textCss} pt-3 uppercase flex flex-col`}>
                    <span className={`${BillCorpNarBold.className} text-sky-500 text-2xl tracking-widest leading-3`}>B. CHIPADZA</span>
                    <span className={`${MontserratMedium.className} text-lg`}>LAW CHAMBERS</span>
                </p>
            </motion.div>
        </Link>
    )
}
