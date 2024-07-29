// import fetch from 'node-fetch';
import { Country, Query } from "../components/interfaces";

class CountriesService {
  api = 'https://restcountries.com/v3.1';
  static instance: CountriesService;

  constructor() {
    if (CountriesService.instance) {
      return CountriesService.instance;
    }
    CountriesService.instance = this;
  }
  /**
   * Generates ids for the data.
   * @param data 
   * @returns
   */
  public _generateIds<T>(data: T[]): (T & { id: number })[] {
    return data.map((item, index) => ({ ...item, id: index }));
  }

  /**
   * Fetches the countries data.
   * @param limit - The limit of countries to fetch.
   * @param query - The query to filter the countries.
   * @returns The countries data.
   */
  public async getCountries({limit = 10, query = ''}: Query): Promise<(Country & { id: number })[]> {
    const response = await fetch(`${this.api}/all?fields=name,flags,population,area,region,subregion,independent,unMember`);
    const data: Country[] = await response.json() as Country[];

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
    return this._generateIds(filteredData).slice(0, limit);
  }
}

export default CountriesService;