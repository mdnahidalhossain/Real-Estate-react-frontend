import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const Header = () => {
    return (
        <>
            <div className='min-h-screen md-4 bg-cover bg-center w-full overflow-hidden flex items-center' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
                <Navbar />
                <motion.div initial={{ opacity: 0, y: 100 }}
                    transition={{duration: 1.5}}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{once: true}}
                    
                    className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
                    <div className='space-x-6 mt-16'>
                        <Link to={"/projects"} className='border border-white rounded-md p-3 hover:bg-white hover:text-black'>Projects</Link>
                        <Link onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('ContactSection')?.scrollIntoView({ behavior: 'smooth' });
                        }} className='bg-white text-black rounded-md p-3 hover:bg-blue-500 hover:text-white'>Contact Us</Link>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default Header