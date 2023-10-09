import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToLogin = () => {
    navigate("/login");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (!name || !email || !password) {
      alert("Fill out All Forms");
    }

    if (existingUser) {
      alert("user Alreay exist");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedIn", true);
      navigate("/");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={onSubmitHandler}>
        <h2 className="signup-heading">Signup</h2>
        <div className="signup-label-input-container">
          <label className="signup-label">Name:</label>
          <input
            className="signup-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signup-label-input-container">
          <label className="signup-label">Email:</label>
          <input
            className="signup-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup-label-input-container">
          <label className="signup-label">Password:</label>
          <input
            className="signup-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signup-btn" type="submit">
          Signup
        </button>
        <div className="hr-container">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <button
          onClick={navigateToLogin}
          className="signup-btn l-btn"
          type="button"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
