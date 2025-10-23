import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ productId }) => {
  const navigate = useNavigate();

  // Convert productId to number since it comes as a string from useParams
  const numericProductId = parseInt(productId, 10);

  // Mock product data - in a real app, this would come from an API
  const products = {
    1: {
      title: "Cosmic Cat T-Shirt",
      price: "$25.99",
      image: "https://picsum.photos/seed/cosmic-cat/600/600",
      description:
        "Embrace the cosmic feline energy with our signature Cosmic Cat T-shirt. This premium cotton blend features a stunning design of a cat floating through space, surrounded by stars and nebulae. Perfect for both cat lovers and astronomy enthusiasts!",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy Blue"],
      reviews: [
        {
          id: 1,
          user: "SpaceCatLover",
          rating: 5,
          comment: "Amazing quality and the print is absolutely stunning!",
        },
        {
          id: 2,
          user: "TShirtCollector",
          rating: 4,
          comment: "Great fit and comfortable material. Colors are vibrant.",
        },
        {
          id: 3,
          user: "FashionGuru",
          rating: 5,
          comment: "Gets lots of compliments whenever I wear it!",
        },
      ],
    },
    2: {
      title: "Pizza Ninja T-Shirt",
      price: "$23.99",
      image: "https://picsum.photos/seed/pizza-ninja/600/600",
      description:
        "Who says ninjas can't enjoy pizza? This whimsical design features a stealthy ninja masterfully slicing a pizza with a katana. Made from 100% organic cotton, this shirt is as comfortable as it is funny.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Dark Grey", "Red"],
      reviews: [
        {
          id: 1,
          user: "PizzaWarrior",
          rating: 5,
          comment: "Perfect combination of my two favorite things!",
        },
        {
          id: 2,
          user: "NinjaFoodie",
          rating: 4,
          comment: "Material is great, print quality is excellent.",
        },
      ],
    },
    3: {
      title: "Pixel Gaming T-Shirt",
      price: "$24.99",
      image: "https://picsum.photos/seed/pixel-gaming/600/600",
      description:
        "Take a trip down memory lane with our retro-inspired Pixel Gaming t-shirt. Featuring classic 8-bit graphics and a nostalgic design that will remind you of the golden age of gaming. Made with gamers in mind!",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Navy"],
      reviews: [
        {
          id: 1,
          user: "RetroGamer",
          rating: 5,
          comment: "This brings back so many memories!",
        },
        {
          id: 2,
          user: "PixelArtist",
          rating: 5,
          comment: "The design is perfectly executed.",
        },
        {
          id: 3,
          user: "GameCollector",
          rating: 4,
          comment: "Great quality, wish it came in more colors.",
        },
      ],
    },
    4: {
      title: "Robot DJ T-Shirt",
      price: "$26.99",
      image: "https://picsum.photos/seed/robot-dj/600/600",
      description:
        "Drop the beat with our Robot DJ t-shirt! This futuristic design features a cool robot mixing tracks on a holographic deck. Made from premium cotton with a touch of stretch for comfort.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Electric Blue", "Silver"],
      reviews: [
        {
          id: 1,
          user: "TechnoLover",
          rating: 5,
          comment: "The design glows under UV light!",
        },
        {
          id: 2,
          user: "RobotFan",
          rating: 4,
          comment: "Cool design, fits great!",
        },
      ],
    },
  };

  const product = products[numericProductId];

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Product not found</h1>
        <p>
          Product ID: {productId} (converted to: {numericProductId})
        </p>
        <button
          onClick={() => navigate("/catalogue")}
          style={{
            backgroundColor: "#4299e1",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Back to Catalogue
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <button
        onClick={() => navigate("/catalogue")}
        style={{
          backgroundColor: "#4299e1",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "2rem",
        }}
      >
        Back to Catalogue
      </button>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
      >
        <div>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onError={(e) => {
              e.target.src = "https://picsum.photos/600/600";
              e.target.alt = `${product.title} (fallback)`;
            }}
          />
        </div>

        <div>
          <h1 style={{ marginTop: 0, marginBottom: "1rem" }}>
            {product.title}
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#2d3748",
              marginBottom: "1rem",
            }}
          >
            {product.price}
          </p>
          <p
            style={{
              lineHeight: "1.6",
              color: "#4a5568",
              marginBottom: "2rem",
            }}
          >
            {product.description}
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Available Sizes:</h3>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "4px",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Available Colors:</h3>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {product.colors.map((color) => (
                <div
                  key={color}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "4px",
                    background: "white",
                  }}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>

          <button
            style={{
              backgroundColor: "#48bb78",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1.1rem",
              width: "100%",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2>Customer Reviews</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {product.reviews.map((review) => (
            <div
              key={review.id}
              style={{
                padding: "1rem",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                background: "white",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{review.user}</strong>
                <div>
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p style={{ marginTop: "0.5rem", color: "#4a5568" }}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
