import pokeLogo from '../../Assets/images/Pokeball.png'
import LupaIcone from '../../Assets/images/search.png'
import * as S from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../redux/Features/searchSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

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

        <S.Filter onClick={() => setIsOpen(!isOpen)}>#</S.Filter>
        {isOpen && (
          <S.Dropdow>
            <ul>
              <S.DropdowItem>
                <label>
                  <input type="radio" />
                  <span>Number</span>
                </label>
              </S.DropdowItem>
              <S.DropdowItem>
                <label>
                  <input type="radio" />
                  <span>Name</span>
                </label>
              </S.DropdowItem>
            </ul>
          </S.Dropdow>
        )}
      </S.Container>
    </S.Header>
  )
}

export default Header
