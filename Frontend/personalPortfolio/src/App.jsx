import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Temporary sections for testing scroll */}
      <section id="home" style={{ height: '100vh', paddingTop: '70px' }}>
        <h1>Home Section</h1>
      </section>
      <section id="about" style={{ height: '100vh' }}>
        <h1>About Section</h1>
      </section>
      <section id="skills" style={{ height: '100vh' }}>
        <h1>Skills Section</h1>
      </section>
      <section id="projects" style={{ height: '100vh' }}>
        <h1>Projects Section</h1>
      </section>
      <section id="experience" style={{ height: '100vh' }}>
        <h1>Experience Section</h1>
      </section>
      <section id="contact" style={{ height: '100vh' }}>
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}

export default App;
