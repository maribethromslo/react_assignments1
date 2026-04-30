function About() {
  return (
    <main className="about-page">
      <h1>About Me</h1>
      <div className="about-card">
        <img
          src="/react_assignments1/week14/assignment14/img/MaribethRomslo.jpg"
          alt="Maribeth Romslo"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            alignSelf: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
          }}
        />
        <p>
          Hi, I'm Maribeth Romslo, a designer with a love for
          building clean, interactive web experiences. I'm currently studying
          React and growing my skills in component-based design and modern
          JavaScript.
        </p>
        <p>
          I enjoy turning ideas into functional, polished experiences.
        </p>
      </div>
    </main>
  );
}

export default About;