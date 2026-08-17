import type { Metadata } from "next";
import { ReportPage } from "../../components/ReportPage";
import { reportEnHtml, tocEn } from "../../content/generated";

export const metadata: Metadata = {
  title: "Cross-border payment corridors: flows and unmet needs",
  description: "A 2023–2025 evidence review of six cross-border payment corridor groups, current service coverage and unmet needs.",
  alternates: { canonical: "./en/", languages: { "zh-CN": "./", en: "./en/" } },
  openGraph: {
    locale: "en_US",
    type: "article",
    siteName: "UR Payments Research",
    modifiedTime: "2026-08-17",
    images: [{ url: "https://yyd106.github.io/payment-research/og.png", width: 1731, height: 909, alt: "Cross-border payment corridors / 跨境支付走廊" }],
  },
  twitter: { card: "summary_large_image", images: ["https://yyd106.github.io/payment-research/og.png"] },
};

export default function EnglishReportPage() {
  return <ReportPage language="en" reportHtml={reportEnHtml} toc={tocEn} />;
}
