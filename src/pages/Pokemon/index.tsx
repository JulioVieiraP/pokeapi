import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  useGetPokemonByIdQuery,
  useGetPokemonSpeciesByIdQuery
} from '../../services/api'

import * as S from './styles'
import { getColorByType } from '../../utils/TypeColors'
import { formatId, getPokemonImageUrl } from '../../utils/pokemonUtils'
import PokeImg from '../../components/PokeImg'

import home from '../../Assets/images/HomeButton.png'
import BackIcon from '../../Assets/images/back.png'
import advancer from '../../Assets/images/advance.png'
import PokeType from '../../components/PokeType'
import About from '../../components/About'

const Pokemon = () => {
  const { id } = useParams<{ id: string }>()
  const { data: pokemon } = useGetPokemonByIdQuery(id || '')
  const { data: speciesData } = useGetPokemonSpeciesByIdQuery(id || '')
  const description = speciesData?.flavor_text_entries[0]?.flavor_text
    .replace(/[\f]/g, ' ')
    .toLowerCase()

  const [bgColor, setBgColor] = useState('')

  useEffect(() => {
    if (pokemon) {
      const primaryType = pokemon.types[0]?.type.name
      const color = getColorByType(primaryType)
      setBgColor(color)
      document.body.style.backgroundColor = color

      // Limpa a cor de fundo ao desmontar o componente
      return () => {
        document.body.style.backgroundColor = ''
      }
    }
  }, [pokemon])

  if (!pokemon) return null

  const primaryType = pokemon.types[0]?.type.name
  const secondaryType = pokemon.types[1]?.type.name

  const moveOne = pokemon.moves[0]?.move.name
  const moveTwo = pokemon.moves[1]?.move.name

  return (
    <S.Page bgColor={bgColor}>
      <div className="container">
        <S.Header>
          <img src={home} alt="Home" />

          <div>
            <S.Title>{pokemon.name}</S.Title>
          </div>

          <span>{formatId(pokemon.id)}</span>
        </S.Header>

        <S.Navigation>
          <span>
            <img src={BackIcon} alt="Voltar para o pokemon anterior" />
          </span>
          <PokeImg src={getPokemonImageUrl(pokemon.id)} width="grande" />
          <span>
            <img src={advancer} alt="avançar para o pokemon anterior" />
          </span>
        </S.Navigation>
      </div>

      <S.Body>
        <section className="container">
          <ul>
            <li>
              <PokeType>{primaryType}</PokeType>
            </li>
            {secondaryType && (
              <li>
                <PokeType>{secondaryType}</PokeType>
              </li>
            )}
          </ul>
          <About
            height={pokemon.height}
            weight={pokemon.weight}
            moveOne={moveOne}
            moveTwo={moveTwo}
          />
          <S.description>
            <p>{description}</p>
          </S.description>
        </section>
      </S.Body>
    </S.Page>
  )
}

export default Pokemon
