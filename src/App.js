import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn.component";
import SignUp from "./components/SignUp.component";
import Fibonacci from "./components/Fibonacci.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              localStorage.getItem("isLoggedIn") ? (
                <Fibonacci />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
