'use client'
import { useState } from "react";

export default function Title() {
  const links = ["Token held", "Token created", "Followers", "Following"];
  const [active, setActive] = useState(0)
  return (
    <div className="mb-10 text-15 text-[#7D8FB3]">
      <div className="h-[52px] flex w-fit border-b border-gray-400 bg-gray-300">
        {links.map((link, key) => (
          <p onClick={() => setActive(key)} className="h-full cursor-pointer px-5 flex items-center relative ">
            {link}
            <span className={`h-[2px] w-full font-bold duration-300 absolute left-0 rounded-full bg-primary ${key === active ? "bottom-0 visible opacity-100": "-bottom-5 opacity-0 invisible"} `}></span>
            </p>
        ))}
      </div>
    </div>
  );
}
