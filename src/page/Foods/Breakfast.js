import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import Services from "../Services/Services";
import BreakfastCard from "./BreakfastCard";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    fetch("/breakfast.json")
      .then(res => res.json())
      .then(data => setBreakfast(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="mx-10">
        <h1 className="text-2xl font-bold">Helo Form Breakfast {breakfast.length}</h1>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {breakfast.map(food => (
            <BreakfastCard key={food.id} food={food}></BreakfastCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
