import './css/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;