import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      padding: "30px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      backgroundColor: "#FFB6C1",
      fontFamily: "'Segoe UI', sans-serif",
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    name: {
      fontSize: "2rem",
      marginBottom: "10px",
      color: "#333333",
      fontFamily: "'Pink Script', cursive",
    },
    description: {
      fontSize: "1.1rem",
      marginBottom: "15px",
      color: "#888888",
    },
    price: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: "#FADADD",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 25px",
      fontSize: "1rem",
      backgroundColor: "#FADADD",
      color: "#333333",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s ease",
      fontFamily: "'Pink Script', cursive",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{product.name}</h2>
      <img src={product.image} alt={product.name} style={styles.image} />
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>₹{product.price}</p>
      <button
        style={styles.button}
        onClick={() => {
          addToCart(product);
          navigate("/cart");
        }}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}
