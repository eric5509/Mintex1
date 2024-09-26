import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function CompBottomNav() {
  return (
    <div className="flex items-center p-3 bg-gray-300 mb-4 cursor-pointer  rounded-xl shadow gap-2 relative">
      <img src="/logo.png" alt="" />
      <div className="">
        <p className="font-bold text-secondary">UGnxf</p>
        <p className="text-[#1E4F70]">UGnxfddd847..Uv-ld</p>
      </div>
      <BsChevronDown className="absolute top-1/2 -translate-y-1/2 right-4 stroke-1" />
    </div>
  );
}
