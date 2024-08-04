import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const Sidebar = () =>{
  return (
    <div className="flex lg:showIconsColumn">
      <div className="flex lg:flex-col gap-6">
          <Link href={'https://github.com/peterhfss'} target="_blank">
            <GitHubLogoIcon className="w-8 h-8 text-tertiary-500 hover:text-secundary"/>
          </Link>
          <Link href={'https://www.linkedin.com/in/pedrohenriquefrancelino/'} target="_blank">
            <LinkedInLogoIcon className="w-8 h-8 text-tertiary-500 hover:text-secundary"/>
          </Link>
      </div>
      <span 
        className="lg:showLine">
      </span>
    </div>
  )
}

