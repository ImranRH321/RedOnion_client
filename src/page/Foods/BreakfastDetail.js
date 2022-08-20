import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreakfastDetail = () => {
  const [breakfast, setBreakfast] = useState({});
  const { id } = useParams();
  const { nae, img, description, price } = breakfast;

  useEffect(() => {
    fetch("/breakfast.json")
      .then(res => res.json())
      .then(data => {
        const foodData = data.find(food => food.id == id);
        console.log(foodData);
        setBreakfast(foodData);
      });
  }, [id]);

  console.log("detils here");
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border">
          <div className="md:w-[60%] mx-auto">
            <h1 className="text-3xl font-bold text-primary">Breakfast Food </h1>
            <p>{description}</p>
            <p></p>
            <div className="flex gap-9 my-10 items-center">
              <div className="">
                1 <span className="text-2xl font-bold">$ {price} </span>
              </div>
              <div className="border rounded-full p-5">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="font-bold text-2xl"
                />
                <span className="font-bold text-2xl mx-5">4</span>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="font-bold text-2xl text-red-600"
                />
              </div>
            </div>

            <button class="btn btn-error btn-md text-white my-5 w-32 rounded-full">
              <FontAwesomeIcon icon={faCartShopping} /> <span className="mx-3 capitalize">Add</span>
            </button>
          </div>
           {/* Slider Container */}
           <div>
             <h1 className="border">Slider </h1>
           </div>
        </div>
        <div className="border"> box Container</div>
      </div>
    </div>
  );
};

export default BreakfastDetail;
