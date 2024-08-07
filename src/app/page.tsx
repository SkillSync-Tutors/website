'use client';

import Link from 'next/link';
import Image from 'next/image';
import ContactUs from './contact/contact';

// function Button({ text, url }) {
const Button = ({ text, url, ...props }: { text: string; url: string }) => {
  return (
    <div {...props}>
      <div className="w-fit">
        <Link href={url}>
          <div className="justify-center px-4 py-2 text-lg bg-cyan-950 rounded-xl max-md:px-5 max-md:mt-10 text-white text-center">
            {text}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center font-medium text-white bg-cyan-950 bg-opacity-40">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://cdn.builder.io/api/v1/image/assets/TEMP/d8840965f38e9b23ffbfd66b672225770ee579507e0168582314555feae0f630?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Hey There! Welcome to SkillSync Tutors. We connect Grade 11-12
              students in Ontario with top-notch tutors to help you ace your
              studies and achieve your university dreams. Let’s get started!
            </p>
            <button className="btn btn-primary">SkillSync Tutors</button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="hero bg-base-200 w-full h-full">
          <div className="hero-content max-w-full w-full h-full flex flex-col lg:flex-row mx-20 my-20 max-h-full ">
            <div className="flex-shrink-0 lg:w-1/2 ">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5638495288d8655a837262afe91bf6b8b6bfa05682dd2bf81a78799fa12445b?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d"
                className="mr-auto ml-auto rounded-lg shadow-2xl w-[600px]"
              />
            </div>
            <div className="flex-grow mx-0 min-w-2 mr-[150px]">
              <h1 className="text-5xl font-bold text-black">
                More about our brand
              </h1>
              <p className="py-6 mr-auto text-black">
                Passionate about education, we connect Ontario Grade 11-12
                students with expert tutors for personalized, engaging, online
                sessions to help achieve academic dreams. Join us!
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 bg-customGrey max-w-full">
        <h2 className="text-5xl font-semibold text-center mb-8 mt-[80px]">
          Why 1-on-1 Tutor?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[120px] mx-[350px] mt-[50px] mb-[120px] px-8">
          <div className="text-center">
            <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Personalized academic support
            </h3>
            <p className="text-black">
              Whether it be test preparation, assignment help, or understanding
              a concept, our tutors are ready to help.
              <br />
              Choose between bringing your own materials or having the tutor
              prepare lessons.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Proven method of tutoring
            </h3>
            <p className="text-black">
              Our vast pool of tutoring experience led many students to academic
              success.
              <br />
              Our experience allows our tutors to identify and focus on the
              academic weakness of each student.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Up-to-date curriculum
            </h3>
            <p className="text-black">
              We consistently update our questions and worksheets to stay on top
              of Ontario’s curriculum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
