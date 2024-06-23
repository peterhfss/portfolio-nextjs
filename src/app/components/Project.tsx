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
 
    return(
      <div className="bg-tertiary-800 w-[290px] h-96 rounded-lg flex flex-col md:flex-row lg:w-[880px] md:w-[580px]">
        <div className={` ${props.id % 2 == 0 ? 'order-2' : ''} bg-tertiary-900`}>
          <Image 
            src={props.image} 
            alt={props.title}
            width={600}
            height={300}
            className="h-full"
          />
        </div>
        <div className="flex p-6 flex-col h-full gap-5 justify-center items-center lg:w-96 md:w-[290px]">
          <h3 className="font-sans text-primary-200">{props.title}</h3>
          <p className="text-center  font-sans text-primary-200 text-xs">{props.description}</p>
          <div className="flex gap-4 justify-center">
            <Link href={props.url_github} target="_blank">
              <GitHubLogoIcon className="w-6 h-6 text-tertiary-500 hover:text-tertiary-600"/>
            </Link>
            <Link href={props.url_deploy} target="_blank">
              <ExternalLinkIcon className="w-6 h-6 text-tertiary-500 hover:text-tertiary-600"/>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Project