
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//contexts
import ContextCarrito from "./context/ContextCarrito";
import ContextPizzas from "./context/ContextPizza";

//views
import Home from "./views/Home";
import DetallePizza from "./views/DetallePizza"
import Carrito from "./views/Carrito";
//components
import Navbar from "./components/PizzaNavbar";
//bootstrap y react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  const api = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const getContextPizzas = { pizzas, setPizzas }

  const [carrito, setCarrito] = useState([])
  const getContextCarrito = {carrito, setCarrito }

  const getPizzas = async () => {
    const response = await fetch(api)
    let data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <div className="App">
      <ContextPizzas.Provider value={getContextPizzas}>
      <ContextCarrito.Provider value={getContextCarrito}>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pizza/:id" element={<DetallePizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Router>
      </ContextCarrito.Provider>
      </ContextPizzas.Provider>
    </div>
  );
}

export default App;