import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Hero() {
  return (
    <section className="py-20 bg-primary-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className="px-5 lg:10">
            <div className="flex justify-between lg:min-h-[448px]">
              <div className="py-6 md:py-12">
                <h1 className="px-2 text-center lg:max-w-3xl lg:text-start font-semibold text-2xl lg:text-6xl">
                  Let build the future of design, now.
                </h1>
                <p className="text-md mt-4 text-center text-sm text-secondary-gray lg:block lg:text-start lg:pl-3  lg:max-w-lg">
                  Create amazing tools and integrations for 1 million users or
                  customize Marvel for your team.
                </p>
                <div className="my-8 max-w-xl flex gap-2">
                  <button
                    className={`${poppins.className} bg-primary-blue font-medium text-base px-5 lg:px-7 py-3 rounded-full`}
                  >
                    Submit your app
                  </button>
                  <button
                    className={`${poppins.className} bg-white font-medium text-black text-base px-5 lg:px-7 py-3 rounded-full`}
                  >
                    View API Docs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-7">
            <img
              className="object-cover"
              src="/hero.png"
              width={560}
              height={460}
              alt="hero"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
