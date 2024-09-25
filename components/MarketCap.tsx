import { BsChat, BsDot, BsHeart } from "react-icons/bs";

export default function MarketCap() {
  return (
    <div className="flex gap-3">
      <div className="h-[67px] w-[78px] rounded-xl border-2"></div>
      <div className="flex-1 relative flex flex-col justify-between">
        <div className=""></div>
        <div className="flex flex-1 justify-between items-center">
          <p className="text-base font-semibold">Space Man (#Space)</p>
          <p className="text-sm">Market Cap - 11.5k</p>
          <div className="flex items-center gap-4">
            <div className="flex px-3 py-2 rounded-3xl bg-gray-200 items-center w-fit gap-3">
              <p>Creator</p>
              <BsDot />
              <img src="/logo.svg" alt="" />
              <p className="font-semibold">UGnfx</p>
            </div>
            <img src="/star.svg" className="h-5" alt="" />
          </div>
        </div>
        <div className="flex absolute left-0 bottom-0 gap-7 items-center">
          <div className="flex cursor-pointer items-center gap-2">
            <BsChat size={12}/>
            <p className="text-xs">61</p>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <BsHeart size={12}/>
            <p className="text-xs">35</p>
          </div>
        </div>
      </div>
    </div>
  );
}
