
import "./globals.css";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata = {
  title: "Vibeazy",
  description: "Find budget-friendly hangout spots and get exclusive discounts when you visit!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
