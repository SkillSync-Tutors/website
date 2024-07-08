export default async function Footer() {
    return (
    <>
    <div className="flex bg-cyan-950 *:text-white">
        <div className="p-16 pl-32">
            <h1 className="text-5xl">SkillSync Tutors</h1>
        </div>
        <div className="flex flex-col space-y-6 pt-20 p-10 pl-56">
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
            <div className="*:underline flex flex-col space-y-3">
                <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" >Email</a>
                <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" >Facebook</a>
                <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" >Instagram</a>
                <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" >Linked-In</a>
                <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" >TikTok</a>
                <a className="hover:text-gray-500 transition duration-150 ease-in-out hover:no-underline" >X</a>
            </div>
        </div>
        <div className="pl-20">
            <div className="bg-cyan-800 pl-10 pt-28 pb-44 pr-36 m-10 flex">
                <input placeholder="Email Address" className="p-3 rounded-lg text-black"></input>
            </div>
        </div>
    </div>
    </>
    );
}