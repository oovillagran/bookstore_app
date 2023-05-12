import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand href="/" className="brand">Bookstore CMS</Navbar.Brand>
          <Link className="nav-item" to="/">BOOKS</Link>
          <Link className="nav-item" to="/categories">CATEGORIES</Link>
        </Container>
      </Navbar>
    </>
  );
}
