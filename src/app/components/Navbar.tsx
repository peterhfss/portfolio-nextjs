import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/Logo.svg';
import links from "../utils/constants/navigation";

const Navbar = () =>{

  return(
    <nav className="flex items-center h-24 p-8 justify-between fixed w-full">
      <Link href={'/'}>
       <Image 
       src={Logo}
       alt="Logo do portfolio"/>
      </Link>
      <div className="flex gap-8 text-base text-white">
      {links.map((link) => <Link key={link.id} href={link.url} className="content-link inline-block p-5 relative">{link.name}</Link>)}
      </div>
    </nav>
  )
}

export default Navbar;