
export default async function About() {
  return (
    <div className="flex flex-col">
        <div className="py-10">
          <h1 className="text-8xl text-[#103C42] font-bold text-center ">
            About Us
          </h1>
        </div>

        <div className="bg-gray-100 py-16 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img src="/about/img1.png" className="w-96"></img>
            <h1 className="text-[#103C42] text-lg font-bold pt-6">
              Success for All
            </h1>
          </div>
          <div className="w-1/3 text-[#103C42] font-bold ml-80 pl-20">
            At SkillSync Tutors, we offer more than just academic support; we provide a pathway to success tailored to each student's needs. 
          <br/>
          <br/>
            Our platform ensures personalized attention for students and rewarding opportunities for tutors. 
            Whether it's homework help or exam preparation, SkillSync supports everyone involved.
          </div>
        </div>

        <div className="py-16 flex items-center justify-center">
        <div className="w-1/3 text-[#103C42] font-bold ">
            Our mission at Skill Sync is to make quality education accessible to everyone, anytime and anywhere. 
          <br/>
          <br/>
            With our online, user-friendly platform, it makes it easy for both students and tutors 
            to navigate and connect. No matter where you are, Skill Sync makes learning convenient and effective.
          </div>
          <div className="flex flex-col items-center justify-center ml-80 pl-20">
            <img src="/about/img2.png" className="w-96"></img>
            <h1 className="text-[#103C42] text-lg font-bold pt-6">
              Accessible Quality Education
            </h1>
          </div>
        </div>

        <div className="bg-gray-100 py-16 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img src="/about/img3.png" className="w-96"></img>
            <h1 className="text-[#103C42] text-lg font-bold pt-6">
              Empowering Learning
            </h1>
          </div>
          <div className="w-1/3 text-[#103C42] font-bold ml-80 pl-20">
            Skill Sync is committed to fostering a love for learning and helping students reach their full potential. 
          <br/>
          <br/>
            Tutors benefit from a collaborative community and valuable resources that enhance their teaching skills. 
            Our vast network of experienced educators ensures excellent quality in every session.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text-xl text-[#103C42] font-bold text-center py-10">
            Interested in who made this possible?
          </h1>
          <a href="/our-team" className=" hover:scale-105 hover:brightness-[0.95] transition duration-150 ease-in-out">
            <p className="text-white bg-[#103C42] text-4xl rounded-lg px-8 py-1">
              View Our Team
            </p>
          </a>
        </div>

        <div className="bg-[#103C42] flex relative justify-center items-center">
          <img src="/about/bgpalce.png" alt="Background" className="rounded-md my-20 w-5/6"></img>
            <div className="absolute text-white text-5xl -translate-y-20">
              Get Started
            </div>
            <a href="/services" className="absolute translate-y-10" target="_blank">
              <div className=" text-white text-2xl bg-[#103C42] p-5 rounded-lg scale-75 hover:scale-[0.8] hover:brightness-[0.95] transition duration-150 ease-in-out">
                View Tutors
              </div>
            </a>
        </div>
    </div>
  );
}
