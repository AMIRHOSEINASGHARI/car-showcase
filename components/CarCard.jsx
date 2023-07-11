"use client";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React from "react";
import { CustomButton } from ".";

const CarCard = ({ car }) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  console.log(car);
  return (
    <div className="car-card group">
      <h1 className="capitalize mb-5 font-semibold text-lg">
        {make} {model}
      </h1>
      <p className="flex mb-5 font-bold text-2xl">
        <span className="self-start text-xs font-normal">$</span>
        {calculateCarRent(city_mpg, year)}
        <span className="self-end text-xs font-normal">/day</span>
      </p>
      <div className="w-full flex items-center justify-center mb-5">
        <Image src="/hero-car.png" width={250} height={250} />
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
              <p className="text-xs">{drive.toUpperCase()}</p>
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
              handleClick={() => {}}
              rightIcon="/right-arrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
