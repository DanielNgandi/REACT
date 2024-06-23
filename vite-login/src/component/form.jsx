import React, { useState } from 'react';
import login from "./loginComonent";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const emailchangeEvent = (event) => {
    setEmail(event.target.value);
  };

  const passwordchangeEvent = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    if (email === '' || password.length < 6) {
      setError('incorrect email or password');
      return;
    }
    const isloginSuccessful = login(email);
    if (isloginSuccessful) {
      alert('Login successful');
    } else {
      setError('Wrong email or password');
    }
  };

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          type={"email"}
          onChange={emailchangeEvent}
          value={email}
        />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input
          id={"password"}
          type={"password"}
          onChange={passwordchangeEvent}
          value={password}
        />
      </div>
      {<div className="errorMessage">{error}</div>}
      <div className="button">
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
}
