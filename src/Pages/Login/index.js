import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const users = JSON.parse(localStorage.getItem("users"));
  const navigateToSignup = () => {
    navigate("/signup");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const existinguser =
      users &&
      users.find((user) => user.email === email && user.password === password);
    if (existinguser) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      setErr("Invalid Credentails");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2 className="login-heading">Login</h2>
        <div className="login-label-input-container">
          <label className="login-label">Email:</label>
          <input
            className="login-input"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-label-input-container">
          <label className="login-label">Password:</label>
          <input
            className="login-input"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {err ? <p className="err-message">{err}</p> : null}
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="hr-container">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <button
          onClick={navigateToSignup}
          className="login-btn create-btn"
          type="button"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
