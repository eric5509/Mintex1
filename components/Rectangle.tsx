import { BsChevronRight } from "react-icons/bs";

type Props = {
    showChevron?: boolean
}

export default function Rectangle({showChevron}: Props) {
  return (
    <div>
        <div className="flex bg-red-500 relative p-3 w-full rounded-2xl items-center gap-3">
            <img src="/logo.svg" alt="" />
            <p><b>UGnxf</b> created $SPACE</p>
            <img src="/img1.png" className="rounded-xl" alt="" />
            {showChevron && <BsChevronRight className="absolute top-1/2 -translate-y-1/2 right-3 "/>}
        </div>
    </div>
  )
}
