
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
    image_preview:'/images/preview.png',
    description: 'A website developed that integrates the REStful Pokémon API, for realizes search by name or number and returns data about the specific pokémon.',
    url_deploy:'url1',
    url_github: 'url2'
  },
  {
    id:1,
    title: 'Pokedex',
    image_preview:'/images/preview.png',
    description: 'A website developed that integrates the REStful Pokémon API, for realizes search by name or number and returns data about the specific pokémon.',
    url_deploy:'url1',
    url_github: 'url2'
  },
  {
    id:2,
    title: 'Pokedex',
    image_preview:'/images/preview.png',
    description: 'A website developed that integrates the REStful Pokémon API, for realizes search by name or number and returns data about the specific pokémon.',
    url_deploy:'url1',
    url_github: 'url2'
  },
]

export default projects;

