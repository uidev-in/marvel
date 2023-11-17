import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function Features({ data }) {
  return (
    <>
      <section className="py-10 bg-primary-gray ">
        <div className="max-w-sm lg:max-w-2xl mx-auto ">

        <div className="grid grid-cols-1 gap-5 lg:gap-10 text-center px-5">
            <h3
              className={` ${poppins.className} font-semibold text-xl lg:text-4xl `}
            >
              Experience the freedom to build features, right away.
            </h3>
            <p
              className={` ${poppins.className} font-normal text-sm lg:text-sm text-secondary-gray`}
            >
             You can now harness components of our platform and build powerful integrations for our 2 million user - or simplify just for your team.
            </p>

          </div>
        </div>

        <div className="lg:max-w-7xl mx-auto ">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5 m-5">
            {data?.map((item, idx) => (
              <div
                className="p-10  card flex flex-col w-full md:w-auto"
                key={item.id}
              >
                <div className="mb-5 flex justify-center ">
                  <img src={item.icon.src} className="objec-fit"/>
                </div>
                <div className="">
                  <p
                    className={` ${poppins.className} font-semibold  text-center text-2xl mb-5`}
                  >
                    {item?.title}
                  </p>

                  <p
                    className={`${poppins.className} font-normal text-sm text-secondary-gray mb-5 max-w-lg text-center`}
                  >
                    {item?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
