import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Country as ICountry } from '../interfaces';

import './Country.scss';

export const Country = () => {
  const [country, setCountry] = useState<ICountry>();
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const country = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const countryData = await country.json();
      const countryInfo: ICountry = countryData[0];
      setCountry(countryInfo);
    }
    fetchData();
  }, [name]);

  return (
    <div className="country">
      <div className='country__detail'>
        <div className='header'>
          <img className='header__flag' src={country?.flags.png} alt='' />
          <div className='names'>
            <h1 className='names__title'>{country?.name.common}</h1>
            <h2 className='names__subtitle'>{country?.name.official}</h2>
          </div>
        </div>
        <div className='dimensions'>
            <div className='dimensions__label'>
              <span>Population</span>
              <span>{country?.population}</span>
            </div>
            <div className='dimensions__label'>
              <span>Area</span>
              <span>{country?.area} km<sup>2</sup></span>
            </div>
        </div>
        <div className='data'>
          <table className='data__table'>
            <tbody>
              <tr className='data__row'>
                <td>Capital</td>
                <td>{country?.capital}</td>
              </tr>
              <tr className='data__row'>
                <td>Subregion</td>
                <td>{country?.subregion}</td>
              </tr>
              <tr className='data__row'>
                <td>Language</td>
                <td>{country && Object.values(country.languages).map((lang) => lang).join(', ')}</td>
              </tr>
              <tr className='data__row'>
                <td>Continents</td>
                <td>{country?.region}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='neighbours'>
          <h2>Neighbouring Countries</h2>
          <ul className='neighbours__list'>
            <li className='neighbours__list-item'>
              <img className='neighbours__flag' src='https://flagcdn.com/w40/pk.png' alt='' />
              <span className='neighbours__name'>Pakistan</span>
            </li>
            <li className='neighbours__list-item'>
              <img className='neighbours__flag' src='https://flagcdn.com/w40/bd.png' alt='' />
              <span className='neighbours__name'>Bangladesh</span>
            </li>
            <li className='neighbours__list-item'>
              <img className='neighbours__flag' src='https://flagcdn.com/w40/np.png' alt='' />
              <span className='neighbours__name'>Nepal</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
