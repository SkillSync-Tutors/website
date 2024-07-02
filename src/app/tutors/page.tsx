'use client'

import Image from 'next/image'
import Carousel from 'react-elastic-carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'tailwindcss/tailwind.css'

const tempData = [
  {
    name: 'Black Woman',
    image: '/tutors/black_woman.png',
    school: 'Waterloo Comp Sci Student',
    teachables: ['Functions Grade 11 (MCR3U)', 'Functions Grade 12 (MCR4U)'],
  },
  {
    name: 'White Man',
    image: '/tutors/white_man.png',
    school: 'McMaster Health Science Student',
    teachables: ['Biology Grade 12 (IDK4U)'],
  },
  {
    name: 'Black Woman',
    image: '/tutors/black_woman.png',
    school: 'Waterloo Comp Sci Student',
    teachables: ['Functions Grade 11 (MCR3U)', 'Functions Grade 12 (MCR4U)'],
  },
  {
    name: 'White Man',
    image: '/tutors/white_man.png',
    school: 'McMaster Health Science Student',
    teachables: ['Biology Grade 12 (IDK4U)'],
  },
  {
    name: 'Black Woman',
    image: '/tutors/black_woman.png',
    school: 'Waterloo Comp Sci Student',
    teachables: ['Functions Grade 11 (MCR3U)', 'Functions Grade 12 (MCR4U)'],
  },
  {
    name: 'White Man',
    image: '/tutors/white_man.png',
    school: 'McMaster Health Science Student',
    teachables: ['Biology Grade 12 (IDK4U)'],
  },
]

const TutorCard = ({ image, name, school, teachables }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Image
      src={image}
      width={400}
      height={300}
      alt={name}
      className="object-cover"
    />
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p className="text-gray-700 text-base mb-2">{school}</p>
      <p className="text-gray-600 text-sm mb-4">Teachables:</p>
      {teachables.map((subject, index) => (
        <p key={index + subject} className="text-gray-800 text-sm">
          {subject}
        </p>
      ))}
      <button className="mt-4 bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
        Book Session
      </button>
    </div>
  </div>
)

const TutorPage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

  return (
    <div className="mt-12 mx-16 mb-32">
      <h1 className="text-5xl text-teal-800 mb-10">Our Tutors</h1>
      <div className="mt-10">
        <Carousel
          itemsToShow={3}
          itemsToScroll={3}
          outerSpacing={100}
          itemPadding={[10]}
          renderArrow={({ type, onClick }) => (
            <div className="h-full flex justify-center">
              <button
                onClick={onClick}
                className="my-auto h-min bg-teal-800 rounded-full p-2 shadow-md hover:bg-teal-600 transition duration-300 text-white"
              >
                {type === 'PREV' ? (
                  <ArrowLeft size={24} />
                ) : (
                  <ArrowRight size={24} />
                )}
              </button>
            </div>
          )}
          renderPagination={({ pages, activePage, onClick }) => (
            <div className="flex mt-4 justify-center">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => onClick(page)}
                  className={`w-3 h-3 mx-1 rounded-full ${activePage === page ? 'bg-teal-800' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}
        >
          {tempData.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default TutorPage
