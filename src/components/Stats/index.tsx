import React from 'react'
import { getColorByType } from '../../utils/TypeColors'
import * as S from './styles'

interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface StatsProps {
  stats: Stat[]
  primaryType: string
}

const Stats = ({ stats, primaryType }: StatsProps) => {
  const color = getColorByType(primaryType)

  const statLabels: { [key: string]: string } = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD'
  }

  return (
    <S.StatsContainer>
      <S.Title color={color}>Base Stats</S.Title>
      {stats.map((stat) => (
        <S.Stat key={stat.stat.name} color={color}>
          <div>
            <span>{statLabels[stat.stat.name]}</span>
          </div>
          <div>
            <span>{stat.base_stat.toString().padStart(3, '0')}</span>
          </div>
          <div className="bar">
            <div
              className="fill"
              style={{ width: `${(stat.base_stat / 255) * 100}%` }}
            ></div>
          </div>
        </S.Stat>
      ))}
    </S.StatsContainer>
  )
}

export default Stats
