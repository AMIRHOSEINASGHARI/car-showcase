// Next Imports
import Image from "next/image";
import Link from "next/link";
// Constants Imports
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="border border-gray-200 mt-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between p-6 lg:my-16">
          {/* footer logo */}
          <div className="mr-10">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={20}
              className="mb-2"
            />
            <p className="text-xs text-black-100">
              Carhub 2023 <br /> All Rights Reserved &copy;
            </p>
          </div>

          {/* footer links */}
          <div className="flex flex-wrap justify-end flex-1 gap-10 md:gap-20 lg:gap-32">
            {footerLinks.map((item) => (
              <div key={item.title} className="flex-1 md:flex-none">
                <h1 className="font-semibold text-[15px] mb-5">{item.title}</h1>
                <div className="flex flex-col text-sm text-gray-400 gap-5">
                  {item.links.map((link) => (
                    <Link href={link.url}>{link.title}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* footer privacy policy */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 lg:px-16 lg:mt-16 text-xs md:text-base">
          <p className="mb-5 md:m-0 text-center">
            @2023 CarHub. All Rights Reserved
          </p>
          <div className="flex flex-col md:flex-row gap-6 text-gray-500">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
