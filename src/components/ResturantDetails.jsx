import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
const Hero = () => {
  return (
    <>
      <section className="bg-[url('/details-hero-bg.png')] bg-no-repeat bg-cover bg-center w-full mb-24">
        <div className="bg-[url('/gray.png')] bg-no-repeat bg-cover bg-center w-full mb-24 py-8 md:py-16 px-6 md:px-10">
          <div className="space-y-3 md:space-y-5">
            <h1 className="font-lexend font-semibold text-3xl sm:text-5xl md:text-[52px] leading-10 sm:leading-[52px] md:leading-[65px] text-white">
              Bella italia
            </h1>
            <div className="flex gap-2 items-center">
              {Array.from(Array(5).keys()).map((el) => (
                <img key={el} src="/star.png" alt="" />
              ))}
              <div>
                <p className="font-roboto font-semibold text-[19px] leading-[22px] text-white">
                  5.0 <span>(834 reviews)</span>
                </p>
              </div>
            </div>
            <p className="font-roboto text-[19px] leading-[22px] text-white max-w-lg pt-8">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout. The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
            <div className="space-y-7 pt-12 sm:pb-0 pb-16">
              <p className="text-white flex gap-2 items-center">
                <CiLocationOn />
                Singapour, Bishan-Ang Mo Kio Park{" "}
              </p>
              <p className="text-white flex gap-2 items-center">
                <FiClock />
                7j/7, 08:00 - 22:00
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center -mt-40">
        <img src="/details-hero-logo.png" alt="" />
      </div>
    </>
  );
};

function ResturantDetails() {
  return(
    <>
        <Hero/>
    </>
  )
}

export default ResturantDetails;
