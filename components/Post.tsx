import { BsChat, BsDot, BsHeart, BsMessenger, BsStar } from "react-icons/bs";
export default function Post() {
  return (
    <div className="flex gap-4">
      <div className="h-16 w-16 rounded-full border-2"></div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="flex gap-1 items-center">
            <b>$Space</b>
            Created by <BsDot />
            <b>UGnxf</b>
          </p>
          <img src="/star.svg" className="" alt="" />
        </div>
        <p>Market Cap - 11.5k</p>
        <p>
          <b>Space Man (#Space)</b> is a cryptocurrency project based on
          inspiration from a man who visited
        </p>
        <div className="h-40 w-full border-2 rounded-2xl"></div>
        <div className="flex gap-7 items-center">
          <div className="flex cursor-pointer items-center gap-2">
            <BsChat />
            <p>61</p>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <BsHeart />
            <p>35</p>
          </div>
        </div>
        <p>Show more</p>
      </div>
    </div>
  );
}
