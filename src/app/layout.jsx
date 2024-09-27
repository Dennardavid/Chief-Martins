import { Geologica } from "next/font/google";
import "./globals.css";

const inter = Geologica({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "Chief Martins Abu",
    description: "Join us to Celebrate the Life of Chief Martins Dafe Abu",
    url: "https://chief-martins-dafe.netlify.app/",
    siteName: "Chief Martins Abu",
    image: [
      {
        url: "https://asset.cloudinary.com/dsngkhlct/bd08623839163f963adc1322bc5a69dc",
        secureUrl:
          "https://asset.cloudinary.com/dsngkhlct/bd08623839163f963adc1322bc5a69dc",
        width: 1200,
        height: 630,
        alt: "Chief Martins Abu",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
