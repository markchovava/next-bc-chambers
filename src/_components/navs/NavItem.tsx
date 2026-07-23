"use client"

import Link from 'next/link'
import { motion } from 'motion/react'
import { MontserratRegular } from '@/_assets/fonts/montserrat/_MontserratFont'


interface Props {
    name: string
    href: string
}

export default function NavItem({ name, href }: Props) {
    return (
        <>
            <Link href={href}>
                <motion.li
                    className={`${MontserratRegular.className} 
                    ease-in-out duration-200 cursor-pointer font-bold
                    uppercase text-md text-gray-50 hover:text-sky-400 pt-2 pb-2
                    border-b-3 border-transparent hover:border-sky-400 hover:border-b-3`}>
                    {name}
                </motion.li>
            </Link>
        </>
    )
}
