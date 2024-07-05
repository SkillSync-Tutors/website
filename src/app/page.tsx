"use client";

import Link from "next/link";
import Image from "next/image";
import ContactUs from "./contact/contact";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center font-medium text-white bg-cyan-950 bg-opacity-40">
        <div className="relative flex flex-col justify-center items-center px-16 py-16 min-h-[732px] max-md:px-5 max-md:max-w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-10">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8840965f38e9b23ffbfd66b672225770ee579507e0168582314555feae0f630?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d"
              alt="SkillSync Tutors"
              className="object-cover w-full h-full"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-[#103C42] opacity-[0.37]"></div>
          </div>
          <div className="relative flex flex-col items-center z-20 mt-40 max-w-full w-[919px] max-md:mt-10">
            <div className="self-stretch text-8xl text-center max-md:max-w-full max-md:text-4xl">
              SkillSync Tutors
            </div>
            <div className="mt-24 text-base text-center max-md:mt-10 max-md:max-w-full">
              Hey There! Welcome to SkillSync Tutors. We connect Grade 11-12
              students in Ontario with top-notch tutors to help you ace your
              studies and achieve your university dreams. Let’s get started!
            </div>
            <Link href="/about" className="justify-center px-10 py-8 mt-32 text-lg bg-cyan-950 rounded-[50px] max-md:px-5 max-md:mt-10">
                Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 bg-cyan-800 bg-opacity-10 max-md:px-5">
        <div className="mt-1.5 w-full max-w-[1133px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5638495288d8655a837262afe91bf6b8b6bfa05682dd2bf81a78799fa12445b?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d"
                alt="SkillSync Tutors"
                className="grow mt-1 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
                layout="responsive"
                width={1000}
                height={560}
              />
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg font-medium text-cyan-950 max-md:mt-10">
                <div className="text-6xl max-md:text-4xl">
                  More about our brand
                </div>
                <div className="mt-9">
                  Passionate about education, we connect Ontario Grade 11-12
                  students with expert tutors for personalized, engaging, online
                  sessions to help achieve academic dreams. Join us!
                  <br />
                </div>
                <Link href="/about" className="justify-center self-start px-7 py-7 mt-11 text-white bg-cyan-950 rounded-[50px] max-md:px-5 max-md:mt-10">
                    Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs/>
    </div>
  );
}