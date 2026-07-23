"use client"
import { NoImageData } from '@/_data/sample/NoImage'
import Heading2 from '../headings/Heading2'
import Heading1 from '../headings/Heading1'
import { NewsData } from '@/_data/sample/NewsData'
import NewsItem from '../items/NewsItem'
import { motion, Transition } from 'motion/react'


interface Props {
    data: any
}

const smoothTransition = (delay: number): Transition => ({
    duration: 1.4,
    delay,
    ease: [0.16, 1, 0.3, 1] as const, // gentle ease-out, no snap at the end
})

export default function NewsViewSection({ data }: Props) {
    return (
        <>
            <section>
                <div className='container__primary grid lg:grid-cols-3 grid-cols-1 gap-8'>
                    <motion.div
                        className='group lg:col-span-2'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={smoothTransition(0)}
                            className='w-full bg-gray-400 h-120 rounded-xl overflow-hidden drop-shadow-lg'>
                            <img src={NoImageData} className='w-full h-full object-cover transition__effect group-hover:scale-110' />
                        </motion.div>
                        <div className='pt-10 px-4'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={smoothTransition(0.25)}
                                className='mb-6'>
                                <Heading2 name={data?.title ?? ''} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={smoothTransition(0.5)} >
                                {data?.content}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={smoothTransition(0.25)}
                        className='lg:cols-span-1'>
                        <Heading1 name={`Other Latest News`} />
                        <ul className='mt-4 pl-4 flex flex-col gap-3'>
                            {NewsData.list.slice(0, 8).map((i, key) => (
                                <NewsItem
                                    key={key}
                                    href={`/news/${i.id}`}
                                    name={i.title} />
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
