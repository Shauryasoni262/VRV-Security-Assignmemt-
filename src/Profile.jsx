import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.brand}>VRV-Security</div>
        <div style={styles.authButtons}>
          <button style={styles.button}>Profile</button>
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>Hello there, welcome to your profile!</h1>

        <div style={styles.profilePictureContainer}>
          <div style={styles.profilePicture}></div>
        </div>

        <button style={styles.goBackButton} onClick={handleGoBack}>
          Go Back
        </button>
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
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#e0f7fa",
    overflowY: "auto",
  },
  navbar: {
    width: "100%",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 100,
  },
  brand: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    fontFamily: "'Roboto', sans-serif",
  },
  authButtons: {
    display: "flex",
    gap: "15px",
  },
  button: {
    padding: "8px 12px",
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
  },
  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
    lineHeight: "1.4",
  },
  profilePictureContainer: {
    position: "relative",
    margin: "20px 0",
  },
  profilePicture: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    border: "4px solid #fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "0 auto",
  },
  goBackButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "2px solid #28a745",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s, border-color 0.3s",
  },
  goBackButtonHover: {
    backgroundColor: "#218838",
    borderColor: "#1e7e34",
  },
};

export default Profile;
