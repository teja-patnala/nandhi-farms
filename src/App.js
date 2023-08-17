import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import PasswordChangeForm from "./components/PasswordChangeForm";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/change-password" element={<PasswordChangeForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
