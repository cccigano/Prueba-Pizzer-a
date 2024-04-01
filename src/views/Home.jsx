import React, { useState, useEffect, useContext } from "react";
import PizzaCard from "../components/PizzaCard";
import { Row, Col, Container } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(PizzaContext);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) =>
        console.error("Error cargando datos de pizzas:", error)
      );
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <div className="header-content">
          <h1 className="title">The good Pizza</h1>
          <h3 className="subtitle">
            ¡Tenemos las mejores Pizzas que podrás encontrar!
          </h3>
        </div>
      </div>
      <Container
        className="pizzas-container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} md={4}>
              <PizzaCard pizza={pizza} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
