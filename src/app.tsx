import './app.css'
import { Career } from './components/career'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'
import { Skills } from './components/skills'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Career />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
