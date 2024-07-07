import styled from 'styled-components'
import { Colors, Grayscale } from '../../styles/Cores'
import { DropShadow, InnerShadow } from '../../styles/Shadows'

export const Header = styled.header`
  height: 128px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`

export const Title = styled.h1`
  color: ${Grayscale.White};
  font-size: 24px;
  font-weight: bold;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 280px;
  height: 32px;
  border-radius: 16px;
  background-color: ${Grayscale.White};
  box-shadow: ${InnerShadow.dp2};
  transition: box-shadow 0.3s ease;

  padding: 0 8px;

  &:focus-within {
    box-shadow: ${DropShadow.dp2};
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: text;
  background-color: ${Grayscale.White};
`

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 16px;
  background-color: ${Grayscale.White};
`

export const Input = styled.input`
  border: none;
  outline: none;
  width: 85%;
  border-radius: 16px;
  background-color: ${Grayscale.White};
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${Grayscale.White};
  color: ${Colors.primary};
  margin-left: 16px;
  box-shadow: ${InnerShadow.dp2};
  cursor: pointer;
  position: relative;
`

export const Dropdow = styled.div`
  position: absolute;
  width: 105px;
  height: 80px;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${Grayscale.White};
  border: 1px solid ${Grayscale.Dark};
  border-radius: 8px;
  box-shadow: ${InnerShadow.dp2};
  z-index: 1;
`

export const DropdowItem = styled.li`
  list-style-type: none;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${Grayscale.Dark};
  }
`

export const DropdowList = styled.ul`
  padding: 0;
  margin: 0;
`
