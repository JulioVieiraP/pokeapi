import pokeLogo from '../../Assets/images/Pokeball.png'
import LupaIcone from '../../Assets/images/search.png'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Container className="container">
        <S.Logo src={pokeLogo} alt="Pokeball Logo" />
        <S.Title>Pokédex</S.Title>
      </S.Container>
      <S.Container className="container">
        <S.Form>
          <S.Label htmlFor="searchInput">
            <S.SearchIcon src={LupaIcone} alt="Search Icon" />
          </S.Label>
          <S.Input id="searchInput" type="text" placeholder="Search..." />
        </S.Form>

        <S.Filter>#</S.Filter>
      </S.Container>
    </S.Header>
  )
}

export default Header
