// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp"; // Assuming you meant SignOut here
import Home from "./screens/Home";
import HealthLog from "./components/HealthLog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="logs" element={<HealthLog/>}/>
      </Routes>
    </Router>
  );
};

export default App;
