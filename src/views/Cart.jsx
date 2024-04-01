import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Container, ListGroup, Button } from "react-bootstrap";

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function Carrito() {
  const { cart } = useContext(PizzaContext);

  const handlePayment = () => {
    console.log("Procesando pago...");
  };

  return (
    <Container>
      <h1 className="my-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ListGroup>
          {cart.map((pizza) => (
            <ListGroup.Item
              key={pizza.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="mr-3 img-thumbnail"
                  style={{ width: "100px", marginRight: "20px" }}
                />
                <div>
                  <h5 className="mt-0">{capitalizeFirstLetter(pizza.name)}</h5>
                  <p>
                    <strong>Precio:</strong> ${pizza.price}
                  </p>
                  <p>
                    <strong>Cantidad:</strong> {pizza.count}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Button
        variant="success"
        style={{
          backgroundColor: "#E16B6B",
          borderColor: "red",
          color: "white",
        }}
        className="mt-3"
        onClick={handlePayment}
      >
        Pagar
      </Button>
    </Container>
  );
}

export default Carrito;
