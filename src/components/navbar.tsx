import Link from "next/link"
export default function Navbar(){
    return(
        <header className=" bg-[#FFFFFF] h-[85px] drop-shadow-[0_0px_5px_rgba(117,195,16,0.5)]">
            <div className=" flex justify-between items-center text-2xl font-medium">
                <div className="flex gap-2 mx-20 my-6">
                    <h1 className="text-green-400">S</h1>
                    <span className="text-black">Portfolio</span>
                </div>
                <nav>
                    <ul className="flex justify-between items-center gap-[46px] mx-20 my-6">
                        <li className="text-black"><Link href={"/"}>Home</Link></li>
                        <li className="text-green-400"><Link href={"/contact-us"}>Contact us</Link></li>
                        <div className="relative group">
          <li> <Link href={"/about-us"} className="text-green-400 hover:text-green-600">About us &#9662;</Link></li>
          <ul className=" absolute hidden  bg-white shadow-lg group-hover:block min-w-max">
            <li><Link href={"/about-us/our-goal"}  className="block rounded-lg px-4 py-2 text-black hover:bg-green-500">Our Goal</Link></li>
            <li><Link href={"/about-us/our-mission"} className="block rounded-lg px-4 py-2 text-black hover:bg-green-600">Our Mission</Link></li>
        </ul>
                   </div> 
        
                    </ul>
                </nav>
            </div>
        </header>
       
        
        
        
        
    )
}