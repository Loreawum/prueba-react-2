import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import ContextPizzas from "../context/ContextPizza";
import ContextCarrito from '../context/ContextCarrito';
import { Container, OverlayTrigger, Tooltip, Image, Button } from 'react-bootstrap';


const DetallePizza = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pizzas } = useContext(ContextPizzas);
  const { carrito, setCarrito } = useContext(ContextCarrito);
  const [cantidad, setCantidad] = useState(1);

  const pizza = pizzas.find(pizza => pizza.id === id) || {};
  if(!pizza.id) return <div>Pizza no encontrada</div>

  const agregarAlCarrito = () => {
    setCarrito([...carrito, { ...pizza, quantity: cantidad }])
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <OverlayTrigger
        key='right'
        placement='right'
        overlay={
          <Tooltip id='tooltip-right'>
            <ul className="list-unstyled">
              {pizza.ingredients.map((ingredient, i) => (
                <li key={i}>🍕 {ingredient}</li>
              ))}
            </ul>
            <strong>Precio: {`$${pizza.price}`}</strong>
          </Tooltip>
        }
      >
        <Image src={pizza.img} alt='imagen de referencia pizza' rounded fluid className="mb-3"/>
      </OverlayTrigger>
      <div className="text-center">
        <h3> {pizza.name.toUpperCase()}</h3>
        <p> {pizza.desc}</p>
      </div>
      <div className="d-flex align-items-center">
        <label className="mr-3">Cantidad:</label>
        <input type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} className="form-control"/>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <Button className='mx-2' variant="outline-primary" onClick={() => navigate('/home')}> Volver </Button>
        <Button className='mx-2' variant="danger" onClick={agregarAlCarrito}>🛒Añadir</Button>
      </div>
    </Container>
  )
};

export default DetallePizza;
