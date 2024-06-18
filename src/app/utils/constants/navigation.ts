import Link from "next/link";

interface Link{
  id: number,
  name: string,
  url: string,
  translate: string,
}

const links : Link[] = [
  {
    id: 0, 
    name:'About', 
    url: '#about',
    translate: 'Sobre Mim',
  },
  {
    id: 1, 
    name:'Projects', 
    url: '#projects',
    translate: 'Projetos',
  },
  {
    id: 2, 
    name:'Skills', 
    url: '#skills',
    translate: 'Skills',
  },
  {
    id: 3, 
    name:'Contact', 
    url: '#contact',
    translate: 'Contato',
  }
]

export default links;
