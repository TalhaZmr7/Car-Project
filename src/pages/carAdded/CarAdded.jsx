import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/FireBase-config";
import { useParams } from "react-router-dom";
import "./style.css";

export default function CarAdded() {
  const params = useParams();

  const [car, setCar] = useState(null);

  const getCarById = async (id) => {
    try {
      const postDoc = doc(db, "posts", id);
      const record = await getDoc(postDoc);
      setCar(record.data());
    } catch (error) {
      console.log("Failed to get the car by id", error);
    }
  };
  useEffect(() => {
    getCarById(params.id);
  }, []);
  return (
    <div className="carRecord">
      <nav>
      <div className="carRecordHeader">{car?.brand}</div>
      </nav>
      <div className="carRecordText"> Car Model : {car?.brandModel} </div>
      <div className="carRecordText"> Car Color : {car?.carColor} </div>
      <div className="carRecordText"> Car Type : {car?.carType} </div>
      <div className="carRecordText">
        {" "}
        Year of Purchased : {car?.carYear}{" "}
      </div>
      <div className="carRecordText"> Fuel Type : {car?.fuelType} </div>
      <div className="carRecordText"> Kilometers : {car?.km} </div>
      <div className="carRecordText">
        {" "}
        Gear Shift Type : {car?.shiftType}{" "}
      </div>
      <div className="carRecordText"> E-Car : {car?.eCar} </div>
      <div className="carRecordText"> Car Price : {car?.carPrice} $ </div>
      <div className="carRecordText"><h3>@{car?.author.name}</h3></div>
    </div>

  );
}
