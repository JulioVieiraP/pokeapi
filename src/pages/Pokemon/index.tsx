import { useParams } from 'react-router-dom'
import { useGetPokemonByIdQuery } from '../../services/api'

import * as S from './styles'

import { getColorByType } from '../../utils/TypeColors'
import { formatId, getPokemonImageUrl } from '../../utils/pokemonUtils'
import PokeImg from '../../components/PokeImg'

import home from '../../Assets/images/HomeButton.png'
import BackIcon from '../../Assets/images/back.png'
import advancer from '../../Assets/images/advance.png'
import PokeType from '../../components/PokeType'
import WeightIcon from '../../Assets/images/Weight.png'
import HeightIcon from '../../Assets/images/Height.png'

const Pokemon = () => {
  const { id } = useParams<{ id: string }>()
  const { data: pokemon } = useGetPokemonByIdQuery(id || '')

  if (!pokemon) return null

  const primaryType = pokemon.types[0]?.type.name
  const secondaryType = pokemon.types[1]?.type.name
  const bgColor = getColorByType(primaryType)

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
          <div>
            <h2>About</h2>
            <S.About>
              <div>
                <div className="icon-text">
                  <img src={WeightIcon} alt="Weight icon" />
                  <span>6,9 kg</span>
                </div>
                <p>Weight</p>
              </div>
              <div className="divider"></div>
              <div>
                <div className="icon-text">
                  <img src={HeightIcon} alt="Height icon" />
                  <span>0,7 m</span>
                </div>
                <p>Height</p>
              </div>
              <div className="divider"></div>
              <div>
                <span>Chlorophyll</span>
                <span>Overgrow</span>
                <p>Moves</p>
              </div>
            </S.About>
          </div>
        </section>
      </S.Body>
    </S.Page>
  )
}

export default Pokemon
