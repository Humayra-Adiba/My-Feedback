import React, { useEffect, useState } from "react";
import { Button } from "../ReuseableComponent/Button";
import Card from "../ReuseableComponent/Card";

function Trends() {
  const [dataFetch, setDataFetch] = useState([]);
  useEffect(() => {
    fetch("./JSON/Trends.json")
      .then((res) => {
        return res.json();
      })
      .then((datavalue) => {
        setDataFetch(datavalue);
      });
  });
  return (
    <section className="w-[96%] mx-auto my-12 md:my-24">
      <div>
        <h1 className="font-extrabold text-2xl sm:text-heading sm:leading-10 leading-6 text-EerieBlack1E my-6">
          The latest trends
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-8">
          {dataFetch.map((items) => (
            <Card key={items.id} items={items} />
          ))}
        </div>
        <div className="my-12">
          <h4 className="text-[22px] sm:text-[22px] leading-7 text-center">
            Discover more cool restaurants
          </h4>
          <div className="flex justify-center mt-5">
            <Button className="bg-[#1677BD]">Show more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trends;
