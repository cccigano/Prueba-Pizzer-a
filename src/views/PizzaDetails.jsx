import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const PizzaDetails = () => {
  const { pizzas, addToCart } = useContext(PizzaContext);
  const { id } = useParams();
  const [pizzaData, setPizzaData] = useState({});

  useEffect(() => {
    console.log("Pizzas disponibles:", pizzas);
    const pizzaFound = pizzas.find((pizza) => pizza.id === id);
    console.log("Pizza encontrada:", pizzaFound);
    setPizzaData(pizzaFound || {});
  }, [id, pizzas]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src={pizzaData.img}
          alt={pizzaData.name}
        />
        <div className="card-body">
          <h5 className="card-title">{pizzaData.name}</h5>
          <p className="card-text">{pizzaData.desc}</p>
          <ul className="list-group list-group-flush">
            {pizzaData?.ingredients?.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="card-text">Precio: ${pizzaData.price}</p>
          <Button
            variant="success"
            style={{
              backgroundColor: "#E16B6B",
              borderColor: "red",
              color: "white",
            }}
            onClick={() => addToCart(pizzaData)}
          >
            Añadir al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
