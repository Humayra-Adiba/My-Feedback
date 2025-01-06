import React from "react";
import Footer from './Footer'
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { Button } from "./ReuseableComponent/Button";
import { cn } from "../lib/utils";
import { RxCross2 } from "react-icons/rx";
import { LuUserRound } from "react-icons/lu";
import { useState, useEffect } from "react";
import SortCard from "./ReuseableComponent/Sort";
import Card from "./ReuseableComponent/Card";


const Progress = ({ max }) => {
  return (
    <div className="w-[200px] sm:w-[240px] md:w-[270px] lg:w-[380px] h-2 bg-gray-400 rounded-md">
      <div className={cn("bg-[#1677BD] h-2 rounded-md ", max)}></div>
    </div>
  );
};


const FilterCard = ({ handleOpen, filteredItems }) => {
  return (
    <div className="bg-white shadow-md p-8 rounded-md border border-[#E6E6E6] relative flex flex-col items-center gap-5 w-fit">
      <div className="absolute top-2 right-2">
        <button type="button" onClick={handleOpen}>
          <RxCross2 />
        </button>
      </div>
      <h1 className="font-roboto font-bold text-[22px] leading-6 text-EerieBlack text-center">
        Filter by Rating
      </h1>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3 "
        onClick={() => filteredItems(5)}
      >
        5
        {Array.from(Array(5).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(4)}
      >
        4
        {Array.from(Array(4).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(3)}
      >
        3
        {Array.from(Array(3).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(2)}
      >
        2
        {Array.from(Array(2).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(1)}
      >
        1
        {Array.from(Array(1).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
    </div>
  );
};

const ReviewCard = ({ items }) => {
  return (
    <div className="flex items-start gap-2 w-full p-4 rounded-2xl bg-[#F8F8F8]">
      <div className="bg-gray-100 rounded-full p-1">
        <LuUserRound className="h-8 w-8" />
      </div>
      <div className="space-y-3">
        <h1 className="font-roboto font-semibold text-[21px] leading-6 text-EerieBlack">
          {items.name}
        </h1>
        <p className="font-roboto text-base leading-5 text-[#BABABA]">
          {items.location}
        </p>
        <div className="flex items-end gap-2">
          {Array.from(Array(items.star).keys()).map((el) => (
            <img src="/star.png" alt="" key={el} />
          ))}
          <p className="font-roboto text-sm leading-4 text-[#343434]">
            {items.date}
          </p>
        </div>
        <p className="font-roboto text-base leading-[18px] w-full sm:max-w-md text-[#5E5E5E] pt-4">
          {items.des}
        </p>
      </div>
    </div>
  );
};

const Discover = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/JSON/Discover.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  }, []);
  return (
    <section className="w-[80%] mx-auto my-16">
      <div>
        <h1 className="font-lexend font-extrabold text-xl sm:text-heading leading-6 sm:leading-10 text-EerieBlack1E">
          Also discover...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {data.map((item, i) => (
            <Card key={i} items={item} />
          ))}
        </div>
      </div>
    </section>
  );
};


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

const MoreInformations = () => {
  const socialIcons = [
    {
      src: "/fb.png",
    },
    {
      src: "/instra.png",
    },
    {
      src: "/tiktok.png",
    },
    {
      src: "/wp.png",
    },
  ];

  return (
    <>
      <section className="w-[80%] mx-auto mt-12 sm:mt-24 mb-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 ">
          <div className="space-y-12">
            <h1 className="font-lexend font-semibold text-xl sm:text-[34px]  leading-7 sm:leading-[42px]">
              More informations
            </h1>
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <img src="/spon.png" alt="" />
                <button className="border-b border-gray-800 font-roboto text-xl leading-6 text-EerieBlack">
                  See the menu
                </button>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/call.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  +847 87 37 29 01
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/location.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  Singapour, Bishan
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/clock.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  7j/7, 08:00 - 22:00
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/link.png" alt="" />
                <a
                  href="#"
                  className="border-b border-gray-800 font-roboto text-xl leading-6 text-EerieBlack"
                >
                  www.bellaitalia.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#">
                  <img src={icon.src} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <img src="/secondMap.png" alt="" />
          </div>
        </div>
      </section>
      <hr className="w-full h-[1px] bg-[#DCDCDC]" />
    </>
  );
};

const OverAllRating = () => {
  return (
    <section className="w-[80%] mx-auto my-16 space-y-3">
      <div className="flex flex-col sm:flex-row justify-start gap-16 items-start ">
        <div className="flex items-start justify-center gap-4">
          <div>
            <img src="/ratingbadge.png" alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="font-roboto font-bold text-xl sm:text-heading  leading-6 sm:leading-9 text-EerieBlack">
              Overall rating
            </h1>
            <p className="font-roboto text-[19px] leading-[22px] text-[#838383]">
              834 Reviews
            </p>
            <div className="flex items-center gap-3">
              {Array.from(Array(5).keys()).map((el) => (
                <img src="/star.png" alt="" key={el} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p>5 star</p>
            <Progress max="w-[100%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>4 star</p>
            <Progress max="w-[70%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>3 star</p>
            <Progress max="w-[50%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>2 star</p>
            <Progress max="w-[30%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>1 star</p>
            <Progress max="w-[10%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {

  const review = [
    {
      name: "Wei Jie",
      location: "Singapore, Little india",
      date: "29/11/2023",
      star: 5,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Mei Ling",
      location: "Singapore, Orchad boulevard",
      date: "09/05/2023",
      star: 3,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Wei Xiong",
      location: "Singapore, Takashimaya",
      date: "01/05/2023",
      star: 4,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Ming Wei",
      location: "Singapore, Little india",
      date: "31/04/2023",
      star: 3,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Xin Yi",
      location: "Singapore, Zen rooms",
      date: "30/04/2023",
      star: 2,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Zhi Hao",
      location: "Singapore, Boon Keng",
      date: "27/03/2023",
      star: 5,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Li Hua",
      location: "Singapore, DLLM loklok",
      date: "24/03/2023",
      star: 1,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Si Ying",
      location: "Singapore, Bedemeer",
      date: "11/03/2023",
      star: 5,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Wei Ting",
      location: "Singapore, Toa Payoh",
      date: "28/02/2023",
      star: 5,
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [data, setData] = useState(review);
  const handleOpenFilter = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenSort = () => {
    setIsOpenSort(!isOpenSort);
  };
  const filteredItems = (rating) => {
    const fil = [...review].filter((el) => el.star === rating);
    return setData(fil);
  };
  const sortByRatingHighToLow = () => {
    const sorted = [...review].sort((a, b) => b.star - a.star);
    setData(sorted);
  };
  const sortByRatingLowToHigh = () => {
    const sorted = [...review].sort((a, b) => a.star - b.star);
    setData(sorted);
  };
  const defaultSort = () => {
    setData(review);
  };
  return (
    <>
      <hr className="w-full h-[1px] bg-[#D3D3D3]" />
      <section className="w-[80%] mx-auto my-16">
        <div className="flex gap-8 items-center">
          <button
            className="bg-white text-EerieBlack border border-EerieBlack hover:bg-gray-300 px-6 py-2 rounded-full flex items-center gap-2"
            onClick={handleOpenFilter}
          >
            <img src="/filter.png" alt="" /> filter
          </button>
          <button
            className="bg-white text-EerieBlack border border-EerieBlack hover:bg-gray-300 px-6 py-2 rounded-full flex items-center gap-2"
            onClick={handleOpenSort}
          >
            <img src="/sort.png" alt="" /> Sort
          </button>
        </div>
        <div>
          {isOpen ? (
            <FilterCard
              handleOpen={handleOpenFilter}
              filteredItems={filteredItems}
            />
          ) : null}
        </div>
        <div>
          {isOpenSort ? (
            <SortCard
              handleOpen={handleOpenSort}
              sortedhightolow={sortByRatingHighToLow}
              sortByRatinglowtohigh={sortByRatingLowToHigh}
              defaultSort={defaultSort}
            />
          ) : null}
        </div>
        <div className="mt-8 space-y-3">
          {data.map((items, i) => (
            <ReviewCard key={i} items={items} />
          ))}
        </div>
        <div className="flex justify-center my-16">
          <Button className="bg-[#1677BD]">Show more reviews</Button>
        </div>
      </section>
    </>
  );
};



function ResturantDetails() {
  return (
    <>
      <Hero />
      <MagnificentPlaces />
      <MoreInformations />
      <OverAllRating/>
      <Reviews/>
      <Discover/>
      <Footer/>
    </>
  );
}

export default ResturantDetails;
