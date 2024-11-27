import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/images.jpeg";

const LandingPage = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.navbar}>
        <div style={styles.brand}>VRV-Security</div>
        <div style={styles.authButtons}>
          <Link to="/login" style={styles.link}>
            <button style={styles.button}>Login</button>
          </Link>
          <Link to="/register" style={styles.link}>
            <button style={styles.button}>Register</button>
          </Link>
        </div>
      </div>
      <div style={styles.mainContent}>
        <h1 style={styles.mainHeading}>VRV-Security</h1>
        <p style={styles.subText}>Your Security, Our Top Priority</p>
        <p style={styles.praiseText}>
          We provide top-notch security services tailored to your needs, ensuring the safety of your property, family, and assets.
        </p>
        <a
          href="https://vrvsecurityservices.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <button style={styles.button}>Explore Our Services</button>
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Arial', sans-serif",
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxSizing: "border-box",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "'Roboto', sans-serif",
    flexShrink: 0,
  },
  authButtons: {
    display: "flex",
    gap: "10px",
    flexShrink: 0,
  },
  link: {
    textDecoration: "none",
  },
  button: {
    padding: "8px 12px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    flexShrink: 0,
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  mainContent: {
    textAlign: "center",
    color: "#fff",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
  },
  mainHeading: {
    fontSize: "50px",
    textDecoration: "underline",
    fontWeight: "bold",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "2px",
    color: "#fff",
  },
  subText: {
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
    marginTop: "10px",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
  },
  praiseText: {
    fontSize: "16px",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
    marginTop: "15px",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
  },
};

export default LandingPage;
