import styled from 'styled-components'
import { SubTitle3 } from '../../styles/Typography'

export const Tag = styled.span<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: white;
  max-width: 46px;
  width: 100%;
  height: 20px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: ${SubTitle3.fontWeight};
  font-size: ${SubTitle3.fontSize};
  line-height: ${SubTitle3.lineHeight};
`
