import React from 'react'
import facebook from "@/public/assets/facebook.svg";
import insta from "@/public/assets/instagram.svg";
import mail from "@/public/assets/email.svg";
import seal from "@/public/assets/seal.svg";
import Image from 'next/image';

const Footer = () => {
  return (
    <>
    {/* Newsletter */}
    <div className='flex flex-col gap-7 md:flex-row md:gap-0 justify-between items-center border bg-background border-[#FEEFDC] rounded-lg shadow-lg px-6 py-8 max-w-4xl mx-auto relative -mb-10 mt-32 '>
        <div className=''>
            <p className='text-xl text-[#777]'>Newsletter</p>
            <h1 className='text-3xl text-[#777] w-10/12'>To get weekly & monthly news, <span className='text-primary2'>Subscribe</span> to our newsletter.</h1>
        </div>
        <div className='flex'>
            <input type='text' placeholder='Enter your email' className='border border-primary2 p-2'/>
            <button className='bg-primary2 text-white px-4 py-2'>Subscribe</button>
        </div>
    </div>
    {/* Main Footer  */}
    <div className='w-full bg-primary'>
        <div className='max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row justify-between pt-20 pb-7 gap-7 md:gap-0'>
            <div className='flex flex-col justify-evenly py-7'>
                <Image src={seal} alt='SEAL OF BUILDD' className='md:mb-4'/>
                <div>
                    <h1 className='text-background font-semibold text-3xl md:text-4xl pt-7'>Shanakht</h1>
                    <h1 className='text-background font-semibold text-xl md:text-2xl'>shanakht.official10@gmail.com</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-24'>
                <div className='text-background'>
                    <h1 className='text-3xl md:text-4xl font-semibold mb-5'>Quick Links</h1>
                    <ul className='text-xl md:text-2xl font-semibold font-urbanist space-y-2 md:space-y-4'>
                        <li>Home Page</li>
                        <li>What we do </li>
                        <li>Get Involved </li>
                        <li>Team</li>
                        <li>Contact </li>
                    </ul>
                </div>
                <div className='text-background'>
                    <h1 className='text-3xl md:text-4xl font-semibold mb-5'>Support</h1>
                    <ul className='text-xl md:text-2xl font-semibold font-urbanist space-y-2 md:space-y-4'>
                        <li>Donate</li>
                        <li>Help & FAQ</li>
                        <li>Events</li>
                        <li>Podcasts</li>
                    </ul>
                </div>
                <div className='text-background space-y-6'>
                    <div className='flex items-center gap-4'>
                        <Image src={mail} alt='Email'/>
                        <Image src={facebook} alt='Facebook'/>
                        <Image src={insta} alt='Instagram'/>
                    </div>
                    <ul className='text-xl md:text-2xl font-semibold font-urbanist underline space-y-2 md:space-y-4'>
                        <li>Donate</li>
                        <li>Help & FAQ</li>
                        <li>Events</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='w-full text-center mx-auto pb-1 pt-4'>
            <p className='text-white text-xl md:text-2xl font-light'>© 2021 Shanakht. All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer