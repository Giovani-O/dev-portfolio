import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import './app.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;