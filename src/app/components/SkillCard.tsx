import { IconProps } from "@radix-ui/react-icons/dist/types"

interface SkillProps{
  title: string,
  description: string,
  icon:IconProps
}

const SkillCard = (props: SkillProps) => {
  return(
    <div className="flex flex-col w-[220px] h-[260px] bg-tertiary-900 p-6 rounded-[4px] gap-4 items-center justify-center lg:w-[413px] lg:h-[130px]">
      <div className="flex justify-between w-full flex-col items-center gap-4 lg:flex-row">
      <h2 className="text-secundary text-base font-medium text-center lg:text-left w-full order-1 lg:order-none">{props.title}</h2>
        <>
          {props.icon}
        </>
      </div>
      <p className="text-xs text-primary-400 text-center lg:text-left w-full">{props.description}</p>
    </div>
  )
}

export default SkillCard