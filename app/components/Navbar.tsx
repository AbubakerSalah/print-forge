import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center py-6 px-8  text-gray-800">
        <Link href="/">
          <img
            src="./printforge-logo.svg"
            alt=""
            className="w-[200px] h-auto hidden md:block"
          />
          {/*Mobile logo*/}
          <img
            src="./printforge-logo-icon.svg"
            alt=""
            className="w-[40px] h-auto  md:hidden"
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
