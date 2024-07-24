import { Country } from '../../interfaces';
import './Header.scss'

type HeaderProps = {
  countries: Country[];
  handleQuery: (event: string) => void;
}

export const Header = ({countries, handleQuery}: HeaderProps): React.ReactElement => {

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleQuery(event.target.value);
  }

  return (
    <div className="ranking-header">
      <div className="ranking-header__items-found" data-testid="countriesLength">Found { countries.length } countries</div>
      <div className="ranking-header__search">
      <input className='search-input search-icon' onChange={handleSearch} type="text" placeholder="Search by Name, Region, Subregion" data-testid="searchInput" />
      </div>
    </div>
  )
}
