"use client";

// React Imports
import { Fragment, useState } from "react";

// NextJS Imports
import Image from "next/image";

// React Icons Imports
import { IoMdClose } from "react-icons/io";

// Headless UI Imports
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

const CarDetails = ({ car, isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[500px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="flex flex-col items-center justify-center">
                    <div className="bg-blue-600 mb-3 w-full rounded-2xl flex justify-center p-4">
                      <Image
                        src={generateCarImageUrl(car, "angle")}
                        width={210}
                        height={210}
                        alt="car"
                      />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div className="bg-gray-100 flex flex-1 items-center justify-center flex-col rounded-2xl p-2 md:p-4">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          width={120}
                          height={120}
                          alt="car"
                        />
                      </div>
                      <div className="bg-gray-100 flex flex-1 items-center justify-center flex-col rounded-2xl p-2 md:p-4">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          width={120}
                          height={120}
                          alt="car"
                        />
                      </div>
                      <div className="bg-gray-100 flex flex-1 items-center justify-center flex-col rounded-2xl p-2 md:p-4">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          width={120}
                          height={120}
                          alt="car"
                        />
                      </div>
                    </div>
                  </Dialog.Title>
                  <Dialog.Title className="my-3">
                    <h1 className="text-xl font-bold capitalize mb-2">
                      {car.make} {car.model}
                    </h1>
                    <hr />
                  </Dialog.Title>
                  <div className="mt-2 text-sm capitalize space-y-1">
                    {Object.entries(car).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <p className="text-gray-400 font-light">
                          {key.split("_").join(" ")}
                        </p>
                        <p className="font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 right-0 text-xl bg-white rounded-full w-12 h-12 flex items-center justify-center"
                    onClick={closeModal}
                  >
                    <IoMdClose />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
