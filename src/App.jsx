import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Carrito from "./views/Cart";
import Home from "./views/Home";
import NotFound from "./views/Notfound";
import Pizza from "./views/PizzaDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaProvider from "./context/PizzaContext";
import CartProvider from "./context/CartContext";

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) =>
        console.error("Error cargando datos de pizzas:", error)
      );
  }, []);

  return (
    <div className="main-container">
      <BrowserRouter>
        <PizzaProvider pizzas={pizzas}>
          <CartProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </PizzaProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
