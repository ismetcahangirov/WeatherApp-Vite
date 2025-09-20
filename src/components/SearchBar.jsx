import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ setCity }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value && value.trim()) setCity(value.trim());
    return;
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-max  flex justify-center items-center"
    >
      <div className="relative w-full sm:w-[450px] ">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-2xl w-full  bg-black/15 py-3 px-5 pr-10 border-none outline-0 transition-shadow duration-300 hover:shadow-2xl focus:shadow-2xl"
          placeholder="Search City..."
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl"
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
