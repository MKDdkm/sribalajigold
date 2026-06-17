import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Balaji Gold - Premium Traditional Breakfast Food",
  description: "Experience the authentic taste every family trusts, crafted with pure love and quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <div className="site-root min-h-screen flex flex-col">
          <main className="site-main flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
