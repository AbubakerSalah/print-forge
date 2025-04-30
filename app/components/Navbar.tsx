import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center py-6 px-8  text-gray-800">
        <Link href="/">
          <Image
            src="/printforge-logo.svg"
            alt="PrintForge logo"
            className="w-[200px] h-auto hidden md:block"
            width={200}
            height={100}
          />
          {/* Mobile logo */}
          <Image
            src="/printforge-logo-icon.svg"
            alt="PrintForge icon"
            className="w-[40px] h-auto md:hidden"
            width={40}
            height={40}
          />
        </Link>

        <ul className="flex space-x-4">
          <li className="hover:text-orange-400 hover:border-b transition duration-200">
            <Link href="/3d-model">3D Models</Link>
          </li>
          <li className="hover:text-orange-400 hover:border-b transition duration-200">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
