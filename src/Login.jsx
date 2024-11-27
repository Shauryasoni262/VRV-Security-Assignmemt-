import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role) {
      localStorage.setItem("role", role);
      navigate("/home");
    } else {
      alert("Please select a role!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login Page</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Select Role:</label>
          <select value={role} onChange={handleChange} style={styles.select}>
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="customer">Customer</option>
            <option value="guest">Guest</option>
          </select>
          <div style={styles.links}>
            <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
            <a href="/register" style={styles.link}>Register</a>
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    margin: 0,
    padding: 0,
    fontFamily: "'Arial', sans-serif",
  },
  box: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
    textDecoration: "underline",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "16px",
    color: "#333",
    textAlign: "left",
    marginBottom: "5px",
    textDecoration: "underline",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    width: "100%",
    height: "40px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
