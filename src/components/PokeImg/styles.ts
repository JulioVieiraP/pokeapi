import styled from 'styled-components'
import { Props } from '.'

export const Icon = styled.img<Props>`
  width: ${(props) => (props.width === 'grande' ? '200px' : '72px')};
  height: auto;
  object-fit: cover;
`
