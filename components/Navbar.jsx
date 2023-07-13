// Next Imports
import Image from "next/image";
import Link from "next/link";
// Components Imports
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between max-w-[1440px] mx-auto py-5 px-6 xl:pr-0">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={120} height={50} />
      </Link>
      <div>
        <CustomButton
          title="Sign In"
          containerStyles="border-primary-blue border text-primary-blue rounded-full font-bold"
        />
      </div>
    </header>
  );
};

export default Navbar;
