import { Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata = {
  title: "Metrix Engineering Solutions",
  description: "Product Design Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
