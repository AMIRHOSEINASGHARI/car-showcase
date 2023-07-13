"use client";

// React and Next Imports
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// HeadlessUI Imports
import { Listbox, Transition } from "@headlessui/react";
// React Icons Imports
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CustomFilter = ({ options, title }) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const updateSearchParams = ({ value }) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(title, value.toLowerCase());

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateSearchParams(e);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="custom-filter-btn">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ml-4">
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                alt="chevron"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter-options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-700" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <IoMdCheckmarkCircleOutline
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
