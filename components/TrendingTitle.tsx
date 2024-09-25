'use client'
import { useState } from "react";

export default function TrendingTitle() {
  const links = ["Trending", "Following", "New Projects"];
  const [active, setActive] = useState(0)
  return (
    <div className="flex h-12 items-center gap-10">
      <p className="text-2xl font-bold">Tokens</p>
      <div className="flex h-full gap-5">
        {links.map((el, key) => (
          <p onClick={() => setActive(key)} className={`flex cursor-pointer text-15 items-center px-3 after:absolute after:duration-300 after:left-0 after:w-full ${active === key ? "after:bottom-0 after:opacity-100 font-semibold text-black" : "text-gray-700 after:opacity-0 after:-bottom-5"} relative after:h-[2px] after:bg-gray-500 h-full`}>{el}</p>
        ))}
      </div>
    </div>
  );
}
