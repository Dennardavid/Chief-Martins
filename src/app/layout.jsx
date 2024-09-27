import { Geologica } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Geologica({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Chief Martins Abu",
  description: "Burial Preparation for Chief Martins Abu",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        <meta property="og:title" content={metadata.description} />
        <meta property="og:description" content="Join us to Celebrate the Life of Chief Martins Dafe Abu" />
        <meta
          property="og:image"
          content="https://asset.cloudinary.com/dsngkhlct/bd08623839163f963adc1322bc5a69dc"
        />
        <meta property="og:url" content="https://chief-martins-dafe.netlify.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
