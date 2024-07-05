import styled from 'styled-components'
import { Body3, Caption, Headline, SubTitle2 } from '../../styles/Typography'
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
  align-items: center;
  text-align: center;

  span {
    cursor: pointer;
    img {
      color: ${Grayscale.White};
    }
  }
`

export const Body = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-top: -40px;
  border-radius: 8px;
  background-color: ${Grayscale.White};

  h2 {
    margin: 16px 0;
    display: flex;
    justify-content: center;
  }

  ul {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`

export const About = styled.div`
  max-width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .icon-text {
      display: flex;
      flex-direction: row;
      gap: 8px;
      margin-bottom: 12px;
    }

    span {
      font-size: ${Body3.fontSize};
      line-height: ${Body3.lineHeight};
      font-weight: ${Body3.fontWeight};
    }

    p {
      font-size: ${Caption.fontSize};
      line-height: ${Caption.lineHeight};
      font-weight: ${Caption.fontWeight};
      color: ${Grayscale.Medium};
    }
  }

  .divider {
    width: 1px;
    height: 48px;
    background-color: ${Grayscale.Light};
    margin: 0 16px;
  }
`
