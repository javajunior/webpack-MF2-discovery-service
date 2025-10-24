import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function Catalogue() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [count, setCount] = useState(0);

  const handleViewDetails = (productId) => {
    navigate(`/catalogue/${productId}`);
  };

  // If we have a productId parameter, show the product details
  if (productId) {
    return <ProductDetails productId={productId} />;
  } else {
    console.log("No productId found");
  }

  // Otherwise show the product list
  const products = [
    {
      id: 1,
      title: "Cosmic Cat T-Shirt",
      price: "$25.99",
      image: "https://picsum.photos/seed/cosmic-cat/300/300",
    },
    {
      id: 2,
      title: "Pizza Ninja T-Shirt",
      price: "$23.99",
      image: "https://picsum.photos/seed/pizza-ninja/300/300",
    },
    {
      id: 3,
      title: "Pixel Gaming T-Shirt",
      price: "$24.99",
      image: "https://picsum.photos/seed/pixel-gaming/300/300",
    },
    {
      id: 4,
      title: "Robot DJ T-Shirt",
      price: "$26.99",
      image: "https://picsum.photos/seed/robot-dj/300/300",
    },
    {
      id: 5,
      title: "Zombie Unicorn T-Shirt",
      price: "$27.99",
      image: "https://picsum.photos/seed/zombie-unicorn/300/300",
    },
    {
      id: 6,
      title: "Taco Dragon T-Shirt",
      price: "$25.99",
      image: "https://picsum.photos/seed/taco-dragon/300/300",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        style={{ marginLeft: "0.5rem" }}
      >
        Increment react 18
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        style={{ marginLeft: "0.5rem" }}
      >
        Decrement react 18
      </button>
      <span style={{ marginLeft: "1rem" }}>Count: {count}</span>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our T-Shirt Collection
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          padding: "1rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "1rem",
              }}
              onError={(e) => {
                e.target.src = "https://picsum.photos/300/300";
                e.target.alt = `${product.title} (fallback)`;
              }}
            />
            <h3 style={{ marginBottom: "0.5rem" }}>{product.title}</h3>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#4299e1",
                marginBottom: "1rem",
              }}
            >
              {product.price}
            </p>
            <button
              onClick={() => handleViewDetails(product.id)}
              style={{
                backgroundColor: "#4299e1",
                color: "white",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3182ce";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#4299e1";
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
