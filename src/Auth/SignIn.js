import axios from "axios";
import { useState } from "react";
import { useCart } from "../cart-context";
import { Link } from "react-router-dom";
import "../styles.css";

export function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useCart();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `https://Ecommerce-2.amarjitsingh2.repl.co/api/v1/auth`,
        {
          username,
          password
        }
      );
      console.log(res);
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
        Don't have an account <Link to="/signup">create account</Link>
      </span>
      <button className="form-btn" type="submit">
        Login
      </button>
    </form>
  );
}
