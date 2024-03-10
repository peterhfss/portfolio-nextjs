
interface SkillProps{
  title: string,
  description: string
}

const SkillCard = (props: SkillProps) => {
  return(
    <div className="flex flex-col w-[420px] h-auto bg-tertiary-900 rounded-lg p-4 gap-2 shadow-2xl relative">
      <h2 className="text-secundary text-base font-medium">{props.title}</h2>
      <p className="text-xs text-primary-400">{props.description}</p>
    </div>
  )
}

export default SkillCard