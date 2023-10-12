import { useQuery } from 'react-query'

const URL_API_DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto'

export const getPokemons = async () => {
  const response = await fetch(URL_API_DITTO)
  const data = await response.json()
  return data
}

export const useGetPokemons = () => {
  const response = useQuery('getPokemons', getPokemons)
  return response
}
