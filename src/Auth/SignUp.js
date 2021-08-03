import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";
import "../styles.css";

export function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
  const isPasswordMatched =
    retypedPassword !== "" && retypedPassword === password;
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="form Signup">
        <span className="heading">SignUp</span>
        <input
          className="input"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <div className="password">
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            password={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="material-icons-outlined"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "visibility" : "visibility_off"}
          </span>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Retype Password"
          password={retypedPassword}
          onChange={(e) => setRetypedPassword(e.target.value)}
          required
        />
        <span className="font-1 color-1">
          {retypedPassword !== "" && !isPasswordMatched
            ? "Both Password must Match!"
            : ""}
        </span>
        <span>
          Have an account already?{" "}
          <Link to="/signin" style={{ textDecoration: "none", color: "" }}>
            Login.
          </Link>
        </span>
        <button
          type="submit"
          className={
            retypedPassword !== "" && !isPasswordMatched
              ? "disabled-btn"
              : "form-btn"
          }
          disabled={!isPasswordMatched}
        >
          {signingIn ? "Signing you in..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
