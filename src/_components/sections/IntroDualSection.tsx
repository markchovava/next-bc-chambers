"use client"

import Link from "next/link"
import Heading1 from "../headings/Heading1"
import TitleSmall from "../titles/TitleSmall"
import Button from "../buttons/Button"
import { ReactNode } from "react"
import { motion, Transition } from 'motion/react'

interface Props {
    subtitle: string
    title: string
    details: ReactNode
    href?: string
    btnName?: string
    dir?: 'left' | 'right'
}

const smoothTransition = (delay: number): Transition => ({
    duration: 1.4,
    delay,
    ease: [0.16, 1, 0.3, 1] as const, // gentle ease-out, no snap at the end
})

export default function IntroDualSection({
    title,
    subtitle,
    details,
    href = '#',
    btnName = '',
    dir = 'left'
}: Props) {
    const col1 = dir === 'right' ? 'lg:order-2' : 'lg:order-1'
    const col2 = dir === 'right' ? 'lg:order-1' : 'lg:order-2'

    return (
        <>
            <section className="w-full">
                <div className={`container__primary 
                    grid lg:grid-cols-2 grid-cols-1 gap-8 items-center`}>

                    {/* IMAGE COLUMN WITH SCROLL TRIGGER */}
                    <div className={`lg:h-120 h-100 w-full ${col1}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={smoothTransition(0)}
                            className="w-full h-full bg-gray-400 overflow-hidden rounded-lg">
                        </motion.div>
                    </div>

                    {/* CONTENT COLUMN WITH SCROLL TRIGGER */}
                    <div className={`${col2} w-full lg:h-120 flex flex-col justify-center gap-9`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={smoothTransition(0.25)}>
                            <TitleSmall name={subtitle} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={smoothTransition(0.5)}>
                            <Heading1 name={title} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={smoothTransition(0.75)}>
                            <p className="text-xl">
                                {details}
                            </p>
                        </motion.div>

                        {btnName &&
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={smoothTransition(1)}>
                                <Link href={'#'}>
                                    <Button
                                        name={btnName}
                                        css="text-lg py-3 px-9 text-white"
                                    />
                                </Link>
                            </motion.div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}