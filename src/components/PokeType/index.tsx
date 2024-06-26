import * as S from './styles'

type Props = {
  children: string
}

const PokeType = ({ children }: Props) => {
  const bgColor = S.typeColors[children.toLowerCase()]

  return <S.Tag bgColor={bgColor}>{children}</S.Tag>
}

export default PokeType
