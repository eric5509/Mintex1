import Link from "next/link";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function Card() {
  return (
      <div className="flex border-b-2 p-4 pb-6 gap-2">
        <div className="h-40 border-2 w-56"></div>
        <div className="w-full flex flex-col justify-between p-2">
          <div className="flex justify-between w-full">
            <Link
              href={"/details/wdwdd"}
              className="text-17 duration-300 hover:text-blue-500 font-semibold"
            >
              Dreamzzy Donny Jackets
            </Link>
            <p className="text-19 font-semibold">$400</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
            <div className="h-6 w-6 cursor-pointer duration-500 hover:border-[red] hover:text-[red] center border-2 rounded-sm">
                <BiMinus className="stroke-1" />
              </div>
              
              <div className="h-6 w-6  font-semibold center">
                <p className="text-sm">1</p>
              </div>
              
              <div className="h-6 w-6 hover:border-[green] hover:text-[green] cursor-pointer center border-2 duration-500 rounded-sm">
                <BiPlus className="stroke-1" />
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <p className="px-5 py-[10px] rounded-sm active:scale-95 duration-300 hover:scale-105 shadow bg-amber-500 text-white font-semibold cursor-pointer text-11">BUY NOW</p>
              <div className="flex cursor-pointer gap-1 items-center px-5 py-[10px] rounded-sm shadow bg-[red] text-white active:scale-95 duration-300 hover:scale-105 font-semibold text-11">
                <BsTrash className="text-sm"/>
                <p>REMOVE </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
