import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FirstCarousel() {
 const settings = {
   dots: true,
   infinite: true,
   speed: 1000,
   slidesToShow: 4,
   slidesToScroll: 4,
   autoplay: true,
   autoplaySpeed: 2000,
   focusOnSelect: true,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
  };
  const [data,setData]=useState([])
  useEffect(() => {
    fetch('./JSON/Slider.json').then((res) => {
      return res.json()
    }).then((data) => {
      setData(data)
    })
  })
  
  return (
    <div className="bg-[#1677BD] p-8 w-[95%] mx-auto rounded-md">
      <h1 className="font-lexend text-[32px] leading-10 text-white mb-5">
        Find the best restaurant ratings below
      </h1>
      <Slider {...settings}>
        {data.map((sliders, i) => (
          <div key={i}>
            <div>
              <img
                src={sliders.image}
                alt=""
                className={"w-[285px] h-[213px]"}
              />
              <div className="space-y-2 w-[285px] p-2 bg-white rounded-lg -mt-5">
                <h1
                  className={
                    "font-semibold font-roboto text-[19px] text-EerieBlack leading-5 mt-6"
                  }
                >
                  {sliders.title}
                </h1>
                <p
                  className={
                    "text-secondary-PhilippineGray font-roboto text-sm leading-4 w-[80%]"
                  }
                >
                  {sliders.des}
                </p>
                <div className="flex justify-start items-center gap-3">
                  {Array.from(Array(sliders.rating).keys()).map((el) => (
                    <img src="/star.png" alt="" key={el} />
                  ))}
                  <p
                    className={
                      "font-roboto font-semibold text-sm leading-4 text-EerieBlack"
                    }
                  >
                    {sliders.rating}
                  </p>
                  <p
                    className={
                      "font-roboto font-semibold text-sm leading-4 text-[#7A7A7A]"
                    }
                  >
                    {sliders.totalReviews}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default FirstCarousel