import React from 'react'
import { assets } from '../assets/assets'
import MyButton from './MyButton'
import { motion } from "motion/react"

const AboutSection = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}

                className='flex flex-col justify-center items-center container mx-auto py-20 md:px-20 lg:px-32 w-full overflow-hidden' id='AboutSection'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-3'>About <span className='underline underline-offset-4 decoration-2 under font-light'>Our Brand</span></h1>
                <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>

                <div className='flex flex-col items-center md:flex-row md:items-start md:gap-20'>
                    <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
                    <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>10+</p>
                                <p>Years of Experience</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>12+</p>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>20+</p>
                                <p>Minimum Sq. Ft. Delivered</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>25+</p>
                                <p>Ongoing Projects</p>
                            </div>
                        </div>
                        <p className='my-10 max-w-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolore inventore excepturi minus hic repellendus obcaecati quia, natus sequi consequatur vitae voluptas ipsam aliquam doloremque officia numquam sed? Delectus, ipsa.</p>
                        <MyButton className='bg-blue-500 text-white px-5 py-3 rounded-md cursor-pointer hover:bg-blue-600'>Learn More</MyButton>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutSection