import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
    </div>
  );
};

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      history.push("/dashboard");
    } catch (error) {
      if (error.response) {
        error.response && setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form onSubmit={Auth} className="form_container">
            <h1 className="labelLogin">Login to Your Account</h1>
            <label className="label">Name</label>
            <input
              required
              type="email"
              placeholder="Email"
              className="inputLogin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              required
              type="password"
              placeholder="Password"
              className="inputLogin"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {msg && <div className="error_msg">{msg}</div>}
            <button type="submit" className="green_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <div className="btn" onClick={props.toggleForm}>
            <button type="button" className="white_btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      window.location.reload();
    } catch (error) {
      if (error.response) {
        error.response && setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="right">
          <h1>Already Have Account ?</h1>
          <button
            type="button"
            className="white_btn"
            onClick={props.toggleForm}
          >
            Sign in
          </button>
        </div>
        <div className="left">
          <form className="form_container" onSubmit={Register}>
            <h1>Create Account</h1>
            <label className="label">Name</label>
            <input
              required
              type="text"
              className="inputLogin"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label">Email</label>
            <input
              required
              type="email"
              className="inputLogin"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              required
              type="password"
              className="inputLogin"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">Confirm Password</label>
            <input
              required
              type="password"
              className="inputLogin"
              placeholder="******"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            {msg && <div className="error_msg">{msg}</div>}
            <button
              type="submit"
              className="green_btn"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
