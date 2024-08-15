export default async function About() {
    return (
      <div className="flex flex-col">
          <div className="bg-[#103C42] flex relative justify-center items-center">
            <img src="/about/bgpalce.png" alt="Background" className="rounded-md my-20 w-5/6 brightness-90"></img>
              <div className="absolute text-white text-5xl -translate-y-20 text-center">
                Interested In Becoming A Tutor? <br/> Join Us Today!
              </div>
              <a href="\add-tutor" className="absolute translate-y-10" target="_blank">
                <div className=" text-white text-2xl bg-[#103C42] p-5 rounded-lg scale-75 hover:scale-[0.8] hover:brightness-[0.95] transition duration-150 ease-in-out">
                  Apply Now
                </div>
              </a>
          </div>
  
          <div className="bg-gray-100 py-16 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img src="/about/img1.png" className="w-96"></img>
              <h1 className="text-[#103C42] text-lg font-bold pt-6">
                Flexible Schedule, Be Your Own Boss
              </h1>
            </div>
            <div className="w-1/3 text-[#103C42] font-bold ml-80 pl-20">
            As university students, we understand that time is not the most expendable resource for you. Regular part-time jobs often have conflicting schedules with your studies.
            <br/><br/>
            At SkillSync Tutors, you can schedule your own lesson times and tutor in between, before, or after your lectures.
            </div>
          </div>
  
          <div className="py-16 flex items-center justify-center">
          <div className="w-1/3 text-[#103C42] font-bold ">
                We understand that working a 5-hour shift at a part-time job isn’t really a 5-hour shift. The time it takes to dress up and commute can easily take upwards of an hour. Plus the fatigue that comes from commuting to work adds up.
                    <br/><br/>
                At SkillSync Tutors, a 2-hour shift is really a 2-hour shift. When you work with us, you can work while enjoying the comfort of your home.
            </div>
            <div className="flex flex-col items-center justify-center ml-80 pl-20">
              <img src="/about/img2.png" className="w-96"></img>
              <h1 className="text-[#103C42] text-lg font-bold pt-6">
                Work From the Comfort of Your Home
              </h1>
            </div>
          </div>
  
          <div className="bg-gray-100 py-16 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img src="/about/img3.png" className="w-96"></img>
              <h1 className="text-[#103C42] text-lg font-bold pt-6">
                Earn What Your Skills Are Worth
              </h1>
            </div>
            <div className="w-1/3 text-[#103C42] font-bold ml-80 pl-20">
                Ever been frustrated with the pay you get from regular part-time jobs that are available to undergrad students?
                <br/><br/>
                We value and respect the skills you bring to us. Earn up to $60/hour when you tutor subjects that are high in demand.
            </div>
          </div>
      </div>
    );
  }