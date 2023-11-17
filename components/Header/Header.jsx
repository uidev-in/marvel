"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { Marvel } from "../Icons/Marvel";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const expandNav = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (opened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [opened]);

  return (
    <>
      <header className="bg-primary-gray text-secondary-gray z-[99] sticky top-0">
        <div className="max-w-7xl w-full mx-auto hidden md:flex items-center justify-between px-4 py-4">
          <Link href="/">
         <div className="flex justify-centerce gap-1 text-white">
          <Marvel className={" w-16"}/>| Developer
         </div>
          </Link>
          <nav>
            <ul className="flex gap-6 items-center">
            <li className="relative group">
            <Link
                  href="/"
                  className={`${poppins.className} transition-all relative flex items-center font-medium text-sm px-1`}
                >
                  Why Marvel
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="7"
                    className="ml-2"
                    fill="none"
                  >
                    <path
                      stroke="#7d8896"
                      strokeWidth="2"
                      d="m1 1 4.5 4.5L10 1"
                    />
                  </svg>
                </Link>
                <div className="absolute top-5 bg-primary-gray hidden py-2 group-hover:block px-4 w-48 rounded-sm shadow-md">
                  <ul>
                    <li>
                      <Link href="/" className="py-2 block">
                      Marvel 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/rn" className="py-2 block">
                      Marvel 2
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="py-2 block">
                      Marvel 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li>
              <Link
                  href="/"
                  className={`${poppins.className}  hover:after:bg-primary-blue after:transition-all after:h-[2px] transition-all after:w-full after:absolute after:-bottom-2 after:left-0 relative font-medium text-sm px-1`}
                >
                  Enterprise
                </Link>
              </li>
              <li>
              <Link
                  href="/"
                  className={`${poppins.className}  hover:after:bg-primary-blue after:transition-all after:h-[2px] transition-all after:w-full after:absolute after:-bottom-2 after:left-0 relative font-medium text-sm px-1`}
                >
                  Pricing
                </Link>
              </li>
              <li>
              <Link
                  href="#"
                  className={`${poppins.className}  hover:after:bg-primary-blue after:transition-all after:h-[2px] transition-all after:w-full after:absolute after:-bottom-2 after:left-0 relative font-medium text-sm px-1`}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <button
                  className={`${poppins.className} bg-white hover:bg-primary-blue font-medium text-black text-sm px-5 py-3 rounded-full`}
                >
                  Sign up free
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden px-4 justify-between items-center">
          <Link href="/">
          <div className="flex justify-centerce gap-1 text-white p-3">
          <Marvel className={"w-12"}/>| Developer
         </div>
          </Link>
          <button onClick={toggleMenu} className="cursor-pointer">
            <span
              className={`${
                opened ? "rotate-45 origin-[11px_4px]" : ""
              } transition-all bg-secondary-gray w-[28px] h-[3px] block rounded-sm`}
            ></span>
            <span
              className={`${
                opened ? "hidden" : ""
              } transition-all bg-secondary-gray w-[28px] h-[3px] block rounded-sm my-1.5`}
            ></span>
            <span
              className={`${
                opened ? "-rotate-45 origin-[15px_!px]" : ""
              } transition-all bg-secondary-gray w-[28px] h-[3px] block rounded-sm`}
            ></span>
          </button>
        </div>
      </header>
      <div
        className={`${
          opened ? "-translate-x-full" : ""
        } transition-transform fixed top-[30px] h-[calc(100%-55px)] w-full left-full z-50 bg-primary-gray`}
      >
        <nav className="p-4">
          <ul className="">
          <li>
              <button
                onClick={expandNav}
                className={`${poppins.className}  relative font-medium flex items-center justify-between text-base mb-2 w-full py-4  px-1`}
              >
                Why Marvel{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  className={`${
                    expanded ? "rotate-180" : ""
                  } transition-all origin-center`}
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    strokeWidth="2"
                    d="m1 1 4.5 4.5L10 1"
                  />
                </svg>
              </button>
              <div className={`${expanded ? "" : "hidden"} px-4`}>
                <ul>
                  <li>
                    <Link href="/" className="py-2 block">
                    Marvel 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="py-2 block">
                    Marvel 2
                    </Link>
                  </li>
                  <li>
                  <Link href="/" className="py-2 block">
                    Marvel 2
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </li>
            <li>
            <Link
                href="/"
                className={`${poppins.className}   relative font-medium text-base mb-2 py-4 block px-1`}
              >
                Enterprise
              </Link>
            </li>
            <li>
            <Link
                href="/"
                className={`${poppins.className}  relative font-medium text-base mb-2 py-4 block px-1`}
              >
               Pricing
              </Link>
            </li>
            
            <li>
            <Link
                href="/"
                className={`${poppins.className}  relative font-medium text-base mb-2 py-4 block px-1`}
              >
                Sign In
              </Link>
            </li>
            <li>
              <button
                className={`${poppins.className} mt-4 bg-primary-blue hover:bg-primary-blue/90 font-medium text-white text-base px-7 py-2.5 rounded-full w-full`}
              >
                Sign Up free
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
