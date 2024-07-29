import './Country.scss';

export const Country = () => {
  return (
    <div className="country">
      <div className='country__detail'>
        <div className='country-header'>
          <img className='country-header__flag' src='https://flagcdn.com/w320/in.png' alt='' />
          <h1 className='country-header__title'>India</h1>
          <h2 className='country-header__subtitle'>Republic of India</h2>
        </div>
      </div>
    </div>
  )
}
