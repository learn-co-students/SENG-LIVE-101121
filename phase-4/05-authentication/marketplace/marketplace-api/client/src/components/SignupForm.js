import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/users", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
        <p>Have an account?</p>
        <p>
          <Link to="/">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
