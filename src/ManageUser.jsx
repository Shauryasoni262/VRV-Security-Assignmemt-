import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const [selectedRoles, setSelectedRoles] = useState({});
  const navigate = useNavigate();

  const users = [
    { email: "user1@example.com", id: 1 },
    { email: "user2@example.com", id: 2 },
    { email: "user3@example.com", id: 3 },
    { email: "user4@example.com", id: 4 },
  ];

  const handleRoleChange = (e, userId) => {
    setSelectedRoles({
      ...selectedRoles,
      [userId]: e.target.value,
    });
  };

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.brand}>VRV-Security</div>
        <div style={styles.authButtons}>
          <button style={styles.button} onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.box}>
          <h2 style={styles.title}>Manage Users</h2>
          <div style={styles.userList}>
            {users.map((user) => (
              <div key={user.id} style={styles.userRow}>
                <div style={styles.userContainer}>
                  <span style={styles.email}>{user.email}</span>
                  <select
                    value={selectedRoles[user.id] || ""}
                    onChange={(e) => handleRoleChange(e, user.id)}
                    style={styles.select}
                  >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="customer">Customer</option>
                    <option value="guest">Guest</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
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
    backgroundColor: "#e0f7e0",
    overflowY: "auto",
  },
  navbar: {
    width: "100%",
    padding: "15px 20px",
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
    padding: "10px 15px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    marginTop: "50px",
    width: "100%",
    maxWidth: "1000px",
  },
  box: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#e0f7e0", 
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  userList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  userRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  userContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
  },
  email: {
    flex: 2,
    textAlign: "left",
    paddingRight: "10px",
    color: "#333",
  },
  select: {
    padding: "8px",
    fontSize: "14px",
    width: "180px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  },
};

export default ManageUsers;
