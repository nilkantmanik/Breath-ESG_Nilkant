import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Home from "./Components/Home";

import PrivateRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
