import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import LoginPage from "./Login.jsx";
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import ManageUsers from "./ManageUser.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
