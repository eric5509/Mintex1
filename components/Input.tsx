type Props = {
  label?: "";
  subLabel?: "";
  placeholder?:""
};

export default function Input({ label, subLabel, placeholder }: Props) {
  return (
    <div>
      <p className="mb-2">{label ?? "Qty"}</p>
      <div className="h-12 bg-white relative border-2 rounded-xl w-64">
        <input type="text" className="bg-transparent pl-3 w-full h-full outline-none" placeholder={placeholder}/>
        <p className="absolute right-2 -translate-y-1/2 top-1/2">{subLabel ?? "USDT"}</p>
      </div>
    </div>
  );
}
