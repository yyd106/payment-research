import type { Metadata } from "next";
import { ReportPage } from "../../components/ReportPage";
import { reportEnHtml, tocEn } from "../../content/generated";

const baseUrl = "https://yyd106.github.io/payment-research/";

export const metadata: Metadata = {
  title: "Cross-border payment corridors: flow signals and service-gap hypotheses",
  description: "A 2023–2025 evidence review of what six cross-border flow measures can establish, what remains unproven about enterprise service gaps, and how UR should validate production routes.",
  alternates: { canonical: `${baseUrl}en/`, languages: { "zh-CN": baseUrl, en: `${baseUrl}en/` } },
  openGraph: {
    locale: "en_US",
    type: "article",
    siteName: "UR Payments Research",
    modifiedTime: "2026-08-17",
    images: [{ url: `${baseUrl}og.png`, width: 1731, height: 909, alt: "Cross-border payment corridors: flow signals and service-gap hypotheses" }],
  },
  twitter: { card: "summary_large_image", images: [`${baseUrl}og.png`] },
};

export default function EnglishReportPage() {
  return <ReportPage language="en" reportHtml={reportEnHtml} toc={tocEn} />;
}
