import './App.scss'
import { Hero } from './components/hero/Hero'
import { RankingPanel } from './components/ranking-panel/RankingPanel'

function App() {
  return (
    <>
      <Hero />
      <div className='container'>
        <RankingPanel />
      </div>
    </>
  )
}

export default App
