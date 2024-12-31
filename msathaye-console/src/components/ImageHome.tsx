import '../css/ImageHome.css'
import smokingbigfoot from '../assets/smoking-bigfoot.png'

const HomeImage = () => {
  return (
    <div className='image-home'>
      <img src={smokingbigfoot} alt='image-4' className='home-image smokingbigfoot' />
    </div>
  )
}

export default HomeImage
