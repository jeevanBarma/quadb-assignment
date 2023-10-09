import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import SubmitForm from "./Pages/SubmitForm";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs/:id" element={<JobDetails />} />
          <Route exact path="/form" element={<SubmitForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
