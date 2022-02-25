import { useState } from "react";

import { useSignup } from "../Hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signup(email, password);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
