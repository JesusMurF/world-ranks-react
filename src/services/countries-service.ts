// import fetch from 'node-fetch';
import { Country, GenericObject, Query } from "../components/interfaces";

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
  private _generateIds(data: GenericObject[]): GenericObject[] {
    return data.map((data, index) => ({...data, id: index}));
  }

  /**
   * Fetches the countries data.
   * @param limit - The limit of countries to fetch.
   * @param query - The query to filter the countries.
   * @returns The countries data.
   */
  public async getCountries({limit = 10, query = ''}: Query): Promise<Country[]> {
    const response = await fetch(`${this.api}/all?fields=name,flags,population,area,region,subregion,independent,unMember`);
    const data: Country[] = await response.json() as Country[];
    
    if (query) {
      const byCountry = data.filter((country: Country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
      const byRegion = data.filter((country: Country) => country.region.toLowerCase().includes(query.toLowerCase()));
      const bySubregion = data.filter((country: Country) => {
        if (country.subregion) {
          return country.subregion.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });
      const result = [...byCountry, ...byRegion, ...bySubregion];
      return this._generateIds(result).slice(0, limit) as Country[];
    }
    return this._generateIds(data).slice(0, limit) as Country[];
  }
}

export default CountriesService;