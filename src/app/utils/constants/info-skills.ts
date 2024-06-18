import { IconProps } from "@radix-ui/react-icons/dist/types";
import {UpdateIcon , ChatBubbleIcon, LayersIcon}from "@radix-ui/react-icons";
import { ForwardRefExoticComponent, RefAttributes } from "react";
interface Skill{
  id: number,
  title: string,
  title_translate: string,
  description: string,
  description_translate: string,
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

const skills : Skill[] = [
  {
    id:0,
    title: 'Design',
    title_translate: 'Design',
    description: 'Built digital products with creativity and responsive design',
    description_translate: 'Desenvolver produtos digitais com criatividade e design responsivo',
    icon:LayersIcon,
  },
  {
    id:1,
    title: 'Communication',
    title_translate: 'Comunicação',
    description: 'Clearly and effectively converse with others, set expectations, and collaborate on projects',
    description_translate: 'Comunicação de forma clara e eficaz com outras pessoas, estabelecendo expectativas e colaboração em projetos',
    icon:ChatBubbleIcon,
  },
  {
    id:2,
    title: 'Continuous Learning',
    title_translate: 'Aprendizado Contínuo',
    description: 'Expanding my ability to learn by regularly upgrading my skills and increasing my knowledge',
    description_translate: 'Expandir minha capacidade de aprender, atualizando regularmente minhas habilidades e aumentando meu conhecimento',
    icon:UpdateIcon,
  },
  
]

export default skills;

