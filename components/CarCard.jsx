"use client";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from ".";
import CarDetails from "./CarDetails";

const CarCard = ({ car }) => {
  // Props
  const { city_mpg, drive, make, model, transmission, year } = car;

  // Car Details Showing
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div>
        <h1 className="capitalize mb-5 font-semibold text-lg">
          {make.toUpperCase()} {model}
        </h1>
        <p className="flex mb-5 font-bold text-2xl">
          <span className="self-start text-xs font-normal">$</span>
          {calculateCarRent(city_mpg, year)}
          <span className="self-end text-xs font-normal">/day</span>
        </p>
      </div>
      <div className="w-full flex items-center justify-center mb-5">
        <Image
          src={generateCarImageUrl(car, "angle")}
          width={250}
          height={250}
        />
      </div>
      <div>
        <div className="relative">
          <div className="group-hover:invisible flex items-center justify-between">
            <div className="flex flex-col items-center">
              <Image
                src="/steering-wheel.svg"
                alt="steering wheel"
                width={20}
                height={20}
                className="mb-1"
              />
              <p className="text-xs">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/tire.svg"
                alt="tire"
                width={20}
                height={20}
                className="mb-1"
              />
              <p className="text-xs">{drive?.toUpperCase()}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/gas.svg"
                alt="gas"
                width={20}
                height={20}
                className="mb-1"
              />
              <p className="text-xs">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="absolute w-full top-0 hidden group-hover:block">
            <CustomButton
              title="View Details"
              containerStyles="bg-primary-blue rounded-full w-full text-white text-sm font-semibold"
              handleClick={() => {
                setIsOpen(true);
              }}
              rightIcon="/right-arrow.svg"
            />
          </div>
        </div>
      </div>
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
