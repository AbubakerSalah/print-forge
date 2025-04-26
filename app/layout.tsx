import "./globals.css";
import type  { RootLayoutProps } from "@app/type";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Link from "next/link";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});
export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
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
                <Link href="modal">3D Models</Link>
              </li>
              <li className="hover:text-orange-400 hover:border-b transition duration-200">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
