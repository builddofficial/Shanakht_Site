"use client";

import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import joinUs from "@/public/assets/joinUs.mov"

// import joinUs from "@/public/assets/5.mp4"
const JoinUs = () => {
  return (
    <>
        <div className='max-w-screen-xl mx-auto px-4 my-48'>
            <h1 className='font-primary text-5xl md:text-7xl font-bold text-primary mb-4'>JOIN OUR COMMUNITY</h1>
            <div className='flex gap-4 flex-col xl:flex-row'>
                <div className='space-y-8'>
                    <p className='text-primary2 font-semibold text-2xl md:text-3xl'>Shanakht welcomes volunteers to help with content creation, event organization, and outreach efforts.</p>
                    <div className='font-semibold text-xl md:text-2xl space-y-4 w-11/12'>
                        <p>Want to engage in public discourse but don’t know where to start or feel disconnected from it? 
                        Don’t Worry!</p>
                        <p className='text-primary'>Shanakht creates opportunities to participate meaningfully and contribute to the larger conversation</p>
                    </div>
                </div>
                <div className='relative'>
                    <VideoPlayer src={"/assets/joinUs.mov"} width={1420} />
                    <Image src="/assets/joinUs.svg" alt="Join Us" className='absolute -top-32 -right-12 hidden md:block' width={291} height={200}/>
                </div>
            </div>
            <div className='flex items-center justify-between my-7 flex-col xl:flex-row gap-7'>

                <div className='space-y-5'>
                    <h3 className='font-bold text-4xl'>How to Apply</h3>
                    <p className='font-medium text-2xl md:text-3xl w-11/12'>Interested volunteers can apply through logging in on this platform. <Link href="https://docs.google.com/forms/d/e/1FAIpQLSemkHoPOpvNdEwDGqIADBYUQMwA3Og3g3E7N6rG8TOwF8LZXg/viewform" className='text-primary2 underline' >Fill out</Link> our application form and submit a brief statement of interest, to join us!</p>
                </div>

                <Image src="/assets/pfps.svg" alt="Join Us" className='' width={580} height={100}/>
            </div>
        </div>
    </>
  )
}

export default JoinUs