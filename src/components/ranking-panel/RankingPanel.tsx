import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import { Table } from './table/Table'
import { useCallback, useEffect, useState } from 'react'
import CountriesService from '../../services/countries-service'
import { Country, CountryStatusState } from '../interfaces'

import './RankingPanel.scss'


export const RankingPanel = (): React.ReactElement => {
  const [ allCountries, setAllCountries ] = useState<Country[]>([]);
  const [ countries, setCountries ] = useState<Country[]>([]);
  const [ query, setQuery ] = useState('');

  useEffect(() => {
    const instance = new CountriesService();
    instance.getCountries({limit: 400, query}).then(data => {
      const countriesData = data as Country[];
      setAllCountries(countriesData);
      setCountries(countriesData);
    });
  }, [query]);

  /**
   * Handles the query to filter the countries.
   * @param query - The query to filter the countries.
   */
  const handleQuery = (query: string) => {
    setQuery(query);
  }

  /**
   * Sorts the countries based on the specified key.
   * If the key is 'name', it sorts the countries alphabetically by name.
   * Otherwise, it sorts the countries based on the specified key in ascending order.
   *
   * @param key - The key to sort the countries by.
   */
  const handleSortBy = (key: string) => {
    let sorted: Country[] = [];
    if (key !== 'name') {
      sorted = countries.sort((a: Country, b: Country) => {
        if (a[key as keyof Country] < b[key as keyof Country]) {
          return -1;
        }
        if (a[key as keyof Country] > b[key as keyof Country]) {
          return 1;
        }
        return 0;
      });
    } else {
      sorted = countries.sort((a: Country, b: Country) => {
        return a.name.common.localeCompare(b.name.common);
      });
    }

    setCountries([...sorted]);
  }

  /**
   * Filters the countries by the specified tags.
   * @param tags - The tags to filter the countries by.
   */
  const handleFilterByTags = useCallback((tags: string[]) => {
    if (!tags.length) {
      setCountries([...allCountries]);
      return;
    }
    const filtered = allCountries.filter(country => tags.includes(country.region));
    setCountries([...filtered]);
  }, [allCountries]);

  /**
   * Filters the countries by the specified status.
   * @param status - The status to filter the countries by.
   */
  const handleFilterByStatus = useCallback((status: CountryStatusState[]) => {
    if (!status.some(s => s.active)) {
      setCountries([...allCountries]);
      return;
    }
    const filtered = allCountries.filter((country: Country) => {
      return status.every(s => country[s.id as keyof Country] === s.active);
    });
    setCountries([...filtered]);
  }, [allCountries]);

  return (
    <section className="ranking-panel">
      <header className='ranking-panel__header'>
        <Header handleQuery={handleQuery} countries={countries} />
      </header>
      <nav className='ranking-panel__sidebar'>
        <Sidebar handleSortBy={handleSortBy} handleFilterByTags={handleFilterByTags} handleFilterByStatus={handleFilterByStatus} />
      </nav>
      <div className='ranking-panel__table'>
        <Table countries={countries} />
      </div>
    </section>
  )
}
