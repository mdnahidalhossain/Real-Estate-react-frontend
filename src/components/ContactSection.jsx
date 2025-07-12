import React from 'react'
import MyButton from './MyButton'
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const MY_ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

const ContactSection = () => {

    const [result, setResult] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", MY_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            event.target.reset();

            toast.success("Message sent succesfully!")
        } else {
            console.log("Error", data);
            setResult("");
            toast.error("Error sending message!")
        }
    };

    return (
        <>
            <motion.div initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}

                className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='ContactSection'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-3 text-center'>Contact <span className='underline underline-offset-4 decoration-2 under font-light'>With Us</span></h1>
                <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Ready to Make a Move? Let's Build Your Future Together!</p>

                <form onSubmit={handleSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
                    <div className='flex flex-wrap'>
                        <div className='w-fit md:w-1/2 text-left'>
                            Your Name
                            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Your Name' name='Name' required />
                        </div>
                        <div className='w-fit md:w-1/2 text-left md:pl-4'>
                            Your Email
                            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" placeholder='Your Email' name='Email' required />
                        </div>
                    </div>

                    <div className='my-6 text-left'>
                        Message
                        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48' name="Message" placeholder='Type your message...' required></textarea>
                    </div>

                    <MyButton type="submit" className="bg-blue-500 text-white py-2 px-12 mb-10 rounded-md cursor-pointer hover:bg-blue-600">
                        {result ? result : "Send Message"}
                    </MyButton>
                </form>
            </motion.div>
        </>
    )
}

export default ContactSection