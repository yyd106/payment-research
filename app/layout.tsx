import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yyd106.github.io/payment-research/"),
  title: { default: "UR Payments Research", template: "%s · UR Payments Research" },
  description: "Bilingual research on cross-border payment corridors, transaction scale and unmet customer needs.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang=location.pathname.includes("/en")?"en":"zh-CN"' }} />
        {children}
      </body>
    </html>
  );
}
