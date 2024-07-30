import { Country } from '../../interfaces';
import './Table.scss'

type TableProps = {
  countries: Country[]
}

export const Table = (props: TableProps): React.ReactElement  => {
  const { countries } = props;

  /**
   * Inserts commas into a number.
   * @param value - The number to insert commas into.
   * @returns The number with commas.
   */
  const insertCommas = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

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
        {countries.length ? (countries || []).map((country: Country) => (
          <tr key={country.id} className='countries-table__row'>
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
