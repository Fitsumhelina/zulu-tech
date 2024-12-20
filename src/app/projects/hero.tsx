import AnimatedLogoCloud from '@/components/custom/animated-icons'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
        <div className="content-center justify-self-start md:col-span-7 md:text-start">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Our Projects</h1>
          <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">Selected success stories from our project portfolio</p>
          <a href="/contact" className="border rounded-md p-2 dark:text-white dark:border-white">Contact Us</a>
        </div>
        <div className="hidden md:col-span-5 md:mt-0 md:flex">
          <Image className="dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg" alt="shopping illustration" width={400} height={400} />
          <Image className="hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg" alt="shopping illustration" width={400} height={400} />
        </div>
      </div>

    </section>
  )
}

export default Hero