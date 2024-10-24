import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "./globals.css";
import HashedBorder from "./components/HashedBorder";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const font = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "EHAX",
  description: "Welcome to EHAX, we are the official ethical hacking and cybersecurity society of DTU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <HashedBorder>
          <Loader>
            <Navbar />
            {children}
          </Loader>
        </HashedBorder>
      </body>
    </html>
  );
}
