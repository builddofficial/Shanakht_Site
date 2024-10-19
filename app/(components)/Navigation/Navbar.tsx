import React from 'react'
import ShanakhtLogo from "@/public/assets/ShanakhtLogo.svg"
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
        <div className='max-w-screen-xl flex justify-between items-center py-7 mx-auto'>
            <Image src={ShanakhtLogo} alt={"Shankht Logo"} className='w-auto'/>
            <ul className='flex gap-14 font-semibold font-urbanist text-NavyBlue text-xl'>
                <li>Home</li>
                <li>What We Do</li>
                <li>Get Involved</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
            <div className='flex gap-7 items-center'>
                <div className='text-NavyBlue font-semibold font-urbanist underline'>Log in</div>
                <div className='px-5 py-2 text-white font-urbanist font-semibold bg-primary2'>Join Us</div>
            </div>

        </div>
    </>
  )
}

export default Navbar