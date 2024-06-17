const list = ['1', '2', '3', '4', '5', '6', '1', '2', '3',]

export default async function About() {
  return (
    <div className="h-auto w-auto text-lg bg-[#011E32]">
      
      About Page
      <div className="w-auto h-auto flex justify-center items-center mx-40 my-40 space-x-60">
        <div className="w-1/4 border-d9d9d9 border-2 h-auto bg-[#d9d9d9] rounded-md">
          <p className="px-4 py-3">
            mission statement
          </p>
        </div>

        <div className="flex justify-center">
          <img src="/emptyrectangle.png"  alt="Rectangle" className="rounded-md w-200"></img>
        </div>
      </div>


      <div className="text-white flex justify-center items-center my-10 mx-20 p-10">
        Our Team
      </div>
      
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-flow-row row-span-4 ml-60 mr-60">
        
        {list.map((item)=>(
          <div className="flex justify-center items-center flex-col m-5">
          <div className="w-36 h-36 rounded-full border-2 bg-[#d9d9d9]">
            <p className="text-center">
              circle
            </p>
          </div>
          <div className="flex justify-center items-center w-40 h-6 border-2 mt-3 bg-[#d9d9d9]"> 
            <p className="text-center">
              {item}
            </p>
          </div>
        </div>
        ))}
        


      </div>

    </div>
  );
}
