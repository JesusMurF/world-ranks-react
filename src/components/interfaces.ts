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