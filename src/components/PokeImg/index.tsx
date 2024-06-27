import * as S from './styles'

export type Props = {
  width: 'grande' | 'pequeno'
  src: string
}

const PokeImg = ({ width, src }: Props) => {
  return <S.Icon src={src} alt="PokeImg" width={width} />
}

export default PokeImg
