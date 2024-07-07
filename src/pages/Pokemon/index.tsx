import { useEffect, useState } from 'react'
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
import Stats from '../../components/Stats'

const Pokemon = () => {
  const [currentPokemonId, setCurrentPokemonId] = useState(1)
  const [bgColor, setBgColor] = useState('')

  const { data: pokemon } = useGetPokemonByIdQuery(currentPokemonId.toString())
  const { data: speciesData } = useGetPokemonSpeciesByIdQuery(
    currentPokemonId.toString()
  )

  const description = speciesData?.flavor_text_entries[0]?.flavor_text
    .replace(/[\f]/g, ' ')
    .toLowerCase()

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

  const goToNextPokemon = () => {
    setCurrentPokemonId((prevId) => prevId + 1)
  }

  const goToPreviousPokemon = () => {
    if (currentPokemonId > 1) {
      setCurrentPokemonId((prevId) => prevId - 1)
    }
  }

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
          <span>{formatId(currentPokemonId)}</span>
        </S.Header>

        <S.Navigation>
          <button
            className={currentPokemonId <= 1 ? 'hidden' : ''}
            onClick={goToPreviousPokemon}
          >
            <img src={BackIcon} alt="Voltar para o pokemon anterior" />
          </button>
          <PokeImg src={getPokemonImageUrl(currentPokemonId)} width="grande" />
          <button onClick={goToNextPokemon}>
            <img src={advancer} alt="Avançar para o próximo pokemon" />
          </button>
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
            description={description}
            color={bgColor}
          />
          <Stats stats={pokemon.stats} primaryType={primaryType} />
        </section>
      </S.Body>
    </S.Page>
  )
}

export default Pokemon
