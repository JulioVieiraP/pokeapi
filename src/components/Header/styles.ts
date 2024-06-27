import styled from 'styled-components'
import { Colors, Grayscale } from '../../styles/Cores'
import { DropShadow, InnerShadow } from '../../styles/Shadows'

export const Header = styled.header`
  height: 128px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
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
`
