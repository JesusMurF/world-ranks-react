import './Hero.scss'
import Logo from '../../assets/Logo.svg'

export const Hero = () => {
  return (
    <div className='hero hero__image'>
      <div className='hero__logo'>
        <img src={Logo} alt="World Ranks" />
      </div>
    </div>
  )
}
