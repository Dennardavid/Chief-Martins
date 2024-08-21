import {  Geologica } from "next/font/google";
import "./globals.css";


const inter = Geologica({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Chief Martins Abu",
  description: "Burial Preparation for Chief Martins Abu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
