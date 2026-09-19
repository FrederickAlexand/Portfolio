import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frederick Alexander Badaruddin",
  description:
    "Technical Operations & Solutions Specialist — bridging technical systems and business operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
