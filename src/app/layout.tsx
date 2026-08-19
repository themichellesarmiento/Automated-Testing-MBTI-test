import type { Metadata } from "next";
import { Hanken_Grotesk } from 'next/font/google'
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: "swap",
});


export const metadata: Metadata = {
  title: "MBTI Test",
  description: "Personality Test",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full">
        <div className="px-4 max-w-[42rem] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
