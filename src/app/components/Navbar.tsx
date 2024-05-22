import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/Logo.svg';
import links from "../utils/constants/navigation";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

const Navbar = () =>{

  const [nav,setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('#');

  const handleNav = () =>{
    setNav(!nav);
  }

  return(
    <nav className="flex items-center w-full justify-around fixed">
      <Link href={'#hero'} onClick={()=>{setActiveLink('/')}}>
       <Image 
       src={Logo}
       alt="Logo do portfolio"
       className="lg:w-[150px] h-[100px]"/>
      </Link>
      
      <div className="text-tertiary-400 text-base hidden md:flex md:items-centers gap-4">
        {links.map((link) => 
          <Link key={link.id} href={link.url} onClick={()=>{setActiveLink(link.url)}} 
            className={activeLink === link.url ? 'after:content-[">"] before:content-["<"] relative text-secundary flex gap-1':'hover:text-secundary menu-link relative'}>
            {link.name}
          </Link>)
          }
      </div>

      <div>
          <h2 className="md:text-tertiary-600 md:block hidden">ENG</h2>
      </div>

      {/* Mobile Button */}
      <button onClick={handleNav} className="w-[66px] h-[36px] flex items-center justify-center md:hidden">
        {
          nav ? (
            <Cross1Icon className="text-tertiary-900 w-8 h-8 z-10"/>
          ): (
            <HamburgerMenuIcon className="text-tertiary-700 w-8 h-8 z-10" />
          ) 
        }
      </button>
     {/* Mobile Menu */}   
     <div 
     className={
      nav
        ? "sm:hidden absolute top-0 right-0  left-0 bottom-0 flex flex-col gap-5 justify-center items-center w-full h-screen bg-primary-800 text-left ease-in duration-300"
        : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex flex-col gap-5 justify-center items-center w-full h-screen bg-primary-800 text-left ease-in duration-300"
     }
     >
        {links.map((link) => 
          <Link key={link.id} href={link.url} onClick={()=>{setActiveLink(link.url)}} 
            className={activeLink === link.url ? 'text-secundary':'text-tertiary-500'}>
            {link.name}
          </Link>)
          }
      </div>
    </nav>
  )
}

export default Navbar;