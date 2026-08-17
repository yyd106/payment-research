# Payment Research / 跨境支付研究

A bilingual evidence review of cross-border payment flow signals, service-gap hypotheses and production-validation priorities from 2023 to 2025.

中英双语研究网站，区分 2023–2025 年六组跨境资金流能证明什么、企业服务缺口仍缺什么证据，以及 UR 应如何用生产数据决定是否上线。

## What is included / 仓库内容

- Chinese report at `/` and English report at `/en/`
- Five bilingual statistical charts with accessible data tables
- Fourteen stable section anchors shared by both languages
- Machine-readable chart data in `public/data/corridor-data.csv`
- Full primary and secondary source links in both reports

## Evidence status / 数据状态

The site deliberately distinguishes actuals, estimates, forecasts, provisional values and composite proxies. In particular:

- India’s 2025 label uses a provisional FY2024-25 balance-of-payments proxy.
- Sub-Saharan Africa’s 2025 value is a forecast.
- Latin America and the Caribbean’s 2025 value is an estimate.
- A comparable US 2025 WDI outflow value was not yet published at the last verification date.
- The Europe-to-Asia figure is a composite proxy, not a public-data lower bound or B2B market size.
- CPN `enrolled` institutions are not described as live, production-enabled BFIs.
- An allowed CPN country is not described as an account-enabled route or a completed payout.

最后核验日期：2026-08-17。

## Local development / 本地运行

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
npm test
npm run lint
```

The content generator compiles `content/report.zh.md` and `content/report.en.md` into stable, aligned HTML before development and production builds.

## Disclaimer / 免责声明

This research supports market analysis and pilot design. It is not legal, regulatory or investment advice. Corridor figures use different statistical periods and methodologies. Most figures are personal-remittance or trade proxies and must not be treated as B2B payment volume or directly comparable transaction revenue.

本研究用于市场分析与试点设计参考，不构成法律、监管或投资意见。各组数字的统计期间和方法不同，多数属于个人汇款或贸易代理，不能直接当成企业付款规模或用于推算交易收入。

The repository does not grant a license to reuse the research text or third-party data. Source materials remain subject to their respective rights and terms.
