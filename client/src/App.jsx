// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import HealthLog from "./screens/HealthLog";
import PrivateRoute from "./components/PrivateRoute";
import SetReminder from "./screens/SetReminder";
import TrendsPage from "./screens/TrendsPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reminder/:id" element={<SetReminder />} />
        <Route path="/trends" element={<TrendsPage/>} />
        <Route
          path="/home/:id"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/logs/:id"
          element={
            <PrivateRoute>
              <HealthLog />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
