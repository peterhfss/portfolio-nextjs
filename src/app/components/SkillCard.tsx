
interface SkillProps{
  title: string,
  description: string
}

const SkillCard = (props: SkillProps) => {
  return(
    <div className="flex flex-col w-[220px] h-[260px] bg-tertiary-900 p-6 rounded-lg gap-2 items-center justify-center lg:w-[413px] lg:h-[103px]">
      <h2 className="text-secundary text-base font-medium text-center lg:text-left w-full">{props.title}</h2>
      <p className="text-xs text-primary-400 text-center lg:text-left w-full">{props.description}</p>
    </div>
  )
}

export default SkillCard