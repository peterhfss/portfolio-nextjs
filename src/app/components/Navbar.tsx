import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/Logo.svg';
import links from "../utils/constants/navigation";

const Navbar = () =>{

  const [activeLink, setActiveLink] = useState('#');

  return(
    <nav className="flex items-center h-24 p-8 justify-between fixed w-full">
      <Link href={'/'}>
       <Image 
       src={Logo}
       alt="Logo do portfolio"/>
      </Link>
      <div className="flex gap-9 text-base text-white">
      {links.map((link) => <Link key={link.id} href={link.url} onClick={()=>{setActiveLink(link.url)}} 
      className={activeLink === link.url ? 'after:content-[">"] before:content-["<"] p-5 relative text-secundary flex gap-2':'hover:text-secundary menu-link p-5 relative'}>
        {link.name}
      </Link>)}
      </div>
    </nav>
  )
}

export default Navbar;