import type { Metadata } from "next";
import { Roboto_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: '--font-roboto-mono' });
const dm_sans = DM_Sans({ subsets: ["latin"] , variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: "Pedro Henrique | Full Stack Developer Portfolio ",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable} ${dm_sans.variable} font-mono h-screen`  }>{children}</body>
    </html>
  );
}
