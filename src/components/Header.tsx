import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navMenu } from '../store';

const Header = () => (
  <Navbar
    expand="md"
    bg="dark"
    data-bs-theme="dark"
    fixed="top"
    className="mb-4 p-2"
  >
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand as={Link} to="/">
        MHW
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" defaultActiveKey="#home" variant="underline">
          {navMenu.map((menu) => (
            <Nav.Item key={menu.label}>
              <Nav.Link as={Link} to={menu.to}>
                {menu.icon} {menu.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
