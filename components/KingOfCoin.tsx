"use client";
import { BsDot } from "react-icons/bs";

export default function KingOfCoin() {
 

  return (
    <div className="bg-primary w-fit p-3 rounded-3xl gap-3 shadow-md flex">
      <div className="bg-black/10 bg-opacity-50 p-3 rounded-3xl">
        <div className="flex text-white flex-col gap-1 mb-1">
          <p className="flex items-center gap-1">
            <span className="font-semibold text-xs">$Space</span>
            <span className="text-xs">created by</span>
            <BsDot />
            <span className="font-semibold text-xs">UGnxf</span>
          </p>
          <p>
            <span>Market Cap</span>
            <span>-</span>
            <span>11.5k</span>
          </p>
          <p>Space Man (#Space)</p>
        </div>
        <div className="flex text-white gap-2">
          <img src="/img.png" className="rounded-xl" alt="" />
          <div className="h-[65px] p-2 flex flex-col justify-between bg-black/10 bg-opacity-100 rounded-xl">
            <div className="flex gap-1">
              <img src="/comment.svg" alt="" />
              <p>61</p>
            </div>
            <div className="flex gap-1">
              <img src="/like.svg" alt="" />
              <p className="text-[#F4245E]">6.2k</p>
            </div>
          </div>
        </div>
      </div>
      <img src="/king.svg" alt="" />
    </div>
  );
}
