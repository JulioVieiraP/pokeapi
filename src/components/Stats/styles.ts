import styled from 'styled-components'

export const StatsContainer = styled.div`
  width: 100%;
  padding: 16px;
`

export const Stat = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > div {
    width: 50px;
  }

  span:first-child {
    color: ${({ color }) => color};
    font-weight: bold;
  }

  span:last-child {
    width: 35px;
    text-align: right;
    color: ${({ color }) => color};
    font-weight: bold;
  }

  .bar {
    flex: 1;
    height: 8px;
    margin-left: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .fill {
    height: 100%;
    background-color: ${({ color }) => color};
  }
`
