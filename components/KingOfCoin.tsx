import { BsDot } from "react-icons/bs";

export default function KingOfCoin() {
  return (
    <div className="bg-primary w-fit p-3 rounded-xl shadow-md flex">
      <div className="bg-[rgba(0, 0, 0, 0.06)]">
        <div className="flex flex-col gap-1 mb-1">
          <p className="flex items-center gap-1">
            <span className="text-11">$Space</span>
            <span className="text-10">created by</span>
            <BsDot />
            <span className="text-11">UGnxf</span>
          </p>
          <p>
            <span>Market Cap</span>
            <span>-</span>
            <span>11.5k</span>
          </p>
          <p>Space Man (#Space)</p>
        </div>
        <div className="flex gap-1">
          <img src="/img.png" className="rounded-xl" alt="" />
          <div className="h-[65px] p-1 flex flex-col justify-between bg-green-50 rounded-xl">
            <div className="flex">
              <img src="/comment.svg" alt="" />
              <p>61</p>
            </div>
            <div className="flex">
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
