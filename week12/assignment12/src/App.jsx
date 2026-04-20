import './css/App.css';
import projects from './data/projects';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="container">
      <h1>Maribeth Romslo</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default App;