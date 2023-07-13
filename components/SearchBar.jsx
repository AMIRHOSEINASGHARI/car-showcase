"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

// Search Button
const SearchButton = ({ otherClasses }) => (
  <button
    type="submit"
    className={`absolute top-0 bottom-0 right-2 ${otherClasses}`}
  >
    <Image src="/magnifying-glass.svg" width={30} height={30} alt="search" />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ model, manufacturer });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row space-y-3 md:space-y-0 w-full relative md:rounded-xl md:bg-gray-100"
    >
      <div className="w-full relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="md:hidden" />
      </div>
      <div className="flex rounded-lg bg-gray-100 py-3 px-5 md:px-2 w-full relative">
        <Image
          className="mr-2"
          src="/model-icon.png"
          width={20}
          height={20}
          alt="model"
        />
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model ..."
          type="text"
          className="bg-transparent text-sm text-gray-600 outline-none placeholder:text-sm"
        />
        <SearchButton otherClasses="md:hidden" />
      </div>
      <SearchButton otherClasses="hidden md:flex top-1.5 bottom-0" />
    </form>
  );
};

export default SearchBar;
