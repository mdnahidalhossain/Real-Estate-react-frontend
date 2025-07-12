import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import MyButton from './MyButton'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        // to prevent page scrolling while menu is on for mobile screens
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        // reset page scrolling when screen size changes from mobile to other screens
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu])
    return (
        <>
            <div className='absolute top-0 left-0 w-full z-10'>
                <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                    <img src={assets.logo} alt="" />
                    <ul className='hidden md:flex gap-7 text-white'>
                        <Link onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('Header')?.scrollIntoView({ behavior: 'smooth' });
                        }} className='cursor-pointer hover:text-gray-400'>Home</Link>

                        <Link onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('AboutSection')?.scrollIntoView({ behavior: 'smooth' });
                        }} className='cursor-pointer hover:text-gray-400'>About</Link>

                        <Link onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('ProjectSection')?.scrollIntoView({ behavior: 'smooth' });
                        }} className='cursor-pointer hover:text-gray-400'>Projects</Link>

                        <Link onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('TestimonialSection')?.scrollIntoView({ behavior: 'smooth' });
                        }} className='cursor-pointer hover:text-gray-400'>Testimonials</Link>

                    </ul>
                    <MyButton className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer'>Sign Up</MyButton>

                    {/* mobile menu icon  */}
                    <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt='' />

                </div>

                {/* components for mobile menu bar */}
                <div className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-end p-6 cursor-pointer '>
                        <div onClick={() => setShowMobileMenu(false)} className='bg-gray-300 p-3 rounded-full'>
                            <img src={assets.cross_icon} className='w-5' alt="" />
                        </div>
                    </div>
                    <ul className='flex flex-col items-center gap-2 my-5 px-5 text-lg font-medium'>

                        <Link onClick={(e) => {
                            e.preventDefault();

                            setShowMobileMenu(false)

                            document.getElementById('Header');
                            
                        }} className='px-4 py-2 rounded-full inline-block'>Home</Link>

                        <Link onClick={(e) => {
                            e.preventDefault();

                            setShowMobileMenu(false)

                            document.getElementById('AboutSection')?.scrollIntoView({ behavior: 'smooth' });

                        }}

                            className='px-4 py-2 rounded-full inline-block'>About</Link>

                        <Link onClick={(e) => {
                            e.preventDefault();

                            setShowMobileMenu(false)

                            document.getElementById('ProjectSection')?.scrollIntoView({ behavior: 'smooth' });

                        }}

                            className='px-4 py-2 rounded-full inline-block'>Projects</Link>

                        <Link onClick={(e) => {
                            e.preventDefault();

                            setShowMobileMenu(false)

                            document.getElementById('TestimonialSection')?.scrollIntoView({ behavior: 'smooth' });

                        }}

                            className='px-4 py-2 rounded-full inline-block'>Testimonials</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar 