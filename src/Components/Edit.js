import axios from "axios";
import { useState } from "react";
import { useCart } from "../cart-context";

function Edit() {
  const { dispatch, state } = useCart();
  const [username, setUserName] = useState(state.user.username);
  const [password, setPassword] = useState("");
  const [newUsername, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.patch(
        `https://Ecommerce-2.amarjitsingh2.repl.co/api/v1/auth/${state.user?.id}`,
        {
          username,
          password,
          newUsername,
          newPassword
        }
      );
      console.log(res);
      if (res.data.result.username) {
        const { _id, username } = res.data.result;
        dispatch({
          type: "LOGIN_USER",
          payload: { id: _id, username }
        });
      } else {
        alert("Some error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="edit">
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        password={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        value={newUsername}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="new-username"
      />
      <input
        type="text"
        password={newPassword}
        placeholder="new-password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Edit;
