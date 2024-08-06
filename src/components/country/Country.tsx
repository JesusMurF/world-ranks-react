import { useParams } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Country as ICountry } from '../interfaces';
import { CountriesContext } from '../../contexts/countriesContext';
import { generateUniqueKey, insertCommas } from '../../utils/utils';

import './Country.scss';

export const Country = () => {
  const [country, setCountry] = useState<ICountry>();
  const { name } = useParams();
  const { countries } = useContext(CountriesContext);
  const [ neighboursState, setNeighbours] = useState<ICountry[] | undefined>([]);

  const neighbours = useMemo(() => {
    return country?.borders?.map((border) => {
      return countries.find((country) => country.cca3 === border);
    }).filter((neighbour) => neighbour !== undefined);
  }, [countries, country?.borders]);

  useEffect(() => {
    async function fetchData() {
      const country = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const countryData = await country.json();
      const countryInfo: ICountry = countryData[0];
      setCountry(countryInfo);
    }
    fetchData();
  }, [name, countries]);

  useEffect(() => {
    if (country) {
      setNeighbours(neighbours);
    }
  }, [country, countries, neighbours]);

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
              <span>{country && insertCommas(country.population)}</span>
            </div>
            <div className='dimensions__label'>
              <span>Area</span>
              <span>{country && insertCommas(country.area)} km<sup>2</sup></span>
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
            {neighboursState && neighboursState.map((neighbour) => (
              <li key={generateUniqueKey(neighbour.name.common)} className='neighbours__list-item'>
                <img className='neighbours__flag' src={neighbour.flags.png} alt={neighbour.flags.alt} />
                <span className='neighbours__name'>{neighbour.name.common}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
