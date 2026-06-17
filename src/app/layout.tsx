import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} antialiased`}
      >
        <main>{children}</main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <p>
              Designed and developed by{' '}
              <a
                href="https://www.bing.com/ck/a?!&&p=ec22345f5fb367f56312f762013eb2f42ad7b28f1d57e709c4123e882881c845JmltdHM9MTc4MTY1NDQwMA&ptn=3&ver=2&hsh=4&fclid=2e7c4831-0d92-6191-0455-5f450c0460bb&psq=UNIFIRO+LABS&u=a1aHR0cHM6Ly91bmlmaXJvbGFicy5jb20vYWJvdXQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                UNIFIROLABS
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
