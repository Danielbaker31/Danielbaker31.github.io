import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import ProjectDisplay from './Pages/ProjectDisplay';
import Skills from './Pages/Skills';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

/* App.js
 * Through React, React Router, and JSX, this file contains the HTML code how app looks no matter the current page route
 * Format is:
 * 1.) Top Navigation Bar/header
 * 2.) current page (ie: home, experience, etc)
 * 3.) Bottom Footer
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
