import '../ImageCollage.css'
// import image1 from '../assets/1.jpg'
// import image2 from '../assets/2.jpg'
// import image3 from '../assets/3.jpg'
import image4 from '../assets/4.png'

const ImageCollage = () => {
  return (
    <div className="image-collage">
      {/* <img 
        src={image1} 
        alt="collage-1" 
        className="collage-image image-1"
      />
      <img 
        src={image2} 
        alt="collage-2" 
        className="collage-image image-2"
      />
      <img 
        src={image3} 
        alt="collage-3" 
        className="collage-image image-3"
      /> */}
      <img 
        src={image4} 
        alt="collage-4" 
        className="collage-image image-4"
      />
    </div>
  )
}

export default ImageCollage