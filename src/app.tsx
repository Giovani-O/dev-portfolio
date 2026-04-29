import './app.css'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Career } from './components/career'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Career />
    </div>
  )
}

export default App
