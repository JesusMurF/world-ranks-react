import { useEffect, useState } from "react";
import { Country, Query } from "../components/interfaces";

const cache: { [key: string]: Country[] } = {};

const generateIds = <T extends Country>(data: T[]): (T & { id: number })[] => {
  return data.map((item, index) => ({ ...item, id: new Date().getTime() + index }));
};

const useFetchCountries = ({limit = 250, query}: Query) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const key = `${limit}-${query}`;

        if (cache[key]) {
          setCountries(cache[key]);
          setLoading(false);
          return;
        }

        const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,subregion,independent,unMember`);
        const data = await response.json();

        let filteredData: Country[] = data;
    
        if (query) {
          const byCountry = data.filter((country: Country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
          const byRegion = data.filter((country: Country) => country.region.toLowerCase().includes(query.toLowerCase()));
          const bySubregion = data.filter((country: Country) => {
            if (country.subregion) {
              return country.subregion.toLowerCase().includes(query.toLowerCase());
            }
            return false;
          });
          filteredData = [...byCountry, ...byRegion, ...bySubregion];
        }

        filteredData = generateIds(filteredData).slice(0, limit);

        console.log(filteredData);

        cache[key] = filteredData;
        
        setCountries(filteredData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, [limit, query]);

  return { data: countries, loading, error };
}

export default useFetchCountries;