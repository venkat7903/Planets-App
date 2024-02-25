// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-details-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-title">{name}</h1>
      <p className="planet-desc">{description}</p>
    </div>
  )
}

export default PlanetItem
