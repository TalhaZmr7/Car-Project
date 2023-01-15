import React, { useState, useEffect } from "react";
import "./style.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase/FireBase-config";
import { useNavigate } from "react-router-dom";

function AddCar({ isAuth }) {
  const [brand, setBrand] = useState("");
  const [brandModel, setBrandModel] = useState("");
  const [km, setKm] = useState("");
  const [carYear, setCarYear] = useState("");
  const [shiftType, setShiftType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carType, setCarType] = useState("");
  const [eCar, setECar] = useState("");
  const [carPrice, setCarPrice] = useState("");


  let navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      brand,
      brandModel,
      km,
      carYear,
      shiftType,
      fuelType,
      carColor,
      carType,
      eCar,
      carPrice,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="addCarPage">
      <div className="cpContainer">
        <h1>Add A Car Post</h1>
        <div className="inputGp">
          <label>Brand:</label>
          <input
            placeholder="Brand..."
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <div className="inputGp">
            <label> Brand Model: </label>
            <textarea
              placeholder="Brand Model..."
              onChange={(event) => {
                setBrandModel(event.target.value);
              }}
            />
            <div className="inputGp">
              <label> Kilometers: </label>
              <input
                type="number"
                min={0}
                placeholder="999999 Km"
                onChange={(event) => {
                  setKm(event.target.value);
                }}
              />
            </div>

            <div className="inputGp">
              <label> Car Year </label>
              <input
                type="date"
                onChange={(event) => {
                  setCarYear(event.target.value);
                }}
              />
            </div>

            <div className="inputGp">
              <label> Shift Type </label>
              <textarea
                placeholder="Auto,Manual..."
                onChange={(event) => {
                  setShiftType(event.target.value);
                }}
              />
            </div>

            <div className="inputGp">
              <label> Fuel Type </label>
              <textarea
                placeholder="Petrol,Diesel..."
                onChange={(event) => {
                  setFuelType(event.target.value);
                }}
              />
            </div>

            <div className="inputGp">
              <label> Car Color </label>
              <textarea
                placeholder="White,Black,Red..."
                onChange={(event) => {
                  setCarColor(event.target.value);
                }}
              />
            </div>

            <div className="inputGp">
              <label>Car Type </label>
              <textarea
                placeholder="SUV,Sedan,Crossover,Sports..."
                onChange={(event) => {
                  setCarType(event.target.value);
                }}
              />
            </div>

            <div className="inputGp">
              <label> E-Car </label>
              <textarea
                placeholder="Yes or No..."
                onChange={(event) => {
                  setECar(event.target.value);
                }}
              />
            </div>
            <div className="inputGp">
              <label> Car Price </label>
              <input
                type="number"
                min={0}
                placeholder="999999"
                onChange={(event) => {
                  setCarPrice(event.target.value);
                }}
              />
            </div>
          </div>
          <button onClick={createPost}> Submit Post</button>
        </div>
      </div>
    </div>
  );
}

export default AddCar;