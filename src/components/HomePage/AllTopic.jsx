import React from 'react'
import { NavLink } from "react-router-dom";


function AllTopic() {
  return (
    <section className="p-8">
      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 grid-cols-2 items-center justify-items-center sm:gap-0 gap-7 text-secondary-PhilippineGray">
        <div className="flex flex-col items-center">
          <img src="/all.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            All
          </p>
        </div>
        <div className="flex flex-col items-center">
          <NavLink to='/'>
            <img src="/restuarant.png" alt="" />
            <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
              Restaurants
            </p>
          </NavLink>
        </div>
        <div className="flex flex-col items-center">
          <img src="/hotel.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Hotels
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/home.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Home services
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/shopping.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Shopping
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/car.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Car location
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/spa.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Beauty & Spa
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/park.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Park
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/mesuem.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            museum
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/carwash.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Car wash
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/bars.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Bars
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/gyms.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4 p-2">
            Gyms
          </p>
        </div>
      </div>
    </section>
  );
}

export default AllTopic