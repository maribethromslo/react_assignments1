import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

function Home() {
  return (
    <main className="projects-page">
      <h1>Maribeth Romslo</h1>
      <Projects limit={2} />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/projects" className="see-more-btn">See More</Link>
      </div>
    </main>
  );
}

export default Home;