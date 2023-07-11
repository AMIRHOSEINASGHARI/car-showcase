"use client";

import React, { useState } from "react";
// Components
import { Combobox } from "@headlessui/react";
import Image from "next/image";
// Constants
import { manufacturers } from "@/constants";

const SearchManufacturer = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((car) => {
          return car.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="flex rounded-lg bg-gray-100 py-3 px-5 mb-2">
          <Combobox.Button className="mr-2">
            <Image src="/car-logo.svg" alt="car logo" width={20} height={20} />
          </Combobox.Button>
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            className="combobox-input w-full"
            placeholder="Volkswagen"
          />
        </div>
        <Combobox.Options className="shadow-xl shadow-slate-200 rounded-lg space-y-1 max-h-[300px] overflow-y-scroll">
          {filteredManufacturers.length === 0 && query !== "" ? (
            <Combobox.Option
              value={query}
              className="combobox-option text-red-500"
            >
              Nothing Found!
            </Combobox.Option>
          ) : (
            filteredManufacturers.map((car) => (
              <React.Fragment key={car}>
                <Combobox.Option value={car} className="combobox-option">
                  {car}
                </Combobox.Option>
              </React.Fragment>
            ))
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
