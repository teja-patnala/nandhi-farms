import "./index.css";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <div className="login-container">
    <div className="login-box">
      <h2 className="login-heading">Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input required type="email" id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input required type="password" id="password" />
        </div>
        <button type="submit">Login</button>
        <p className="para">
          If you are not a user please click here to{" "}
          <Link to="/signup">sign up</Link>
        </p>
      </form>
    </div>
  </div>
);
export default LoginForm;
