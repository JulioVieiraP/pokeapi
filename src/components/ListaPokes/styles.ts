import { styled } from 'styled-components'
import { Grayscale } from '../../styles/Cores'

export const Main = styled.main`
  padding: 0 4px 4px;
`

export const Content = styled.div`
  width: 352px;
  height: 85vh;
  border-radius: 8px;
  background-color: ${Grayscale.White};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 108px;
  grid-auto-flow: row;
  gap: 8px;
  padding: 24px 12px 0 12px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`
