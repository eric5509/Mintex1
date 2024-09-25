import Link from "next/link";

export default function TopnavLeft() {
  const socials = [
    ["/XIcon.svg", ""],
    ["/telegramIcon.svg", ""],
    ["/discord.svg", ""],
  ];

  return (
    <div className="flex gap-16 items-center">
      <div className="flex items-center gap-7">
        <img src="/bars.svg" alt="" />
        <Link href={'/'}>
          <img src="/Vector.svg" alt="" />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {socials.map((el, key) => (
          <Link
            className="h-7 w-7 border border-green-500 rounded-full grid place-content-center"
            href={el[1]}
          >
            <img src={el[0]} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}
