"use client"

import { useContactStore } from "@/_store/useContactStore"
import Heading2 from "../headings/Heading2"
import TextInput from "../forms/inputs/TextInput"
import TextArea from "../forms/textareas/TextArea"
import Button from "../buttons/Button"
import ContactForm from "../forms/ContactForm"
import IconDefault from "../icons/IconDefault"
import { AppInfoData } from "@/_data/sample/AppinfoData"
import CardIcon from "../cards/CardIcon"
import { useAppInfoStore } from "@/_store/useAppInfoStore"
import { useEffect } from "react"
import { motion, Transition } from "motion/react"


const smoothTransition = (delay: number): Transition => ({
    duration: 1.4,
    delay,
    ease: [0.16, 1, 0.3, 1] as const, // gentle ease-out, no snap at the end
})

interface Props {
    dbData: any
}


export default function ContactSection({ dbData }: Props) {
    const { data, setData } = useAppInfoStore()

    console.log('dbData', dbData)

    useEffect(() => {
        setData(dbData.data)
    }, [setData, dbData.data])



    return (
        <>
            <section className='w-full'>
                <div className='container__primary grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={smoothTransition(0)} >
                        <ContactForm />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={smoothTransition(0.3)} >
                        <Heading2 name="Our Contact Details" />
                        <div className="border-t border-gray-200 my-4 py-4 space-y-4">
                            <p className="">
                                We value our customers and encourage you to visit us during normal
                                business hours to explore our expert consulting solutions. Our team is
                                dedicated to enhancing your operational efficiency.
                            </p>
                            {data?.phone &&
                                <CardIcon
                                    name={data.phone}
                                    iconType='phone' />
                            }
                            {data?.email &&
                                <CardIcon
                                    name={data.email}
                                    iconType='email' />
                            }
                            {data?.address &&
                                <CardIcon
                                    name={AppInfoData.address}
                                    iconType='address' />
                            }
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
