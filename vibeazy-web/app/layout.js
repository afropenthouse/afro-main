import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/common/Header";
import Footer from "@/component/common/Footer";
import QueryProvider from "@/component/QueryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});


export const metadata = {
  title: "Vibe Eazy",
  description: "Home || Enjoy More, Spend Less!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryProvider>
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="relative flex flex-col w-full">
          <Header />

          <main className="flex flex-col w-full h-full">
            <ToastContainer />
            {children}
          </main>

          {/* <Footer /> */}
        </div>
      </body>
      </QueryProvider>
    </html>
  );
}
