import { GitHubLogoIcon , ExternalLinkIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

interface ProjectProps{
  id: number,
  title: string,
  image: string,
  description: string,
  url_github: string,
  url_deploy: string
}

const Project = (props : ProjectProps) => {
  if(props.id % 2 == 0){
    return(
      <div className="flex bg-tertiary-500 w-[960px] h-[396px] rounded-b-xl rounded-t-xl">
        <div className="w-3/5 relative">
          <Image 
            src={props.image} 
            alt={props.title} fill={true}
            className="w-full" />
        </div>
        <div className="w-2/5 flex flex-col gap-20 justify-center items-center p-14">
          <h3 className="font-sans text-primary-100">{props.title}</h3>
          <p className="w-80 text-center text-sm font-sans text-primary-100">{props.description}</p>
          <div className="flex w-44 h-10 justify-center gap-20">
            <Link href={props.url_github}>
              <GitHubLogoIcon className="w-6 h-6 text-gray-900"/>
            </Link>
            <Link href={props.url_deploy}>
              <ExternalLinkIcon className="w-6 h-6 text-gray-900"/>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  return(
    <div className="flex bg-tertiary-500 w-[960px] h-[396px] rounded-b-xl rounded-t-xl">
      <div className="w-2/5 flex flex-col gap-20 justify-center items-center p-14">
        <h3 className="font-sans text-primary-100">{props.title}</h3>
        <p className="w-80 text-center text-sm font-sans text-primary-100">{props.description}</p>
        <div className="flex w-44 h-10 justify-center gap-20">
          <Link href={props.url_github}>
            <GitHubLogoIcon className="w-6 h-6 text-gray-900"/>
          </Link>
          <Link href={props.url_deploy}>
            <ExternalLinkIcon className="w-6 h-6 text-gray-900"/>
          </Link>
        </div>
      </div>
      <div className="w-3/5 relative object-contain">
        <Image 
          src={props.image} 
          alt={props.title} fill={true}
          className="w-full" />
      </div>
    </div>
  )
  
}

export default Project