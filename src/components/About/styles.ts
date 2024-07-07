import { styled } from 'styled-components'
import { Body3, Caption } from '../../styles/Typography'
import { Grayscale } from '../../styles/Cores'

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
