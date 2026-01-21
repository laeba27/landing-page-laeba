import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Homie - Peer-to-peer Home Rentals",
  description:
    "Find your ideal home or list yours for rent. Simple, secure, peer-to-peer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
