import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import Services from "../Services/Services";
import BreakfastCard from "./BreakfastCard";


const Lunch = () => {
  const [lunch, setLunch] = useState([]);

  useEffect(() => {
    fetch("/lunch.json")
      .then(res => res.json())
      .then(data => setLunch(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="mx-10">
        <h1 className="text-2xl font-bold"> hi  form Lunch {lunch.length}</h1>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {lunch.map(food => (
            <BreakfastCard key={food.id} food={food}></BreakfastCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lunch;
