"use client";

// React and Next Imports
import React from "react";
import { useRouter } from "next/navigation";
// Components Imports
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleLimit = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const newLimit = (pageNumber + 1) * 10;

    searchParams.set("limit", newLimit);

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };
  return (
    <div className="flex justify-center my-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleLimit}
        />
      )}
    </div>
  );
};

export default ShowMore;
