import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosPerson } from 'react-icons/io';

export default function Navigation() {
  return (
    <div className="header">
      <div className="nav-bar flex">
        <div className="nav-container">
          <Navbar.Brand href="/" className="brand ff-m" id="brand">Bookstore CMS</Navbar.Brand>
          <Link className="nav-item ff-m" to="/">books</Link>
          <Link className="nav-item ff-m" to="/categories">categories</Link>
        </div>
        <div className="icon flex">
          <IoIosPerson className="person" />
        </div>
      </div>
    </div>
  );
}
