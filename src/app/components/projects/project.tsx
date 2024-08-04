import { GitHubLogoIcon , ExternalLinkIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

interface ProjectProps{
  id: number,
  title: string,
  image: string,
  description: string,
  url_github: string,
  url_deploy: string,
  tags: string[]
}

export const Project = ({image, title, tags, url_github, url_deploy, description } : ProjectProps) => {
 
    return(
      <div className="bg-tertiary-800 lg:w-[500px] w-[340px] items-center h-full rounded-lg flex flex-col shadow-[0_80px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="bg-tertiary-900">
          <Image 
            src={image} 
            alt={title}
            width={600}
            height={300}
            className="h-full md:w-full"
          />
        </div>
        <div className="flex p-6 flex-col w-full h-40 ">
          <h3 className="font-sans text-left text-primary-200 w-full">{title}</h3>
          <p className="text-left font-sans text-primary-200 text-xs h-20">{description}</p>
          <div className="flex gap-6 justify-end w-full">
            <div className="flex gap-2 text-tertiary-500 w-full items-start flex-wrap">
              {tags.map((tag,index)=>
                <span key={index} className="hover:text-secundary-300 hover:cursor-pointer">{tag}</span>
             ) }
            </div>
            <Link href={url_github} target="_blank">
              <GitHubLogoIcon className="w-6 h-6 text-tertiary-500 hover:text-tertiary-600"/>
            </Link>
            <Link href={url_deploy} target="_blank">
              <ExternalLinkIcon className="w-6 h-6 text-tertiary-500 hover:text-tertiary-600"/>
            </Link>
          </div>
        </div>
      </div>
    )
}
