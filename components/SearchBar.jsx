"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    </form>
  );
};

export default SearchBar;
