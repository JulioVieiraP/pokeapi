// src/components/Header/Header.tsx
import pokeLogo from '../../Assets/images/Pokeball.png'
import LupaIcone from '../../Assets/images/search.png'
import * as S from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../redux/Features/searchSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.trim().toLowerCase()
    setSearchInput(searchTerm)
    dispatch(setSearchTerm(searchTerm))
  }

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
          <S.Input
            id="searchInput"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleInputChange}
          />
        </S.Form>

        <S.Filter>#</S.Filter>
      </S.Container>
    </S.Header>
  )
}

export default Header
