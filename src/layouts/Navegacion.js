import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function Navegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as = {NavLink} to = {"/"}>Productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {NavLink} to ={"/registrarse"}>Registrarse</Nav.Link>
            <Nav.Link as = {NavLink} to ={"/iniciarsesion"}>Iniciar Sesión</Nav.Link>
            <Nav.Link as = {NavLink} to ={"/crearproducto"}>Crear Producto</Nav.Link>
            <NavDropdown title="UserName" id="basic-nav-dropdown">
              <NavDropdown.Item as = {NavLink} to ={"/misproductos"}>Mis Productos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion}