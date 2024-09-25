"use client";
import { useState } from "react";

export default function LimitMarket() {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  return (
    <div>
      <p className="text-base font-semibold mb-4">Trade</p>
      <div className="bg-gray-300 h-12 flex w-52 rounded-xl ">
        <p
          onClick={() => setActive(0)}
          className={`rounded-xl duration-300 grid place-content-center flex-1 active:scale-95 cursor-pointer ${
            active === 0
              ? "bg-primary text-white"
              : "text-primary bg-transparent"
          } `}
        >
          Buy
        </p>
        <p
          onClick={() => setActive(1)}
          className={`rounded-xl duration-300 grid place-content-center  active:scale-95 cursor-pointer flex-1 ${
            active === 1
              ? "bg-[#F23645] text-white"
              : "bg-transparent text-[#F23645]"
          } `}
        >
          Sell
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-15 gap-3">
        <p onClick={() => setActive2(0)} className={`py-2 text-[#7D8FB3] font-semibold px-3 duration-300 cursor-pointer border-b-2 ${active2 == 0 ? "border-primary " : " border-transparent"}`}>Limit</p>
        <p onClick={() => setActive2(1)} className={`py-2 text-[#7D8FB3] font-semibold px-3 prborder-primary cursor-pointer border-b-2 ${active2 == 1 ? "border-primary " : " border-transparent"}`}>Market</p>
        </div>
        <div className="">
          <p className="flex gap-1 text-subText items-center">
            Avail. Balance (TON) <img src="/recycle.svg" className="stroke-[#1E4F70] stroke-2 h-4" alt="" />
          </p>
          <p className="text-end">5.8</p>
        </div>
      </div>
    </div>
  );
}
