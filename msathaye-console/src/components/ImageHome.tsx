import '../css/ImageHome.css'
import smokingbigfoot from '../assets/smoking-bigfoot.png'

const HomeImage = () => {
  return (
    <div className='image-container'>
      <img
        src={smokingbigfoot}
        loading='lazy'
        className='image-lazy'
        width='800'
        height='450'
        onLoad={(e) => e.currentTarget.classList.add('loaded')}
        alt='smoking bigfoot'
      />
    </div>
  )
}

export default HomeImage
