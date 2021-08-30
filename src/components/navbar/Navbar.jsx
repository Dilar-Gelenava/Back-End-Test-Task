import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/'}>
            Main
          </Link>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/about'}>
            About
          </Link>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <a className="nav-link" href="https://github.com/">
            Github
          </a>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <a className="nav-link" href="http://noxtton.com/">
            Noxtton
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
