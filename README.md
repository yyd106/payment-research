# Payment Research / 跨境支付研究

A bilingual research site covering cross-border payment corridor flows and unmet customer needs from 2023 to 2025.

中英双语研究网站，覆盖 2023–2025 年六组跨境支付走廊的流量、现有服务覆盖与尚未满足的需求。

## What is included / 仓库内容

- Chinese report at `/` and English report at `/en/`
- Five bilingual statistical charts with accessible data tables
- Fourteen stable section anchors shared by both languages
- Machine-readable chart data in `public/data/corridor-data.csv`
- Full primary and secondary source links in both reports

## Evidence status / 数据状态

The site deliberately distinguishes actuals, estimates, forecasts, provisional values and public-data lower bounds. In particular:

- India’s 2025 label uses a provisional FY2024-25 balance-of-payments proxy.
- Sub-Saharan Africa’s 2025 value is a forecast.
- Latin America and the Caribbean’s 2025 value is an estimate.
- A comparable US 2025 WDI outflow value was not yet published at the last verification date.
- CPN `enrolled` institutions are not described as live or in production.

最后核验日期：2026-08-17。

## Local development / 本地运行

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
npm test
```

The content generator compiles `content/report.zh.md` and `content/report.en.md` into stable, aligned HTML before development and production builds.

## Disclaimer / 免责声明

This research supports market analysis and pilot design. It is not legal, regulatory or investment advice. Corridor figures use different statistical periods and methodologies and must not be treated as directly comparable transaction revenue.

本研究用于市场分析与试点设计参考，不构成法律、监管或投资意见。各走廊数字的统计期间和方法不同，不能直接用于推算交易收入。

The repository does not grant a license to reuse the research text or third-party data. Source materials remain subject to their respective rights and terms.
