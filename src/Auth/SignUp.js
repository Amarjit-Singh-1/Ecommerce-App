import { useState } from "react";
import axios from "axios";
import { useCart } from "../cart-context";
import "../styles.css";

export function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const { dispatch } = useCart();
  const handleSubmit = async (e) => {
    setSigningIn(true);
    try {
      e.preventDefault();
      const res = await axios.put(
        `https://Ecommerce-2.amarjitsingh2.repl.co/api/v1/auth`,
        {
          username,
          password
        }
      );
      setSigningIn(false);
      setUserName("");
      setPassword("");
      if (res.data.user.username) {
        const { _id, username } = res.data.user;
        dispatch({
          type: "LOGIN_USER",
          payload: { id: _id, username }
        });
      } else {
        alert("Can't create account 😐");
      }
    } catch (error) {
      console.log(error);
      setSigningIn(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Password"
        password={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="form-btn">
        {signingIn ? "Signing you in..." : "Sign Up"}
      </button>
    </form>
  );
}
