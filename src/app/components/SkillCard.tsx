
interface SkillProps{
  title: string,
  description: string
}

const SkillCard = (props: SkillProps) => {
  return(
    <div className="flex flex-col w-[220px] h-[260px] bg-tertiary-900 p-8 rounded-lg gap-2 items-center justify-center">
      <h2 className="text-secundary text-base font-medium text-center">{props.title}</h2>
      <p className="text-xs text-primary-400 text-center">{props.description}</p>
    </div>
  )
}

export default SkillCard