import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Fibonacci = () => {
  // State for first number
  let [fNum, setFnum] = useState(0);

  // State for second number
  let [sNum, setSnum] = useState(0);

  // State for fibonacci series numbers
  let [fibonacciNums, setFibonacciNums] = useState([]);

  // Handler for fibonacci
  let fibonacciHandler = (e) => {
    e.preventDefault();
    let num1 = Number(fNum);
    let num2 = Number(sNum);
    let nextNum = 0;
    let arr = [];
    arr.push(num1, num2);

    for (let i = 0; i < 10; i++) {
      nextNum = num1 + num2;
      arr.push(nextNum);
      num1 = num2;
      num2 = nextNum;
    }
    setFibonacciNums(arr);
  };

  // Log out handler
  let navigate = useNavigate();
  let logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  };

  return (
    <div style={{ display: "block" }}>
      <div>
        <h1>Enter two numbers of which you want to create Fibonacci Series</h1>
        <form onSubmit={fibonacciHandler}>
          <input
            style={{ marginRight: "1rem" }}
            type="number"
            name=""
            placeholder="First Number"
            onChange={(e) => {
              setFnum(e.target.value);
            }}
          />
          <input
            style={{ marginRight: "1rem" }}
            type="number"
            name=""
            placeholder="Second Number"
            onChange={(e) => {
              setSnum(e.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div style={{ margin: "5rem" }}>
        {fibonacciNums.length !== 0 ? (
          <div style={{ display: "flex" }}>
            <h3>Fibonnaci Sequence is :</h3>
            <h3>&nbsp;&nbsp;{fibonacciNums.toString()} </h3>
          </div>
        ) : null}
      </div>
      <div>
        <button className="logOutBtn" onClick={logOutHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Fibonacci;
