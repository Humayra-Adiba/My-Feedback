import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { Button } from "./ReuseableComponent/Button";

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

const MagnificentPlaces = () => {
    return (
      <section className="w-[80%] mx-auto my-24">
        <div>
          <h1 className=" font-semibold text-[34px] leading-[42px] md:text-start text-center ">
            Discover our magnificent place in photos
          </h1>
          <p className="font-roboto text-base leading-[18px] text-[#5E5E5E] my-5 max-w-lg">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.The lorem ipsum is, in printing.
          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-6 my-16">
            <div className="relative">
              <img src="/magnificent1.png" alt="" className="cursor-pointer" />
              <div className="absolute bottom-5 left-5">
                <Button className="bg-white text-black flex gap-3 items-center">
                  <img src="/grid.png" alt="" />
                  View all photos (7)
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <img src="/magnificent2.png" alt="" className="cursor-pointer" />
              <img src="/magnificent3.png" alt="" className="cursor-pointer" />
            </div>
            <div className="space-y-4">
              <img src="/magnificent4.png" alt="" className="cursor-pointer" />
              <img src="/magnificent5.png" alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    );
  };

function ResturantDetails() {
  return(
    <>
        <Hero/>
        <MagnificentPlaces/>
    </>
  )
}

export default ResturantDetails;
