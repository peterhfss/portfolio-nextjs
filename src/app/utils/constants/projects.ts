
interface Project{
  id: number,
  title: string,
  image_preview: string,
  description: string,
  url_github: string,
  url_deploy: string,
  translate: string,
}

const projects : Project[] = [
  {
    id:0,
    title: 'Pokedex',
    image_preview:'/images/previews/pokedex_preview.jpg',
    description: 'A website developed that integrates the REStful Pokémon API, for realizes search by name or number and returns data about the specific pokémon.',
    url_deploy:'https://peterhfss.github.io/pokedex/',
    url_github: 'https://github.com/peterhfss/pokedex',
    translate: 'Site desenvolvido que integra a API RESTful Pokémon, para realizar buscas por nome ou número e retornar dados sobre o pokémon específico.',
  },
  {
    id:1,
    title: 'To Do List',
    image_preview:'/images/previews/todo-list_preview.jpg',
    description: 'Application developed with React to organize tasks.',
    url_deploy:'https://peterhfss.github.io/ignite-reactjs-challenge01-todo-list/',
    url_github: 'https://github.com/peterhfss/ignite-reactjs-challenge01-todo-list',
    translate: 'Aplicação desenvolvida com React para organizar tarefas.',
  },
  
]

export default projects;

