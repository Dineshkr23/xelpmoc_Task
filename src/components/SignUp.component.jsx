import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  // State for user name
  let [name, setName] = useState("");

  // State for user email
  let [email, setEmail] = useState("");

  // State for user password
  let [pass, setPass] = useState("");

  // for navigating after sign up
  let navigate = useNavigate();

  // Handler for form submission
  let formSubmitHandler = (e) => {
    e.preventDefault();
    let userData = { name, email, pass };
    console.log(userData);
    localStorage.setItem("user",JSON.stringify(userData))
    navigate("/");
  };
  return (
    <>
      <div className="mainDiv_up">
        <div className="headerDiv">
          <h1 className="headerText">Sign Up to xelpmoc</h1>
        </div>
        <div className="contentDiv">
          <form onSubmit={formSubmitHandler}>
            <div>
              <input
                type="text"
                placeholder="Enter User Name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
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
              <input type="submit" value="Sign Up" />
            </div>
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <NavLink to="/signin" className="anchorTag" href="">
                Log In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
