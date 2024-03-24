import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const SidebarSocialLinks = () =>{
  return (
    <div className="flex flex-col fixed bottom-0 left-10 items-center h-56 w-28 px-4">
      <div className="flex flex-col gap-6">
          <Link href={'https://github.com/peterhfss'} target="_blank">
            <GitHubLogoIcon className="w-8 h-8 text-tertiary-500 hover:text-secundary"/>
          </Link>
          <Link href={'https://www.linkedin.com/in/pedrohenriquefrancelino/'} target="_blank">
            <LinkedInLogoIcon className="w-8 h-8 text-tertiary-500 hover:text-secundary"/>
          </Link>
      </div>
      <span className="border-1 bg-secundary h-px w-60 rotate-90 absolute bottom-0"></span>
    </div>
  )
}

export default SidebarSocialLinks
