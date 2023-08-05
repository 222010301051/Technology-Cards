// Write your code here.
import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item
  return (
    <li className={`${className} card-container`}>
      <h1 className="card-header">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem