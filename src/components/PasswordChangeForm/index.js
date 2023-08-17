import React, { useState } from "react";
import "./index.css"; // You can create this CSS file to style your password change page

function PasswordChangeForm() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle password change here
  };

  return (
    <div className="password-change-container">
      <div className="password-change-box">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordChangeForm;
