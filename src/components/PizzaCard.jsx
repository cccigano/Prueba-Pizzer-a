import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function PizzaCard({ pizza, addToCart }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const capitalizeIngredient = (ingredient) => {
    return capitalizeFirstLetter(ingredient.toLowerCase());
  };

  return (
    <Card
      className="h-100"
      style={{
        backgroundImage: `url(${pizza.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image src={pizza.img} alt={pizza.name} fluid />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(pizza.name)}</Card.Title>
        <Card.Text>{pizza.desc}</Card.Text>
        <div>
          <strong>Ingredientes:</strong>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{capitalizeIngredient(ingredient)}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Link to={`/pizza/${pizza.id}`}>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#eec5b3",
                borderColor: "red",
                color: "white",
                marginRight: "10px",
              }}
            >
              Ver más
            </Button>
          </Link>
          <Button
            variant="success"
            style={{
              backgroundColor: "#E16B6B",
              borderColor: "red",
              color: "white",
            }}
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
