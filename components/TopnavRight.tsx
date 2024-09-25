import { BsSearch } from "react-icons/bs";

export default function TopnavRight() {
  return (
    <div className="flex items-center gap-5">
      <div className="h-12 relative bg-gray-300 rounded-full px-4 w-80">
        <input type="text" placeholder='Try searching "Trending"' className="h-full placeholder:font-semibold w-full bg-transparent"/>
        <BsSearch className="absolute top-1/2 right-3 -translate-y-1/2"/>
      </div>

      <div className="flex items-center gap-3">
        <img src="/gem.svg" alt="" />
        <p>0.0200</p>
      </div>

      <p className="border-2 border-[#35B9C0] py-2 px-3 rounded-xl w-fit">
        Create Token
      </p>
    </div>
  );
}
