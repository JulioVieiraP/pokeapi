// styles.ts
import styled from 'styled-components'
import { DropShadow } from '../../styles/Shadows'
import { Body3, Caption } from '../../styles/Typography'
import { Grayscale } from '../../styles/Cores'

export const Card = styled.div`
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
  background-color: white;
  padding: 2px 4px;
  font-size: ${Caption.fontSize};
  font-weight: ${Caption.fontWeight};
  line-height: ${Caption.lineHeight};
`

export const Title = styled.p`
  background-color: ${Grayscale.White};
  width: 88px;
  height: 26px;
  margin-bottom: 4px;
  font-size: ${Body3.fontSize};
  font-weight: ${Body3.fontWeight};
  line-height: ${Body3.lineHeight};
`
