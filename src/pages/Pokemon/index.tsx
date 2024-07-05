import { useParams } from 'react-router-dom'
import { useGetPokemonByIdQuery } from '../../services/api'

import * as S from './styles'

import { getColorByType } from '../../utils/TypeColors'
import { formatId, getPokemonImageUrl } from '../../utils/pokemonUtils'
import PokeImg from '../../components/PokeImg'

import home from '../../Assets/images/HomeButton.png'
import BackIcon from '../../Assets/images/back.png'
import advancer from '../../Assets/images/advance.png'

const Pokemon: React.FC = () => {
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
        <ul>
          <li>
            <strong>Tipo Principal:</strong> {primaryType}
          </li>
          {secondaryType && (
            <li>
              <strong>Tipo Secundário:</strong> {secondaryType}
            </li>
          )}
        </ul>
      </S.Body>
    </S.Page>
  )
}

export default Pokemon
