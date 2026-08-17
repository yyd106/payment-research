import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yyd106.github.io/payment-research/"),
  title: { default: "UR Payments Research", template: "%s · UR Payments Research" },
  description: "Bilingual evidence review of cross-border payment flow signals, service-gap hypotheses and production-validation priorities.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function ChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
