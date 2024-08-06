import { useEffect, useState } from 'react';
import { Country } from '../components/interfaces';

export const useCountryFilter = (query: string, allCountries: Country[]): Country[] => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    const filtered = allCountries.filter((country: Country) => {
      const { name, region, subregion } = country;
      const lowerCaseName = name.common.toLowerCase();
      const lowerCaseRegion = region.toLowerCase();
      const lowerCaseSubregion = subregion ? subregion.toLowerCase() : "";

      return (
        lowerCaseName.includes(query) ||
        lowerCaseRegion.includes(query) ||
        lowerCaseSubregion.includes(query)
      );
    });

    setFilteredCountries(filtered);
  }, [query, allCountries]);

  return filteredCountries;
};