import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="flex justify-between items-center">
            <div id="logo" className="flex cursor-pointer items-center justify-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width="245" height="67" layout="intrinsic" />
                </Link>
            </div>

            <div id="links" className="hidden font-semibold space-x-3">
                <a href="/about"> About Me </a>
                <a href="/about"> Projects </a>
                <a href="/about"> Resume </a>
                <a href="/about"> Contact </a>
            </div>
        </div>
    )
}