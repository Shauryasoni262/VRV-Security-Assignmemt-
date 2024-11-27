import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleManageUsers = () => {
    navigate("/manageusers");
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.brand}>VRV</div>
        <div style={styles.authButtons}>
          <button style={styles.button} onClick={() => navigate("/profile")}>Profile</button>
          <button style={styles.button} onClick={handleLogout}>Logout</button>
          {(role === "admin" || role === "manager") && (
            <button style={styles.button} onClick={handleManageUsers}>Manage Users</button>
          )}
        </div>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>Welcome to VRV-Security</h1>
        <div style={styles.box}>
          <p style={styles.text}>
            At VRV Security, we provide cutting-edge security solutions tailored to your needs. Whether you are a business owner or an individual looking for the highest level of protection, we offer a range of services designed to keep you safe and secure.
          </p>
        </div>
        <div style={styles.box}>
          <p style={styles.text}>
            As part of our commitment to excellence, we utilize the latest technologies and a dedicated team to ensure that your security is our top priority. Whether you're looking for comprehensive surveillance, access control systems, or real-time monitoring, VRV Security has you covered.
          </p>
        </div>
        <div style={styles.box}>
          <p style={styles.text}>
            Our services are designed to be reliable, affordable, and scalable to meet the needs of every client. We believe that security is a fundamental right, and we are here to provide it with professionalism and integrity.
          </p>
        </div>
        {(role === "customer" || role === "guest") && (
          <div style={styles.box}>
            <p style={styles.text}>
              Welcome to the customer portal. You can explore our services, read reviews, and stay informed about the latest updates in the world of security.
            </p>
          </div>
        )}
        {(role === "admin" || role === "manager") && (
          <div style={styles.box}>
            <p style={styles.text}>
              As an admin or manager, you have access to a range of management tools to oversee your security systems, monitor activities, and ensure that everything runs smoothly. You can also manage user accounts and view detailed reports.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    padding: 0,
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f0f8ff",
    overflowY: "auto",
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 100,
    height: "60px",
    boxSizing: "border-box",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    whiteSpace: "nowrap",
  },
  authButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  button: {
    padding: "6px 12px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  mainContent: {
    textAlign: "center",
    padding: "20px",
    marginTop: "80px",
    width: "90%",
    maxWidth: "1000px",
    overflowY: "auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "underline",
    marginBottom: "20px",
  },
  box: {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
  },
};

export default Home;
