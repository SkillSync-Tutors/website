export default async function Footer() {
    return (
    <div>
        <div className="flex bg-[#103C42] *:text-white">
            <div className="p-16 pl-32">
                <a href="/" className="flex flex-row">
                    <img src="/footer/logo.webp" alt="SkillSync Logo" className="w-24 h-24"></img>
                    <h1 className="text-5xl pt-6 pl-6">SkillSync Tutors</h1>
                </a>
            </div>
            <div className="flex flex-col space-y-6 pt-20 p-10 pl-40">
                <h1>Explore</h1>
                <div className="*:underline flex flex-col space-y-3">
                    <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" href="/about">About Us</a>
                    <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" href="/contact">Contact</a>
                    <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" href="/shop">Shop</a>
                    <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" href="/subjects">Subjects</a>
                    <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" href="/services">Services</a>
                </div>
            </div>
            <div className="flex flex-col space-y-6 pt-20 p-10 pl-20">
                <h1>Follow Us</h1>
                <div className="flex flex-col space-y-3">
                        
                    <a className="underline hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline flex">
                        <img className="w-5 h-5 mr-3" src="/footer/fb.png"></img>
                        Facebook
                    </a>
                        
                    <a className="underline hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline flex">
                        <img className="w-5 h-5 mr-3" src="/footer/ig.png"></img>
                        Instagram
                    </a>
                        
                    <a className="underline hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline flex">
                        <img className="w-5 h-5 mr-3" src="/footer/linkedin.png"></img>
                        Linked-In
                    </a>

                    <a className="underline hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline flex">
                        <img className="w-5 h-5 mr-3" src="/footer/tt.png"></img>
                        TikTok
                    </a>
                </div>
            </div>
            <div className="pl-20 *:text-center">
                <div className="bg-[#005F65] m-10 flex flex-col items-center justify-center rounded-lg border-white border-4 shadow-lg">
                    <h1 className="pt-12 px-10 pb-5">Stay Updated with Our Latest Events!</h1>
                    <p className="pb-14">Subscribe to Our Newsletter for <br/>Exclusive News and Invitations.</p>
                    <div className="relative group pb-2 *:text-black">
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="YourEmail@example.com" />
                        </label>
                        <button className="absolute text-black right-4 top-[13px] invisible group-focus-within:visible"><img src="/footer/rarrow.png" className="w-5 h-5"></img></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#005F65] border-white border-t-2">
            <p className="text-white p-12">
                © 2024 <a href="/" className="hover:underline transition duration-150 ease-in-out">SkillSync Tutors Inc.</a> All rights reserved. <br/><br/> 

                The SkillSync Tutors logo and name are trademarks of SkillSync Tutors Inc. 
                Unauthorized use and/or duplication of this material without express and written 
                permission from SkillSync Tutors Inc. is strictly prohibited. <br/> All other trademarks, 
                logos, and copyrights are the property of their respective owners.
            </p>
        </div>
    </div>
    );
}