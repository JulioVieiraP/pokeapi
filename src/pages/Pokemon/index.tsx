import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const { id } = useParams()
  return <h1>pokemon {id}</h1>
}

export default Pokemon
