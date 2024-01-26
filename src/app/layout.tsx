import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer";
import { FontClassNames } from "./font";

// meta
export const metadata: Metadata = {
  title: "Crack.Run FC온라인 구단주 전적검색",
  description: "FC온라인 정보의 모든 것!! Crack.Run",
};

// layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Crack.Run</title>
        <meta
          name="FC온라인 구단주 전적검색"
          content="FC온라인 정보의 모든 것!! Crack.Run"
        />
      </head>
      <body className={FontClassNames}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
