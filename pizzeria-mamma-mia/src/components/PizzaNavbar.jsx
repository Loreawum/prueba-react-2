import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomLink from "../components/CustomLink"

export default function PizzaNavbar() {

  return (
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand className="fs-3 text-warning">Mamma Mia!</Navbar.Brand>
          <div className="d-flex justify-content-end">
            <Nav className="me-auto">
              <CustomLink to="/home" text="Home"/>
              <CustomLink to="/carrito" text="Carrito"/>
            </Nav>
          </div>
        </Container>
      </Navbar>
  );
}