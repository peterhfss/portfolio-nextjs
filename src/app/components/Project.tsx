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
      <div className="bg-tertiary-800 w-[290px] h-[430px] rounded-lg flex flex-col">
        <div className="h-2/4 w-full relative ">
          <Image 
            src={props.image} 
            alt={props.title} fill={true}
            className="w-full rounded-t-lg" />
        </div>
        <div className="flex p-6 flex-col gap-5 justify-center items-center">
          <h3 className="font-sans text-primary-200">{props.title}</h3>
          <p className="text-center  font-sans text-primary-200 text-xs">{props.description}</p>
          <div className="flex gap-4 justify-center">
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
    <div className="bg-tertiary-800 w-[290px] h-[410px] rounded-lg flex flex-col">
      <div className="flex p-6 flex-col gap-5 justify-center items-center">
        <h3 className="font-sans text-primary-200">{props.title}</h3>
        <p className="text-center  font-sans text-primary-200 text-xs">{props.description}</p>
        <div className="flex gap-4 justify-center">
          <Link href={props.url_github}>
            <GitHubLogoIcon className="w-6 h-6 text-gray-900"/>
          </Link>
          <Link href={props.url_deploy}>
            <ExternalLinkIcon className="w-6 h-6 text-gray-900"/>
          </Link>
        </div>
      </div>
      <div className="h-2/4 w-full relative ">
        <Image 
          src={props.image} 
          alt={props.title} fill={true}
          className="w-full rounded-b-lg" />
      </div>
    </div>
  )
  
}

export default Project