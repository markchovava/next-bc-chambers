"use client"

import { motion, Transition } from "motion/react"
import Heading1 from "../headings/Heading1"
import { ServiceData } from "@/_data/sample/ServiceData"
import Card from "../cards/Card"



interface Props {
    name: string
}

const smoothTransition = (delay: number): Transition => ({
    duration: 1.4,
    delay,
    ease: [0.16, 1, 0.3, 1] as const, // gentle ease-out, no snap at the end
})

const STAGGER_STEP = 0.15 // seconds between each card's entrance

export default function ServiceSection({ name }: Props) {
    return (
        <>
            <section className="w-full">
                <div className="container__primary">

                    <div className='mb-5 flex items-center justify-start gap-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={smoothTransition(0)}
                        >
                            <Heading1 name={name} />
                        </motion.div>
                        <div className='h-0.5 bg-sky-400 flex-1'></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {ServiceData.list.map((i, key) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={smoothTransition(key * STAGGER_STEP)}
                            >
                                <Card
                                    name={i.name}
                                    href={`/service/${i.id}`} />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
