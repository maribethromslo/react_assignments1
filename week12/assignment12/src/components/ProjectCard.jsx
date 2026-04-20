function ProjectCard({ name, description, url, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>View Project</a>
    </div>
  );
}

export default ProjectCard;