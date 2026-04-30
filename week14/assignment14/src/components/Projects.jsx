import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects({ limit }) {
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-list">
      {displayed.map((project) => (
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