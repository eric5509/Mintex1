import localFont from "next/font/local";
import { BsArrowUpRight } from "react-icons/bs";
const myFont = localFont({
  src: "../../assets/fonts/Montserrat-ExtraBold.ttf",
});

export default function Hero() {
  return (
    <div className="px-10">
      <div className="h-screen py-5 flex flex-col justify-between relative">
        <div className="pt-24">
          <div className="h-96 w-96 shadow-md filter rounded-full z-[-1] bgGradient absolute left-20 top-14"></div>
          <div className="h-96 w-96 shadow-md filter rounded-full z-[-1] bgGradient2 absolute right-20 top-14"></div>
          <div className={`${myFont.className}} leading-none`}>
            <p className="textGradient font-bold text-center uppercase">
              <span className="textGradient2">Explore</span> Your
            </p>
            <p className="textGradient font-bold text-center uppercase">
              <span className="textGradient2">True</span> Style
            </p>
          </div>
        </div>
        <div className="h-40 flex justify-between items-center">
          <div className="w-72 leading-loose text-15 font-semibold">
            <p className="uppercase">Discover a diverse range of clothing and accessories that redefine contemporary trends from sleek tailored suits</p>
          </div>
          <div className="h-24 w-24 rounded-full center bg-rose-500 text-white border-blue-500 border-4">
            <BsArrowUpRight className="text-5xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
