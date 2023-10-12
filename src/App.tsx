import { useGetPokemons } from './core/services/getPokemons'

export const App = () => {
  const { data } = useGetPokemons()

  console.log(data)

  return <h1>App</h1>
}
