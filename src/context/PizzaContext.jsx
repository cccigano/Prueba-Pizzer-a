import React, { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const url = "/pizzas.json";

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const data = await response.json();
        console.log("Error en la respuesta:", data);
        throw new Error("Networking response was not ok");
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Pizzas cargadas:", data);
        setPizzas(data);
      } else {
        console.log("La respuesta no es JSON:", response);
      }
    } catch (error) {
      console.error("Error fetching Pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const addToCart = ({ id, price, name, img }) => {
    setCart((prevCart) => {
      const productFoundIndex = prevCart.findIndex((pizza) => pizza.id === id);
      const product = { id, price, name, img, count: 1 };
      if (productFoundIndex >= 0) {
        prevCart[productFoundIndex].count++;
        return [...prevCart];
      } else {
        return [...prevCart, product];
      }
    });
    console.log("Carrito actualizado:", cart);
  };

  return (
    <PizzaContext.Provider value={{ pizzas, cart, addToCart }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
