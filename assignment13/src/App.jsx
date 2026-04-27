import { useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('projects');

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'about' && <About />}
    </div>
  );
}

export default App;