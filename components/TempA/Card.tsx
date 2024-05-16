import { BsStar, BsStarFill } from "react-icons/bs";

type Props = {
    name: string
    price: number 
    reviews: number
    rating: number 
}

export default function Card({name, price, reviews, rating}: Props) {
   
  return (
    <div>
      <div className="h-40 border-2 rounded border-emerald-500"></div>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-base uppercase font-semibold">{name}</p>
        <p>${price}</p>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(() => (
              <BsStarFill className="text-amber-500" />
            ))}
          </div>
          <p className="text-xs text-gray-500">({reviews})</p>
        </div>
      </div>
    </div>
  );
}
