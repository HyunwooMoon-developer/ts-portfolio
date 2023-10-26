import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navMenu } from '../store';

const Header = () => (
  <Navbar
    expand="lg"
    bg="dark"
    data-bs-theme="dark"
    fixed="top"
    className="mb-4 p-2"
    collapseOnSelect
  >
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand href="/" /* as={Link} to="/" */>MHW</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" variant="underline">
          {navMenu.map((menu) => (
            <Nav.Item key={menu.label}>
              <Nav.Link href={menu.to} /* as={Link} to={menu.to} */>
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
