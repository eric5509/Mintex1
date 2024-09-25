type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return (
      <button className="py-3 w-full duration-300 active:scale-95 text-white shadow bg-primary rounded-xl">{title}</button>
  );
}
