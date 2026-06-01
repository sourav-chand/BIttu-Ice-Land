import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bittu Ice Land | Ice Cream, Dairy & General Store — Beliatore, Bankura",
  description:
    "Bittu Ice Land in Beliatore, Bankura, West Bengal — your neighborhood destination for premium ice cream, fresh dairy products, and everyday groceries. Pure Joy, Every Scoop.",
  keywords: [
    "Bittu Ice Land",
    "ice cream Beliatore",
    "ice cream Bankura",
    "dairy store",
    "general store Bankura",
    "ice cream parlour",
    "West Bengal ice cream",
  ],
  openGraph: {
    title: "Bittu Ice Land | Pure Joy, Every Scoop",
    description:
      "Beliatore's sweetest spot for ice cream, dairy, and general store needs. Visit us in Bankura, West Bengal.",
    type: "website",
    locale: "en_IN",
    siteName: "Bittu Ice Land",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${pacifico.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
