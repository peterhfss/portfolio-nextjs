import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../../public/images/Logo.svg';
import { links } from "../../utils/constants/navigation";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Locale } from "@/config/i18n.config";
import { MenuLanguage } from "../menu-language";

interface INavProps{
  lang: Locale;
}

export const Navbar = ({lang}:INavProps) =>{

  const [nav,setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  
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
            {lang === 'en-US' ? link.name : link.translate}
          </Link>)
          }
      </div>

      <div className="hidden md:block">
        <MenuLanguage lang={lang} />
      </div>

      {/* Mobile Button */}
      <button onClick={handleNav} className="w-[66px] h-[36px] flex items-center justify-center md:hidden">
        {
          nav ? (
            <Cross1Icon className="text-tertiary-900 w-8 h-8 z-50"/>
          ): (
            <HamburgerMenuIcon className="text-tertiary-700 w-8 h-8 z-50" />
          ) 
        }
      </button>
     {/* Mobile Menu */}   
     <div 
     className={
      nav
        ? "sm:hidden absolute top-0 z-40 right-0 left-0 bottom-0 flex flex-col gap-5 justify-center items-center w-full h-screen bg-primary-800 text-left ease-in duration-300"
        : "sm:hidden absolute top-0 z-40 right-0 left-[-100%] bottom-0 flex flex-col gap-5 justify-center items-center w-full h-screen bg-primary-800 text-left ease-in duration-300"
     }
     >
        {links.map((link) => 
          <Link key={link.id} href={link.url} onClick={()=>{setActiveLink(link.url); setNav(false)}} 
            className={activeLink === link.url ? 'text-secundary':'text-tertiary-500 z-50'}>
            {link.name}
          </Link>)
          }
        <div className="absolute top-3/4">
          <MenuLanguage lang={lang} />
        </div>
      </div>
    </nav>
  )
}
