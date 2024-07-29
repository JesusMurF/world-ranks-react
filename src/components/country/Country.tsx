import './Country.scss';

export const Country = () => {
  return (
    <div className="country">
      <div className='country__detail'>
        <div className='header'>
          <img className='header__flag' src='https://flagcdn.com/w320/in.png' alt='' />
          <div className='names'>
            <h1 className='names__title'>India</h1>
            <h2 className='names__subtitle'>Republic of India</h2>
          </div>
        </div>
        <div className='dimensions'>
            <div className='dimensions__label'>
              <span>Population</span>
              <span>1,394,975,829</span>
            </div>
            <div className='dimensions__label'>
              <span>Area</span>
              <span>3,287,263 km<sup>2</sup></span>
            </div>
        </div>
        <div className='data'>
          <table className='data__table'>
            <tbody>
              <tr className='data__row'>
                <td>Capital</td>
                <td>New Delhi</td>
              </tr>
              <tr className='data__row'>
                <td>Subregion</td>
                <td>Southern Asia</td>
              </tr>
              <tr className='data__row'>
                <td>Language</td>
                <td>English, Hindi, Tamil</td>
              </tr>
              <tr className='data__row'>
                <td>Continents</td>
                <td>Asia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
