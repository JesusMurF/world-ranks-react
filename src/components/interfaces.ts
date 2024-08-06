/**
 * Represents the state of the application.
 */
export interface Query {
  limit?: number;
  query?: string;
}

/**
 * Represents the state of tags.
 */
export interface CountryTagsState {
  [key: string]: boolean;
}

/**
 * Represents the state of options.
 */
export interface CountryOptionsState {
  value: string;
  label: string;
}

/**
 * Represents the status state of a country.
 */
export interface CountryStatusState {
  id: string;
  label: string;
  active: boolean;
}


/**
 * Represents the state of a country.
 */
export interface Country {
  id: number;
  flags: Flags;
  name: Name;
  region: string;
  subregion: string;
  area: number;
  population: number;
  independent: boolean;
  unMember: boolean;
  capital: string[];
  languages: Record<string, string>;
  borders: string[];
  cca3: string;
}

/**
 * Represents the flags state of a country.
 */
export interface Flags {
  png?: string;
  svg?: string;
  alt?: string;
}

/**
 * Represents the name state of a country.
 */
export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

/**
 * Represents the native name state of a country.
 */
export interface NativeName {
  official: string;
  common: string;
}

/**
 * Represents the initial state of a country.
 * @type {Country}
 * */
export const initialCountryState: Country = {
  id: 0,
  flags: {
    png: '',
    alt: ''
  },
  name: {
    common: '',
    official: '',
    nativeName: {
      "eng": {
        official: '',
        common: ''
      }
    }
  },
  region: '',
  subregion: '',
  area: 0,
  population: 0,
  independent: true,
  unMember: false,
  capital: [''],
  languages: {},
  borders: [],
  cca3: ''
};