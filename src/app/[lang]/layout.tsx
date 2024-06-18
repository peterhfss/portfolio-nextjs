import type { Metadata } from "next";
import { Roboto_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { i18n } from "@/config/i18n.config";

const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: '--font-roboto-mono' });
const dm_sans = DM_Sans({ subsets: ["latin"] , variable: '--font-dm-sans' });

export async function generateStaticParams(){
  const languages = i18n.locales.map((lang) => ({lang}));
  return languages;
}

export const metadata: Metadata = {
  title: "Pedro Henrique | Full Stack Developer Portfolio ",
  description: "Portfolio",
  icons: {
    icon: "/images/favicon.svg"
  },
};

export default function RootLayout({
  children,params
}: Readonly<{
  children: React.ReactNode,
  params:{lang: string};
}>) {
  return (
    <html lang={params.lang}>
        <body className={`${roboto_mono.variable} ${dm_sans.variable} font-mono scroll-smooth`}>{children}</body>
    </html>
  );
}
