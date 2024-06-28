// styles.ts
import styled from 'styled-components'
import { DropShadow } from '../../styles/Shadows'
import { Body3, Caption } from '../../styles/Typography'
import { Grayscale } from '../../styles/Cores'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${Grayscale.White};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 104px;
  width: 100%;
  max-height: 108px;
  height: 100%;
  border-radius: 16px;
  box-shadow: ${DropShadow.dp2};
  position: relative;
  padding: 16px;
  box-sizing: border-box;
`

export const Number = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px 4px;
  color: ${Grayscale.Medium};
  background-color: ${Grayscale.White};
  font-size: ${Caption.fontSize};
  font-weight: ${Caption.fontWeight};
  line-height: ${Caption.lineHeight};
`

export const Title = styled.p`
  width: 88px;
  height: 26px;
  margin-bottom: 4px;
  color: ${Grayscale.Dark};
  background-color: ${Grayscale.White};
  font-size: ${Body3.fontSize};
  font-weight: ${Body3.fontWeight};
  line-height: ${Body3.lineHeight};
`
