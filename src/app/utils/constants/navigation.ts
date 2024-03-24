interface Link{
  id: number,
  name: string,
  url: string
}

const links : Link[] = [
  {
    id: 0, 
    name:'About', 
    url: '#about'
  },
  {
    id: 1, 
    name:'Projects', 
    url: '#projects'
  },
  {
    id: 2, 
    name:'Skills', 
    url: '#skills'
  },
  {
    id: 3, 
    name:'Contact', 
    url: '#contact'
  }
]

export default links;
