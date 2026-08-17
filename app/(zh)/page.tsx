import type { Metadata } from "next";
import { ReportPage } from "../../components/ReportPage";
import { reportZhHtml, tocZh } from "../../content/generated";

const baseUrl = "https://yyd106.github.io/payment-research/";

export const metadata: Metadata = {
  title: "跨境支付走廊：流量信号与服务缺口假设",
  description: "基于 2023–2025 年公开数据，区分六组跨境资金流能证明什么、企业服务缺口仍缺什么证据，以及 UR 应如何完成生产验证。",
  alternates: { canonical: baseUrl, languages: { "zh-CN": baseUrl, en: `${baseUrl}en/` } },
  openGraph: {
    locale: "zh_CN",
    type: "article",
    siteName: "UR Payments Research",
    modifiedTime: "2026-08-17",
    images: [{ url: `${baseUrl}og.png`, width: 1731, height: 909, alt: "跨境支付走廊：流量信号与服务缺口假设" }],
  },
  twitter: { card: "summary_large_image", images: [`${baseUrl}og.png`] },
};

export default function Home() {
  return <ReportPage language="zh" reportHtml={reportZhHtml} toc={tocZh} />;
}
