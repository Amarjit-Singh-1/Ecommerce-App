import axios from "axios";
import { useState } from "react";
import { useCart } from "../cart-context";
import { Link } from "react-router-dom";
import "../styles.css";

export function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const { dispatch } = useCart();
  const handleSubmit = async (e) => {
    setIsLogging(true);
    try {
      e.preventDefault();
      const res = await axios.post(
        `https://Ecommerce-2.amarjitsingh2.repl.co/api/v1/auth`,
        {
          username,
          password
        }
      );
      setIsLogging(false);
      setUserName("");
      setPassword("");
      if (res.data.user.username) {
        const { _id, username } = res.data.user;
        dispatch({
          type: "LOGIN_USER",
          payload: { id: _id, username }
        });
      } else {
        alert("Can't log you in 😐");
      }
    } catch (error) {
      console.log(error);
      setIsLogging(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Username"
      />
      <input
        className="input"
        type="text"
        password={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <span>
        Don't have an account? <Link to="/signup">Create account</Link>
      </span>
      <button className="form-btn" type="submit">
        {isLogging ? "Logging you in..." : "Login"}
      </button>
    </form>
  );
}
