import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  
  // State for email
  const [email, setEmail] = useState("");
  
  // State for password
  const [pass, setPass] = useState("");


  // Navigating after successfull login
  const navigate = useNavigate();

  // Handler for login
  const formLoginHandler = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    
    // Condition for redirecting
    if (user?.email === email && user?.pass === pass) {
      localStorage.setItem("isLoggedIn",true);
      window.open("/","_self");
    } else {
      alert("User name or password incorrect");
    }
  };

  return (
    <>
      <div className="mainDiv_in">
        <div className="headerDiv">
          <h1 className="headerText">Log In To Your Account</h1>
        </div>
        <div className="contentDiv">
          <form onSubmit={formLoginHandler}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter E-Mail"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="submit" value="Log In" />
            </div>
          </form>
          <div>
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup" className="anchorTag">
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
