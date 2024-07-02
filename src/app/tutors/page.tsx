'use client';

import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import 'tailwindcss/tailwind.css';

const tempData = [
  {
    name: "Black Woman",
    image: "/tutors/black_woman.png",
    school: "Waterloo Comp Sci Student",
    teachables: [
      "Functions Grade 11 (MCR3U)",
      "Functions Grade 12 (MCR4U)",
    ],
  },
  {
    name: "White Man",
    image: "/tutors/white_man.png",
    school: "McMaster Health Science Student",
    teachables: [
      "Biology Grade 12 (IDK4U)",
    ],
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const TutorPage = () => {
  return (
    <div className="mt-12 mx-16 mb-32">
      <h1 className="text-5xl text-teal-800 text-center mb-10">Our Tutors</h1>
      <div className="mt-20">
        <Carousel breakPoints={breakPoints} itemPadding={[10, 50]} outerSpacing={0}>
          {tempData.map((tutor, index) => (
            <div key={index} className="p-4">
              <div className="text-center">
                <Image src={tutor.image} alt={tutor.name} width={415} height={311} className="mx-auto" object-fit="cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{tutor.name}</h2>
                  <p className="text-gray-600">{tutor.school}</p>
                  <div className="mt-2">
                    {tutor.teachables.map((subject, i) => (
                      <span key={i} className="block text-gray-800">{subject}</span>
                    ))}
                  </div>
                  <button className="mt-4 px-4 py-2 bg-teal-800 text-white rounded">Book Session</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TutorPage;
