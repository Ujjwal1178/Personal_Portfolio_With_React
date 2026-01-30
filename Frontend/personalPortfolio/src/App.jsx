import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        
        {/* Temporary placeholders - will be replaced with actual sections */}
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
