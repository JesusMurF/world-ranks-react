import { Country } from '../src/components/interfaces';

export const countries: Country[] = [
  {
    id: 1,
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: {
          official: 'United States of America',
          common: 'United States'
        }
      }
    },
    flags: {
      png: 'https://restcountries.com/data/usa.png'
    },
    population: 323947000,
    area: 9826675,
    region: 'Americas',
    subregion: 'Northern America',
    independent: true,
    unMember: true
  },
  {
    id: 2,
    name: {
      common: 'Canada',
      official: 'Canada',
      nativeName: {
        eng: {
          official: 'Canada',
          common: 'Canada'
        }
      }
    },
    flags: {
      png: 'https://restcountries.com/data/can.png'
    },
    population: 36155487,
    area: 9984670,
    region: 'Americas',
    subregion: 'Northern America',
    independent: true,
    unMember: true
  },
  {
    id: 3,
    name: {
      common: 'Mexico',
      official: 'United Mexican States',
      nativeName: {
        eng: {
          official: 'United Mexican States',
          common: 'Mexico'
        }
      }
    },
    flags: {
      png: 'https://restcountries.com/data/mex.png'
    },
    population: 122273473,
    area: 1964375,
    region: 'Americas',
    subregion: 'Central America',
    independent: true,
    unMember: true
  },
  {
    id: 4,
    name: {
      common: 'Brazil',
      official: 'Federative Republic of Brazil',
      nativeName: {
        eng: {
          official: 'Federative Republic of Brazil',
          common: 'Brazil'
        }
      }
    },
    flags: {
      png: 'https://restcountries.com/data/bra.png'
    },
    population: 206135893,
    area: 8515767,
    region: 'Americas',
    subregion: 'South America',
    independent: true,
    unMember: true
  },
  {
    id: 5,
    name: {
      common: 'Argentina',
      official: 'Argentine Republic',
      nativeName: {
        eng: {
          official: 'Argentine Republic',
          common: 'Argentina'
        }
      }
    },
    flags: {
      png: 'https://restcountries.com/data/arg.png'
    },
    population: 43590400,
    area: 2780400,
    region: 'Americas',
    subregion: 'South America',
    independent: true,
    unMember: true
  }
];