import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Employee Management</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Employee List</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add">Add Employee</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/get">Get Employee By ID</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
