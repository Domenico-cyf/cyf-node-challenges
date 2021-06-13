import './App.css';
import CitySelector from "./CitySelector";
import Category from "./Category";
import React,{useState} from "react";

function App() {
const [city,setCity] = useState("");




  return (
    <div className="App">
      <h1>London City Guide</h1>
      <CitySelector onSelectedCity={setCity} />
      <div>You have chosen {city}</div>
      <Category
        name="pharmacies"
        onButtonClick={() => {
          console.log(`the Pharmacy button was pressed for city ${city}`);
        }}
      />
      <Category
        name="colleges"
        onButtonClick={() => {
          console.log(`the Colleges button was pressed for city ${city}`);
        }}
      />
      <Category
        name="hospitals"
        onButtonClick={() => {
          console.log(`the Hospitals button was pressed for city ${city}`);
        }}
      />
      <Category
        name="doctors"
        onButtonClick={() => {
          console.log(`the Doctors button was pressed for city ${city}`);
        }}
      />
    </div>
  );
}

export default App;
