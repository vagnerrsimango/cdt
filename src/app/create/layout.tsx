import "@/styles/globals.css";

import { Outfit } from "next/font/google";

import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div className={outfit.className}>
          <SiteHeader />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
