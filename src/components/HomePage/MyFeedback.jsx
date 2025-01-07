import React from 'react'
import { Button } from '../ReuseableComponent/Button';

function MyFeedback() {
        return (
          <section className="bg-[#F2F2F2]">
            <div className="flex flex-col lg:flex-row justify-around items-center px-12 py-4 gap-1">
              {/* left side */}
              <div className="p-5 w-[400px] h-[400px]">
                <h1 className="font-bold lg:text-[26px] text-[23px] font-roboto">
                  MyFeedback for Business has resources to help you plan, start,
                  grow, and advertise your small business
                </h1>
                <p className="text-[#5E5E5E] text-[16px] font-roboto py-5 md:py-10">
                  The lorem ipsum is, in printing, a series of meaningless words
                  used temporarily to calibrate a layout.
                </p>
                <Button>Explore MyFeedback business</Button>
              </div>
              {/* right side */}
              <div className="p-5">
                <img src="/feedback.png" alt="Images" />
              </div>
            </div>
          </section>
        );
}

export default MyFeedback