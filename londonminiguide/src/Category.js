import React from "react";

const Category = (props) => {
  return (
    
     <span><button onClick={props.onButtonClick}>{props.name}</button></span>
    
  );
};

export default Category;
