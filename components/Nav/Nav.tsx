"use client";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";

const myFont = localFont({
  src: "../../assets/fonts/Poppins-Bold.ttf",
});
const myFont1 = localFont({
  src: "../../assets/fonts/Montserrat-BoldItalic.ttf",
});

export default function Nav() {
  const [loggedIn, setLoggedIn] = useState(true);
  const router = useRouter();

  const [over100, setOver100] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setOver100(true);
      } else {
        setOver100(false);
      }
    });
  }, [over100]);

  const Pathname = usePathname();
  const pathname = Pathname.substring(1);
  const links = [
    ["new arrivals", "new"],
    ["collections", "collections"],
    ["all products", "all"],
  ];

  return (
    <div
      className={`fixed ${
        pathname === "login" && "hidden"
      } z-[50000000] top-0 border-b-2 duration-300 ${
        over100 ? "glass border-gray-300" : ` ${pathname !== '' ? 'glass border-gray-300' : 'bg-transparent border-transparent'}`
      } left-0 w-screen h-20 flex items-center justify-center}`}
    >
      <div className="flex uppercase container items-center justify-between py-8">
        <Link
          href={"/"}
          className={`text-3xl cursor-pointer font-bold ${myFont1.className}`}
        >
          HAUTESIDE
        </Link>
        <div className="flex gap-8">
          {links.map((el, key) => (
            <Link
              href={`/${el[1]}`}
              className={`cursor-pointer font-semibold ${
                pathname === el[1] ? "text-red-500" : "text-black"
              } hover:text-red-500 duration-300`}
              key={key}
            >
              <p
                className={`relative after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] hover:after:w-full after:duration-500 ${
                  pathname === el[1] &&
                  "after:bg-[red] after:h-[2px] after:w-full"
                } after:bg-[red] hover:after:bg-[red] `}
              >
                {el[0]}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          {loggedIn ? (
            <div className="flex items-center gap-5">
              <Link href={'/profile'} className="flex items-center gap-2">
                <div className="h-10 w-10 border-2 rounded-full"></div>
                <p className={`${myFont.className} font-bold text-15`}>
                  Lekan T.
                </p>
              </Link>
              <Link href={'/cart'}>Cart (3)</Link>
            </div>
          ) : (
            <Link
              href={"/login"}
              className={`cursor-pointer relative "glass px-5 border-2 py-3 rounded-full`}
            >
              <p className="">Login / Sign up</p>
            </Link>
          )}
          <div className="flex group items-center cursor-pointer gap-1 relative">
            <p>More</p>
            <TiArrowSortedDown className="text-lg" />
            <div className="h-64 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 absolute top-full pt-2 right-0">
              <div className="h-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
