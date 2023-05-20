import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosPerson } from 'react-icons/io';

export default function Navigation() {
  return (
    <div className="header">
      <div className="nav-bar flex">
        <div className="nav-container flex">
          <Navbar href="/" className="brand" id="brand">Bookstore CMS</Navbar>
          <Link className="nav-item" to="/">books</Link>
          <Link className="nav-item category" to="/categories">categories</Link>
        </div>
        <div className="icon flex">
          <IoIosPerson className="person" />
        </div>
      </div>
    </div>
  );
}
