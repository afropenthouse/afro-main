import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/data/default-metadata";
import Footer from "@/components/(landing)/footer/Footer";
import Navbar from "@/components/(landing)/common/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
// const geistSans = Geist({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased w-full overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
