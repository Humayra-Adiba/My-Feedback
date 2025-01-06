import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

import { Button } from "./ReuseableComponent/Button";


const Navbar = () => {

  return (
    <section className="border-b border-[#ADADAD]">
      <div className="flex md:flex-row flex-col justify-around items-center gap-3 md:gap-6 py-4 md:py-6">
        <div>
          <NavLink to="/">
            <img src="/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-2 border border-[#ADADAD] px-4 py-1 rounded-full">
          <select
            className="text-secondary-PhilippineGray border-none outline-none"
          >
            <option className="text-secondary-PhilippineGray">selected</option>
            <option value="restaurant">restaurant</option>
          </select>
          <hr className="bg-[#ADADAD] w-[1px] h-6 rotate-180" />
          <select
            className="text-secondary-PhilippineGray border-none outline-none"
          >
            <option className="text-[#7A7A7A]">
              select the country
            </option>
            <option value="singapour" className="text-[#7A7A7A]">
              singapour
            </option>
          </select>
          <button
            type="button"
            className="bg-primary rounded-full"
          >
            <CiSearch className="w-10 h-10 bg-[#1677BD] text-white rounded-full p-2" />
          </button>
        </div>
        <div className="flex  items-center gap-3 ">
          <TbWorld className="h-6 w-6 " />
          <Button>MyFeedback for business</Button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Navbar;
