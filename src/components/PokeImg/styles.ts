import styled from 'styled-components'
import { Props } from '.'
import { Grayscale } from '../../styles/Cores'

export const Icon = styled.img<Props>`
  background-color: ${Grayscale.White};
  width: ${(props) => (props.width === 'grande' ? '200px' : '72px')};
  height: auto;
  object-fit: cover;
`
