import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Country } from './components/country/Country'
import { Hero } from './components/hero/Hero'
import { RankingPanel } from './components/ranking-panel/RankingPanel'

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
  return (
    <>
      <Hero />
      <div className='container'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
