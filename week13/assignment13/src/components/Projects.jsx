import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="container">
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

export default Projects;