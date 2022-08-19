import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-[500px] bg-green-700 border ">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Type here"
          class="input relative border-red-400 rounded-full left-[-150px]  input-bordered w-[300px] max-w-xs"
        />
        <button className="btn rounded-full absolute ps-4 w-[100px]">Search</button>
      </div>
    </div>
  );
};

export default Banner;
