import React, { useEffect, useState } from 'react'
import MyButton from './MyButton'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react'

const ProjectSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    useEffect(() => {
        const updateCardstoShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1)
            }

        }

        updateCardstoShow()

        window.addEventListener('resize', updateCardstoShow)

        return () => {
            window.removeEventListener('resize', updateCardstoShow)
        }
    }, [])

    const nextProjext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProjext = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <>
            <motion.div initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}

                className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='ProjectSection'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-3 text-center'>Projects <span className='underline underline-offset-4 decoration-2 under font-light'>Completed</span></h1>
                <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces, Building Legacies - Explore Our Portfolio</p>

                {/* slider buttons  */}

                <div className='flex justify-end items-center mb-8'>
                    <MyButton onClick={prevProjext} className='p-3 bg-gray-200 mr-2 cursor-pointer' arial-label='Previous Project'>
                        <img src={assets.left_arrow} alt="Previous" />
                    </MyButton>

                    <MyButton onClick={nextProjext} className='p-3 bg-gray-200 mr-2 cursor-pointer' arial-label='Next Project'>
                        <img src={assets.right_arrow} alt="Next" />
                    </MyButton>
                </div>

                {/* project slider container */}

                <div className='overflow-hidden'>
                    <div className='flex gap-8 transition-transform duration-200 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                        {projectsData.map((project, index) => (
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                                <img src={project.image} alt={project.title} className='w-full h-auto md-14' />

                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                        <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>

                                        <p className='text-gray-500 text-sm'>{project.price} <span className='mx-1'>|</span> {project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectSection