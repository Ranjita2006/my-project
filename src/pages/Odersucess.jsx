import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#04FFF7", // Neon Turquoise
      padding: "20px",
      fontFamily: "'Segoe UI', sans-serif",
    },
    title: {
      fontSize: "3rem",
      color: "#9500FF", // Neon Violet
      marginBottom: "20px",
      fontFamily: "'Brush Script MT', cursive", // Cursive font
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    message: {
      fontSize: "1.2rem",
      color: "#2F4F4F", // Dark Slate Gray
      marginBottom: "30px",
      fontStyle: "italic",
    },
    button: {
      padding: "12px 25px",
      fontSize: "1rem",
      backgroundColor: "#9500FF", // Neon Violet
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s ease",
      textDecoration: "none",
      fontFamily: "'Brush Script MT', cursive", // Cursive font
    },
    buttonHover: {
      backgroundColor: "#8A00C4", // Slightly darker shade of Neon Violet
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
      <p style={styles.message}>Thank you for shopping with us.</p>
      <a
        href="/"
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Go to Home
      </a>
    </div>
  );
}
