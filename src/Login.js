import React, { useState, useEffect } from "react";

const Login = (props) => {
  const { history } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validCredentials, setValidCredentials] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  });

  const validateForm = () => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else {
      setErrors(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "sivaMunakala" && password === "Msshiva123@") {
      history.push("/home");
    } else {
      setValidCredentials(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">USERNAME</label>
        <input
          id="user"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {errors.username && <p>{errors.username}</p>}

      <div>
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      {errors.password && <p>{errors.password}</p>}
      {!validCredentials && <p>Invalid credentials</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
