import { BiPlus } from "react-icons/bi";

export default function Profile() {
  return (
    <div>
      <p className="text-3xl font-semibold mb-5">Profile</p>
      <div className="flex center flex-col py-10">
        <div className="h-36 w-36 group rounded-full shadow-lg border-2 border-black relative">
          <div className="h-9 w-9 group-hover:opacity-100 group-hover:visible opacity-0 invisible duration-500 absolute border-2 rounded-full top-3 border-green-500 center cursor-pointer bg-white -right-1">
            <BiPlus className="stroke-1"/>
          </div>
        </div>
        <p className="text-xl font-bold mt-4">Hammed Kareem Saliu</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 gap-7">
          <div className="">
            <p className="font-semibold text-sm mb-2">Name</p>
            <div className="h-12 w-full border-2"></div>
          </div>
          <div className="">
            <p className="font-semibold text-sm mb-2">Username</p>
            <div className="h-12 w-full border-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="">
            <p className="font-semibold text-sm mb-2">Gender</p>
            <div className="h-12 w-full border-2"></div>
          </div>
          <div className="">
            <p className="font-semibold text-sm mb-2">Email</p>
            <div className="h-12 w-full border-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="">
            <p className="font-semibold text-sm mb-2">Phone Number 1</p>
            <div className="h-12 w-full border-2"></div>
          </div>
          <div className="">
            <p className="font-semibold text-sm mb-2">Phone Number 2</p>
            <div className="h-12 w-full border-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="">
            <p className="font-semibold text-sm mb-2">Home Address</p>
            <div className="h-12 w-full border-2"></div>
          </div>
          <div className="">
            <p className="font-semibold text-sm mb-2">Office Address</p>
            <div className="h-12 w-full border-2"></div>
          </div>
        </div>
        <button className="bg-green-500 text-white w-full py-3 rounded-sm shadow-md">Save</button>
      </div>
    </div>
  );
}
