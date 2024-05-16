import localFont from "next/font/local";
import Link from "next/link";
const myFont1 = localFont({ src: "../../assets/fonts/Montserrat-BoldItalic.ttf" });


export default function LoginPage() {
return (
    <div className="h-screen center bg-red-500">
        <Link href={'/'} className={`text-3xl cursor-pointer font-bold ${myFont1.className}`}>HAUTESIDE</Link>
    </div>
  )
}
