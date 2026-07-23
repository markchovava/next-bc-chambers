"use client"
import { motion, Transition } from "motion/react"
import Heading1 from "../headings/Heading1"


interface Props {
    name: string
}

const smoothTransition = (delay: number): Transition => ({
    duration: 1.4,
    delay,
    ease: [0.16, 1, 0.3, 1] as const, // gentle ease-out, no snap at the end
})

export default function TitleNormal({ name }: Props) {
    return (
        <>
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
        </>
    )
}
