import React from "react";
import { Link, NavLink } from "react-router-dom";

const Services = () => {
  const foodItems = (
    <>
      <li className="list-none mx-3 my-5">
        <Link to="/breakfast" className=" btn xs-btn">
          Breakfast
        </Link>
      </li>
      <li className="list-none mx-3 my-5">
        <Link to="/lunch" className=" btn xs-btn">
          Lunch
        </Link>
      </li>
      <li className="list-none mx-3 my-5">
        <Link to="/dinner" className=" btn xs-btn">
          Dinner
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex justify-center">{foodItems}</div>
    </div>
  );
};

export default Services;
