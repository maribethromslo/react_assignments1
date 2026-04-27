function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#" onClick={() => setCurrentPage('projects')}>Home</a></li>
        <li><a href="#" onClick={() => setCurrentPage('projects')}>Projects</a></li>
        <li><a href="#" onClick={() => setCurrentPage('about')}>About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;