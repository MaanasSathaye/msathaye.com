import '../css/ImageHome.css'
import image4 from '../assets/4.png'

const HomeImage = () => {
    return (
      <div className="image-home">

        <img 
          src={image4} 
          alt="image-4" 
          className="home-image image-4"
        />
      </div>
    )
  }

export default HomeImage