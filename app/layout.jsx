// CSS Imports
import "./globals.css";
// Components Imports
import { Footer, Navbar } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
