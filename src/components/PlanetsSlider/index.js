// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {arrows: true}

  return (
    <div className="planets-container" data-testid="planets">
      <h1 className="planets-title">PLANETS</h1>
      <div className="sub-planets-container">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetDetails={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
