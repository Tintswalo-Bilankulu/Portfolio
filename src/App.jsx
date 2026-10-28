import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      <Navbar />
      <main className="app__content">
        <Hero />
        <About />
        <Projects />
        <Research />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
