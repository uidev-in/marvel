import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Showcase() {
  return (
    <>
      <section className=" bg-primary-gray">
        {/* First showcase start */}
        <div className="max-w-7xl mx-auto py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className="order-last lg:order-first px-10 lg:py-10">
             
              <p
                className={` ${poppins.className} font-normal text-2xl lg:text-3xl mb-5 text-center lg:text-start`}
              >
               Showcase you app in our integrations directory
              </p>

              <p
                className={`${poppins.className} font-normal lg:text-xl text-secondary-gray mb-5 max-w-lg text-center lg:text-start`}
              >
              Building something special? We're always looking to work with partners who wants to help the 
              world bring their ideas to life.
              </p>
              <div className="my-8 max-w-xl flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-2">
                  <button
                    className={`${poppins.className} bg-white font-medium  text-black text-sm   lg:text-base px-3 lg:px-7 py-3 rounded-full`}
                  >
                    Become a partner
                  </button>
                  <button
                    className={`${poppins.className} bg-transparent font-medium  border text-sm lg:text-base px-3 lg:px-7 py-3 rounded-full`}
                  >
                    View Integrations
                  </button>
                </div>
            </div>
            <div className="px-7 order-first lg:order-last">
              <img
                className="object-cover"
                src='./showcase.png'
                width={560}
                height={460}
                alt="showcase"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        {/* second showcase start */}
        <div className="max-w-7xl mx-auto py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className="px-7 ">
              <img
                className="object-cover"
                src='./botbot.png'
                width={560}
                height={460}
                alt="showcase"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="px-10 lg:py-10">
             
              <p
                className={` ${poppins.className} font-normal text-2xl lg:text-3xl mb-5 text-center lg:text-start`}
              >
              A Slack-bot for creating and mananging prototypes
              </p>

              <p
                className={`${poppins.className} font-normal lg:text-xl text-secondary-gray mb-5 max-w-lg text-center lg:text-start`}
              >
              Building something special? We're always looking to work with partners who wants to help the 
              world bring their ideas to life.
              </p>
              <div className="my-8 max-w-xl flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-2">
                  <button
                    className={`${poppins.className} bg-white font-medium  text-black text-sm   lg:text-base px-3 lg:px-7 py-3 rounded-full`}
                  >
                    Become a partner
                  </button>
                  <button
                    className={`${poppins.className} bg-transparent font-medium  border text-sm lg:text-base px-3 lg:px-7 py-3 rounded-full`}
                  >
                    View Integrations
                  </button>
                </div>
            </div>
           
          </div>
        </div>

      </section>
    </>
  );
}
