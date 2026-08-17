import type { Metadata } from "next";
import { ReportPage } from "../components/ReportPage";
import { reportZhHtml, tocZh } from "../content/generated";

export const metadata: Metadata = {
  title: "跨境支付走廊：流量与未满足需求",
  description: "基于 2023–2025 年公开数据，研究六组跨境支付走廊的流量、现有服务覆盖与尚未满足的需求。",
  alternates: { canonical: "./", languages: { "zh-CN": "./", en: "./en/" } },
  openGraph: {
    locale: "zh_CN",
    type: "article",
    siteName: "UR Payments Research",
    modifiedTime: "2026-08-17",
    images: [{ url: "https://yyd106.github.io/payment-research/og.png", width: 1731, height: 909, alt: "跨境支付走廊 / Cross-border payment corridors" }],
  },
  twitter: { card: "summary_large_image", images: ["https://yyd106.github.io/payment-research/og.png"] },
};

export default function Home() {
  return <ReportPage language="zh" reportHtml={reportZhHtml} toc={tocZh} />;
}
