import { useNavigate } from 'react-router-dom';
import { Country } from '../../interfaces';
import { generateUniqueKey, insertCommas } from '../../../utils/utils';

import './Table.scss'

type TableProps = {
  loading: boolean;
  countries: Country[]
}

export const Table = (props: TableProps): React.ReactElement  => {
  const { countries, loading } = props;
  const navigate = useNavigate();

  return (
    <table className='countries-table'>
      <thead className='countries-table__head'>
        <tr className='countries-table__row'>
          <th className='countries-table__header'>Flag</th>
          <th className='countries-table__header'>Name</th>
          <th className='countries-table__header'>Population</th>
          <th className='countries-table__header'>Area (Km2)</th>
          <th className='countries-table__header'>Region</th>
        </tr>
      </thead>
      <tbody>
        {loading && <tr><td className='countries-table__cell' colSpan={5}>Loading...</td></tr>}
        {countries.length ? countries.map((country: Country) => (
          <tr key={generateUniqueKey(country.name.common)} className='countries-table__row' data-testid='tableRow' onClick={() => navigate(`/country/${country.name.common.toLowerCase()}`, {state: country.name})}>
            <td className='countries-table__cell'><img className='countries-table__img' src={country.flags.png} alt={country.name.common} /></td>
            <td className='countries-table__cell'>{country.name.common}</td>
            <td className='countries-table__cell' data-testid="populationCell">{insertCommas(country.population)}</td>
            <td className='countries-table__cell' data-testid="areaCell">{insertCommas(country.area)}</td>
            <td className='countries-table__cell'>{country.region}</td>
          </tr>
        )) : <tr>
          <td className='countries-table__cell'>No se han encontrado resultados</td>
          </tr>}
      </tbody>
    </table>
  )
}
