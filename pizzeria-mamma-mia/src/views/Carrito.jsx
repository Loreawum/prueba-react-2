import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextCarrito from '../context/ContextCarrito';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import"../index.css"

export default function Carrito() {
  const navigate = useNavigate();
  const { carrito, setCarrito } = useContext(ContextCarrito);
  const [pizza, setPizza] = useState(carrito);

  const handleSumar = (index) => {
    const newPizza = [...pizza];
    newPizza[index].quantity++;
    setPizza(newPizza);
  };

  const handleRestar = (index) => {
    const newPizza = [...pizza];
    if (newPizza[index].quantity > 1) {
        newPizza[index].quantity--;
        setPizza(newPizza);
    }
    
    if (newPizza[index].quantity === 0){
      newPizza.splice(index, 1);
        setPizza(newPizza);
        setCarrito(newPizza);
    }
  };
  const sumarPrecioTotal = (pizzas) => {
    const precioTotal = pizzas.reduce((acumulador, pizza) => {
      return acumulador + (pizza.price * pizza.quantity);
    }, 0);
    return precioTotal;
  };

  return (
    <div className='vh-100'>
      <ul className="list--group list-group-numbered">
      {pizza.map((pizza, index) => ( pizza.quantity > 0 ? (
    <li key={pizza.id}>
      <Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>{`SubTotal $${pizza.price * pizza.quantity}`}</Card.Text>
              <Button variant="primary" onClick={() => handleRestar(index)}>
              -
              </Button>
          <span> {pizza.quantity} </span>
              <Button variant="danger" onClick={() => handleSumar(index)}>
              +
              </Button>
          </Card.Body>
        </Card>
      </Card>
    </li>
  ) : null
))}
</ul>
<div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{`Total a pagar: $${sumarPrecioTotal(pizza)}`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Tiempo aproximado de entrega <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
          <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
          <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
          </svg> 35min</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className='mx-2' variant="outline-success" onClick={() => navigate('/home')}> Seguir comprando </Button>
          <Button className='mx-2' variant="primary">Ir a pagar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
</div>
);
}