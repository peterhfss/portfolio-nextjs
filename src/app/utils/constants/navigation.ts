interface Link{
  id: number,
  name: string,
  url: string
}

const links : Link[] = [
  {
    id: 0, 
    name:'About', 
    url: '/About'
  },
  {
    id: 1, 
    name:'Projects', 
    url: '/Projects'
  },
  {
    id: 2, 
    name:'Skills', 
    url: '/Skills'
  },
  {
    id: 3, 
    name:'Contact', 
    url: '/Contact'
  }
]

export default links;
