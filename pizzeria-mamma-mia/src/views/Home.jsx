import { useNavigate } from "react-router";
//contexts
import { useContext } from 'react';
import ContextCarrito from "../context/ContextCarrito";
import ContextPizzas from "../context/ContextPizza";
//react bootstrap
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//componente
import PizzaCard from "../components/PizzaCard";

export default function Home() {
  const { pizzas } = useContext(ContextPizzas);
  const { setCarrito } = useContext(ContextCarrito);
  const navigate = useNavigate();

  const agregarAlCarrito = (id, price) => {
    setCarrito((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        currItems[itemIndex].quantity++;
        return [...currItems];
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };


  return (
    <div>
      <Container className="galeria grid-columns-3">
        <Row>
          {pizzas.map((pizza) => (
            <Col xs={4} key={pizza.id}>
              <PizzaCard
                pizza={pizza}
                agregarAlCarrito={agregarAlCarrito}
                navigate={navigate}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}