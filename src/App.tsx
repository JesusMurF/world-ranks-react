import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Country } from './components/country/Country'
import { Hero } from './components/hero/Hero'
import { RankingPanel } from './components/ranking-panel/RankingPanel'
import { Country as ICountry } from './components/interfaces'
import { CountriesContext } from './contexts/countriesContext'

import './App.scss'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RankingPanel />
  },
  {
    path: '/country/:name',
    element: <Country />
  }
])

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,borders,flags,population,area,region,subregion,independent,unMember');
      const data = await response.json();
      setLoading(false);
      setCountries(data);
    }
    fetchCountries();
  }, []);

  return (
    <>
      <CountriesContext.Provider value={{countries: countries, loading: loading}}>
      <Hero />
      <div className='container'>
        <RouterProvider router={router}></RouterProvider>
      </div>
      </CountriesContext.Provider>
    </>
  )
}

export default App
