import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Temporary placeholders - will be replaced with actual sections */}
        <section id="about" className="section-placeholder">
          <h2>About Section</h2>
        </section>
        <section id="skills" className="section-placeholder">
          <h2>Skills Section</h2>
        </section>
        <section id="projects" className="section-placeholder">
          <h2>Projects Section</h2>
        </section>
        <section id="experience" className="section-placeholder">
          <h2>Experience Section</h2>
        </section>
        <section id="contact" className="section-placeholder">
          <h2>Contact Section</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
