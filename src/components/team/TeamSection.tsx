import React from 'react'
import UserCard from './UserCard'

const teams = [
  {
    id: 1,
    name: 'Ketema Girma',
    title: 'CEO and Founder',
    image: '/images/ketema.jpg',
    bio: 'Ketema Girma is the visionary CEO and Founder of our company. With over 5 years of experience in the tech industry, Ketema has led numerous successful projects. His passion for innovation and user-centric design has been the driving force behind our company\'s growth and success.',
    linkedIn: 'https://www.linkedin.com/in/ketema-girma-608729228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 2,
    name: 'Tesfaye Adugna',
    title: 'CTO',
    image: '/images/tesfish.jpg',
    bio: 'Tesfaye Adugna serves as our Chief Technology Officer, bringing with him a wealth of knowledge in software Engineering and emerging technologies. His expertise in problem solving has been instrumental in developing our cutting-edge products and services, and also helped him to be part of Google team currently.',
    linkedIn: 'https://www.linkedin.com/in/tesfaye-adugna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 3,
    name: "Admas Terefe",
    title: "COO",
    image: '/images/admas_portrait.jpg',
    bio: 'Admas Terefe, our Chief Operating Officer, is the backbone of our company\'s day-to-day operations. With her strong background in business management and strategy, Admas ensures that our company runs smoothly and efficiently, allowing us to deliver the best possible service to our clients.',
    linkedIn: 'https://www.linkedin.com/in/admas-girma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  }
]

const TeamSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((member) => (
          <UserCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default TeamSection

