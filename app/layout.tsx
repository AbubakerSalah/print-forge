import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <header>
          <nav className="flex justify-between items-center py-6 px-8  text-gray-800">
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
            <ul className="flex space-x-4">
              <li className="hover:text-orange-400 hover:border-b transition duration-200">
                <a href="#models">3D Models</a>
              </li>
              <li className="hover:text-orange-400 hover:border-b transition duration-200">
                <a href="./about">About</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
