'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaLinkedin } from 'react-icons/fa'
import Button from './Button'
import Drawer from './Drawer'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'

interface TeamMember {
  id: number
  name: string
  title: string
  image: string
  bio: string
  linkedIn: string
}

interface UserCardProps {
  member: TeamMember
}

const UserCard: React.FC<UserCardProps> = ({ member }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='text-gray-900 p-4'>
      <div className="max-w-sm  rounded-lg s  dark:border-gray-700">
        <Image 
          className="rounded-lg h-80 w-full object-cover" 
          src={member.image} 
          alt={member.name} 
          width={320} 
          height={320}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <p className=" mb-3 text-gray-700 dark:text-gray-400 font-bold">{member.title}</p>
          <div className='flex justify-start items-center gap-3 dark:text-white text-blue-800 cursor-pointer '>
          <Button onClick={() => setIsOpen(true)}>
            Read bio  
          </Button>
          <FaArrowRight />
          </div>
        
        </div>
      </div>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-6">
          <Image 
            src={member.image} 
            alt={member.name} 
            width={300} 
            height={300} 
            className="rounded-lg mx-auto"
          />
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <p className="text-lg font-semibold">{member.title}</p>
          <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
          {member.linkedIn && (
            <a 
              href={member.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-800 hover:underline"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn Profile
            </a>
          )}
        </div>
      </Drawer>
    </div>
  )
}

export default UserCard

