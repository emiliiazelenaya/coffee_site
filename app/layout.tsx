import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-zinc-100 selection:bg-violet-500 selection:text-black`}
      >
        <Header />
        <main className="min-h-screen pt-4 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
