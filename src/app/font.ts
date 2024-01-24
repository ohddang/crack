// font
import { Inter, Black_Han_Sans } from "next/font/google";

const cls = (...classnames: string[]) => classnames.join(" ");

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
const black_Han_Sans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  variable: "--black_Han_Sans",
});

export const FontClassNames = cls(inter.variable, black_Han_Sans.variable);
