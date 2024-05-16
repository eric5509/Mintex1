import Card from "./Card";

export default function Slide() {
  return (
    <div>
      <div className="flex gap-7 container">
        <div className="flex-1 rounded-md border-2">
            <p className="text-2xl p-3 bg-gray-50 font-bold">Cart</p>
          <div className="flex flex-1 flex-col gap-4">
            {[1, 2, 3, 4, 5].map(() => (
              <Card />
            ))}
          </div>
        </div>
        <div className="h-fit pb-4 rounded shadow-md border-2 glass border-black shadow-gray-500 overflow-hidden sticky top-24 w-[265px]">
          <p className="py-3 text-base px-2 border-b-2 uppercase border-gray-400 font-semibold bg-white">
            Cart Summary
          </p>
          <p className="px-3 text-sm mt-3 mb-2">
            Subtotal: <span className="font-semibold">$4,500</span>
          </p>
          <p className="px-3 text-sm">
            Quantity: <span className="font-semibold">11 Items</span>
          </p>
          <p className="px-3 text-11 text-gray-500 mt-3 mb-5">
            This is excluding tax & delivery fee
          </p>
          <div className="px-3">
            <p className="hover:bg-amber-500 text-sm cursor-pointer shadow-md bg-yellow-500 active:scale-95 text-white duration-300 rounded p-3 center">
              Proceed to Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
