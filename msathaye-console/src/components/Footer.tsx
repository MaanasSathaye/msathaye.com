import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiBluesky } from 'react-icons/si'
import '../css/Footer.css'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='social-links'>
      <a href='https://github.com/MaanasSathaye' target='_blank' rel='noopener noreferrer'>
        <FaGithub className='icon' />
      </a>
      <a href='https://bsky.app/profile/msathaye.com' target='_blank' rel='noopener noreferrer'>
        <SiBluesky className='icon' />
      </a>
      <a href='https://www.instagram.com/maanassathaye' target='_blank' rel='noopener noreferrer'>
        <FaInstagram className='icon' />
      </a>
      <a
        href='https://www.linkedin.com/in/maanassathaye/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin className='icon' />
      </a>
      <a href='https://x.com/MaanasSathaye' target='_blank' rel='noopener noreferrer'>
        <FaXTwitter className='icon' />
      </a>
    </div>
  )
}

export default Footer
