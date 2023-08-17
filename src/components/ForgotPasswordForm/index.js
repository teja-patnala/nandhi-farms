import React, { useState } from "react";
import "./index.css"; // You can create this CSS file to style your "Forgot Password" page

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); // You can handle the password reset request here
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2 className="forgot-heading">Forgot Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
