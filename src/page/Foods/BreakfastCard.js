import React from "react";
import { useNavigate } from "react-router-dom";

const BreakfastCard = ({ food }) => {

  const { img1, name, title , id} = food;
  const navigate = useNavigate()
  
  const handleFoodDetails = () => {
     alert('hi food ')
     navigate(`/details/${id}`)
  } 
  return (
    <div onClick={handleFoodDetails} class="card md:mx-w-96 bg-base-100 mx-auto hover:shadow-lg">
      <figure className="max-w-xs">
        <img
          className="sm:w-[60%] md:w-[70%]   xs:w-[35%]"
          src={img1}
          alt="Shoes"
        />
      </figure>
      <div class="card-body max-w-xs mx-auto">
        <h2 class="card-title">{name}</h2>
        <p>{title} Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default BreakfastCard;
