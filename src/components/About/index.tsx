import * as S from './styles'
import WeightIcon from '../../Assets/images/Weight.png'
import HeightIcon from '../../Assets/images/Height.png'
import { formatNumber } from '../../utils/pokemonUtils'

type Props = {
  weight: number
  height: number
  moveOne: string
  moveTwo: string
}

const About = ({ height, weight, moveOne, moveTwo }: Props) => {
  return (
    <>
      <h2>About</h2>
      <S.About>
        <div>
          <div className="icon-text">
            <img src={WeightIcon} alt="Weight icon" />
            <span>{formatNumber(weight)} kg</span>
          </div>
          <p>Weight</p>
        </div>
        <div className="divider"></div>
        <div>
          <div className="icon-text">
            <img src={HeightIcon} alt="Height icon" />
            <span>{formatNumber(height)} m</span>
          </div>
          <p>Height</p>
        </div>
        <div className="divider"></div>
        <div>
          <span>{moveOne}</span>
          <span>{moveTwo}</span>
          <p>Moves</p>
        </div>
      </S.About>
    </>
  )
}

export default About