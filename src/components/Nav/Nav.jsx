import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        ParQ
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/vehicles">
              Vehicles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
