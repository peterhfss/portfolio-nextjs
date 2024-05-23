
interface Project{
  id: number,
  title: string,
  image_preview: string,
  description: string,
  url_github: string,
  url_deploy: string
}

const projects : Project[] = [
  {
    id:0,
    title: 'Pokedex',
    image_preview:'/images/previews/pokedex_preview.png',
    description: 'A website developed that integrates the REStful Pokémon API, for realizes search by name or number and returns data about the specific pokémon.',
    url_deploy:'https://peterhfss.github.io/pokedex/',
    url_github: 'https://github.com/peterhfss/pokedex'
  },
  {
    id:1,
    title: 'To Do List',
    image_preview:'/images/previews/todo-list_preview.jpg',
    description: 'Final project of the first React training module by Rockeseat.',
    url_deploy:'https://peterhfss.github.io/ignite-reactjs-challenge01-todo-list/',
    url_github: 'https://github.com/peterhfss/ignite-reactjs-challenge01-todo-list'
  },
  
]

export default projects;

