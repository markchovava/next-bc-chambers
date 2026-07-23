"use client"

import React, { useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { toast } from 'react-toastify';
import ButtonAdminClose from '../../_components/buttons/ButtonAdminClose';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import HeadingSecondary from '../../_components/headings/HeadingSecondary';
import TextInputDefault from '../../_components/forms/inputs/TextInputDefault';
import { ButtonAdminSubmit } from '../../_components/buttons/ButtonAdminSubmit';
import SelectAdminDefault from '../../_components/forms/selects/SelectAdminDefault';
import ImageInputDefault from '../../_components/forms/image/ImageInputDefault';
import { _newsStoreAction } from '../../_data/actions/NewsActions';
import { useNewsStore } from '../../_data/store/useNewsStore';
import { listNumbers } from '@/_utils/formatNumber';
import TextArea from '@/_components/forms/textareas/TextArea';
import { StatusPubData } from '@/_data/sample/StatusData';
import RichTextEditor from '../../_components/forms/editors/RichTextEditor';



const title = "Add News"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}


export default function NewsAddModal() {
    const {
        data,
        errors,
        toggleModal,
        isSubmitting,
        getDataList,
        resetData,
        setValue,
        setImage,
        setInputValue,
        setToggleModal,
        clearErrors,
        setIsSubmitting,
        validateForm,
    } = useNewsStore()

    useEffect(() => {
        resetData()
    }, [resetData])

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError =
                validation.errors.title ||
                validation.errors.status ||
                validation.errors.content;
            toast.warn(firstError);
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData()
        formData.append('title', data.title ?? '')
        formData.append('priority', data.priority.toString() ?? '')
        formData.append('status', data.status ?? '')
        formData.append('content', data.content ?? '')
        if (data.imageUpload) {
            formData.append('image', data.imageUpload)
        }

        try {
            const res = await _newsStoreAction(formData);
            console.log('res _newsStoreAction', res)
            const { status, message } = res;
            switch (status) {
                case 1:
                    await getDataList();
                    clearErrors();
                    resetData();
                    setIsSubmitting(false);
                    setToggleModal(false)
                    toast.success(message);
                    return
                case 0:
                    setIsSubmitting(false);
                    toast.warn(message)
                    return
                default:
                    toast.success('Something went wrong, please try again.');
                    setIsSubmitting(false);
                    return
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setIsSubmitting(false);
            toast.error('Failed to save data. Please try again.');
        }
    }


    return (
        <AnimatePresence>
            {toggleModal && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`w-screen h-screen fixed top-0 left-0 z-200 overflow-y-auto`}>
                    <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-40'></div>
                    <div className='w-full h-full absolute z-10 overflow-auto scroll__width py-24'>
                        <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                            <div className='flex items-center justify-end'>
                                <ButtonAdminClose onClick={handleToggleModal} />
                            </div>

                            <form onSubmit={handleSubmit}>
                                <HeadingSecondary title={title} css='text-center' />
                                <SpacerPrimary />
                                <hr className="w-full border-b border-gray-100" />
                                <SpacerPrimary />

                                <div className='lg:w-[30%] w-[60%]'>
                                    <ImageInputDefault
                                        label='Image'
                                        name='image'
                                        value={data.image}
                                        onChange={(e) => setImage(e)}
                                        error={errors.image}
                                    />
                                </div>
                                <SpacerPrimary />

                                <TextInputDefault
                                    label='Title'
                                    name='title'
                                    type="text"
                                    value={data.title}
                                    placeholder='Enter the title...'
                                    onChange={setInputValue}
                                    error={errors.title}
                                />
                                <SpacerPrimary />

                                <RichTextEditor
                                    label="Content"
                                    name="content"
                                    value={data.content}
                                    placeholder="Enter your Content..."
                                    onChange={setInputValue}
                                    error={errors.content}
                                />

                                <SelectAdminDefault
                                    label='Status'
                                    name='status'
                                    data={StatusPubData}
                                    value={data.status}
                                    onChange={setInputValue}
                                    error={errors.status}
                                />
                                <SpacerPrimary />

                                <SelectAdminDefault
                                    label='Priority'
                                    name='priority'
                                    data={listNumbers(7)}
                                    value={data.priority}
                                    onChange={setInputValue}
                                    error={errors.priority}
                                />
                                <SpacerPrimary />

                                <div className='flex items-center justify-center'>
                                    <ButtonAdminSubmit
                                        title='Submit'
                                        css='px-12 text-white py-4'
                                        status={isSubmitting}
                                    />
                                </div>
                                <SpacerPrimary />
                            </form>
                        </section>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}