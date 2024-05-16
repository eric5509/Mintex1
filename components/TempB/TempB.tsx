import { BsStar, BsStarFill } from "react-icons/bs";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../assets/fonts/Poppins-Bold.ttf" });

export default function TempB() {

  return (
    <div className={`bgGradient3 py-10 ${myFont.className}`}>
      <div className="text-[24px] glass lg:text-[27px] overflow-hidden whitespace-nowrap py-10 flex ">
      <div className="flex animate1 items-center">
          {[1,2,3,4,5].map((data, key) => (
            <div className="mx-10 flex items-center gap-3" key={key}>
             <BsStarFill className={`text-5xl font-semibold ${
                  key % 2 !== 0 ? "text-white" : "text-black"
                }`}/>
              <p
                className={`text-5xl ${
                  key % 2 !== 0 ? "text-white" : "text-black"
                }`}
              >
                30% OFF
              </p>
            </div>
          ))}
        </div>
        <div className="flex animate1 items-center">
          {[1,2,3,4,5].map((data, key) => (
            <div className="mx-10 flex items-center gap-3" key={key}>
             <BsStarFill className={`text-5xl font-semibold ${
                  key % 2 !== 0 ? "text-white" : "text-black"
                }`}/>
              <p
                className={`text-5xl ${
                  key % 2 !== 0 ? "text-white" : "text-black"
                }`}
              >
                30% OFF
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
