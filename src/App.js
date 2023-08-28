import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
