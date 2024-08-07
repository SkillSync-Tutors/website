
export default async function About() {
  return (
    <div className="flex flex-col">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md py-10">
              <h1 className="text-8xl text-[#103C42] font-bold text-center ">
                About Us
              </h1>
            </div>
          </div>
        </div>

        <div className="hero bg-gray-100 py-16">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/about/img1.png"
                className="w-[700px]" />
              <h1 className="text-[#103C42] text-lg font-bold pt-6">
                Success for All
              </h1>
            </div>
            <div>
              <p className="text-[#103C42] font-bold ml-80 pl-20 w-4/5">
                At SkillSync Tutors, we offer more than just academic support; we provide a pathway to success tailored to each student's needs. 
                <br/>
                <br/>
                Our platform ensures personalized attention for students and rewarding opportunities for tutors. 
                Whether it's homework help or exam preparation, SkillSync supports everyone involved.
              </p>
            </div>
          </div>
        </div>
        
        <div className="hero py-16">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/about/img2.png"
                className="w-[700px]" />
            </div>
            <div>
              <p className="text-[#103C42] font-bold pl-20 w-3/5">
                Our mission at Skill Sync is to make quality education accessible to everyone, anytime and anywhere. 
                <br/>
                <br/>
                With our online, user-friendly platform, it makes it easy for both students and tutors 
                to navigate and connect. No matter where you are, Skill Sync makes learning convenient and effective.
              </p>
            </div>
          </div>
        </div>

        <div className="hero bg-gray-100 py-16">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/about/img3.png"
                className="w-[700px]" />
              <h1 className="text-[#103C42] text-lg font-bold pt-6">
                Empowering Learning
              </h1>
            </div>
            <div>
              <p className="text-[#103C42] font-bold ml-80 pl-20 w-4/5">
                Skill Sync is committed to fostering a love for learning and helping students reach their full potential. 
                <br/>
                <br/>
                Tutors benefit from a collaborative community and valuable resources that enhance their teaching skills. 
                Our vast network of experienced educators ensures excellent quality in every session.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text-xl text-[#103C42] font-bold text-center py-10">
            Interested in who made this possible?
          </h1>
          <a href="/our-team" className=" hover:scale-105 hover:brightness-[0.95] transition duration-150 ease-in-out">
            <button className="btn text-white bg-[#103C42] px-8 py-1 text-4xl font-normal">View Our Team</button>
          </a>
        </div>

        <div className="bg-[#103C42] flex relative justify-center items-center">
          <img src="/about/bgpalce.png" alt="Background" className="rounded-md my-20 w-5/6"></img>
            <div className="absolute text-white text-5xl -translate-y-20">
              Get Started
            </div>
            <a href="/services" className="absolute translate-y-10" target="_blank">
              <button className="btn text-white bg-[#103C42] px-2 text-xl font-normal border-0">Create Account</button>
            </a>
        </div>

    </div>
  );
}
