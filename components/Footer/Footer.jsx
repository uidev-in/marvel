"use client";

import { Poppins } from "next/font/google";
import {
  overview,features,support,marvel,follow
} from "@/constant/footer.constant";
import { Marvel } from "../Icons/Marvel";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

function Footer() {


  return (
    <footer className="py-5 lg:py-20 bg-black border-t border-primary-green">
      {/* desktop footer */}
      <section className="max-w-7xl mx-auto px-5 hidden md:flex">
        <div className="w-[150px] lg:w-[250px] flex justify-center">
          <a href="/" aria-label="Marvel">
          <Marvel className={"w-24"} fill="#fff"/>
          </a>
        </div>
        <div className=" pl-5 lg:w-full md:flex lg:flex-wrap justify-evenly lg:-mt-3">
          <ul>
            <span  className="block pb-3">Overview</span>
            {overview.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Features</span>
            {features.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Support</span>
            {support.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Marvel</span>
            {marvel.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Follow</span>
            {follow.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      
      </section>


      {/* mobile footer */}
      <section className="px-10 md:hidden">
        <div className="mb-10">
          <a href="/" aria-label="Marvel">
          <Marvel className={"w-24"} fill="#fff"/>
          </a>
        </div>
        
        <div className="flex flex-wrap gap-10">
          <ul>
            <span  className="block pb-3">Overview</span>
            {overview.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-xs`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Features</span>
            {features.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-xs`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Support</span>
            {support.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-xs`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Marvel</span>
            {marvel.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-xs`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="">
          <span className="block pb-3">Follow</span>
            {follow.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-2 text-secondary-gray text-xs`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      
      </section>
    </footer>
  );
}

export default Footer;
