import { Inter, Open_Sans, Roboto, Work_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
});

export const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});
