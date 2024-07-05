import styled from 'styled-components'
import { Headline, SubTitle2 } from '../../styles/Typography'
import { Grayscale } from '../../styles/Cores'

interface PageProps {
  bgColor: string
}

export const Page = styled.div<PageProps>`
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 74px;

  img {
    color: ${Grayscale.White};
    width: 32px;
    height: auto;
    cursor: pointer;
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
  }

  span {
    color: ${Grayscale.White};
    font-weight: ${SubTitle2.fontWeight};
    font-size: ${SubTitle2.fontSize};
    line-height: ${SubTitle2.lineHeight};
  }
`

export const Title = styled.h1`
  color: ${Grayscale.White};
  margin-left: 8px;
  font-size: ${Headline.fontSize};
  font-weight: ${Headline.fontWeight};
  line-height: ${Headline.lineHeight};
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  span {
    cursor: pointer;
    img {
      color: ${Grayscale.White};
    }
  }
`

export const Body = styled.div`
  margin-top: -40px;
  background-color: white;
`
