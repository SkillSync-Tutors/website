import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
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
          <div className="justify-center px-10 py-8 mt-32 text-lg bg-cyan-950 rounded-[50px] max-md:px-5 max-md:mt-10">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}