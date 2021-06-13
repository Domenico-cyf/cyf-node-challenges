import React from "react";

const CitySelector = (props) => {
    function handleSelect(event) {
props.onSelectedCity(event.target.value);
    }
    return (
      <div>
        <label for="cars">Choose a city: </label>

        <select onChange={handleSelect}
            
          name="cities" id="city">
          <option value="Honslow">Harrow</option>
          <option value="Heathrow">Heathrow</option>
          <option value="Stratford">Strastford</option>
         
        </select>
      </div>
    );
    
};

export default CitySelector;