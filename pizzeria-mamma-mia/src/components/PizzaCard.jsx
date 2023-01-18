import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContextCarrito from '../context/ContextCarrito';
import { useContext } from 'react';
import "../index.css"




export default function PizzaCard({pizza, agregarAlCarrito, navigate}) {
    const { carrito, setCarrito } = useContext(ContextCarrito);

    const handleAgregarAlCarrito = () => {
        setCarrito([...carrito, { ...pizza, quantity: 1 }])
    }

    return (
    <Card id='pizzaCard' className='m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Title>Ingredientes:</Card.Title>
          <ul>
            {pizza.ingredients.map((ingredientes, i) => (
              <li key={i}>🍕 {ingredientes}</li>
            ))}
          </ul>
          <Card.Text>{`$${pizza.price}`}</Card.Text>
          <Button variant="primary" onClick={() => navigate(`/pizza/${pizza.id}`)}>
            Ver más
        </Button>
        <Button variant="danger" onClick={handleAgregarAlCarrito}>
        Añadir🛒
        </Button>
        </Card.Body>
    </Card>
);
}
