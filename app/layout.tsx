import "./globals.css";
import type { RootLayoutProps } from "@app/types";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Navbar from "./components/Navbar";

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
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="PrintForge - Your go-to platform for 3D printing enthusiasts."
        />
        <title>PrintForge</title>
      </head>
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
