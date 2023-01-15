import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/homePage/Home";
import AddCar from "./pages/addCar/AddCar";
import Login from "./pages/loginPage/Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/FireBase-config";
import CarAdded from "./pages/carAdded/CarAdded";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/"> Home</Link>
        {!isAuth ? (
          <Link to="/Login"> Login</Link>
        ) : (
          <>
            <Link to="/AddCar"> Add Car</Link>
            <button onClick={signOutUser}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/AddCar" element={<AddCar isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path="/CarAdded/:id"
          element={<CarAdded setIsAuth={setIsAuth} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
