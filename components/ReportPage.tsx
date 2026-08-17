import { Charts } from "./Charts";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Language = "zh" | "en";
type TocItem = Readonly<{ id: string; title: string }>;

export function ReportPage({ language, reportHtml, toc }: { language: Language; reportHtml: string; toc: readonly TocItem[] }) {
  const zh = language === "zh";
  const copy = zh ? {
    shortTitle: "跨境支付走廊研究",
    eyebrow: "UR Payments Research · 2023–2025",
    title: "跨境支付走廊：流量与未满足需求",
    intro: "六组走廊的规模、现有服务覆盖，以及 UR 可以验证的市场缺口。",
    verified: "最后核验：2026 年 8 月 17 日",
    unit: "正文金额单位：亿美元",
    toc: "目录",
    charts: "关键统计图",
    chartsIntro: "先用五张图理解数量级，再进入各走廊的证据和建议。",
    readReport: "阅读完整报告",
    disclaimer: "本报告用于市场研究与试点设计参考。走廊数字混合了实际值、估算、预测和公开数据下限，不能直接作为收入预测，也不构成法律、监管或投资意见。文中的 UR 机会判断属于待验证假设，不代表任何市场或付款方式已经上线。",
    skip: "跳到正文",
    source: "研究方法、限制与全部来源见报告末尾。",
  } : {
    shortTitle: "Cross-border corridor research",
    eyebrow: "UR Payments Research · 2023–2025",
    title: "Cross-border payment corridors: flows and unmet needs",
    intro: "The scale of six corridor groups, what current service providers cover, and the gaps UR can test.",
    verified: "Last verified: 17 August 2026",
    unit: "Report unit: USD 100 million unless stated otherwise",
    toc: "Contents",
    charts: "Key charts",
    chartsIntro: "Use the five charts to establish scale before reading the evidence and recommendations for each corridor.",
    readReport: "Read the full report",
    disclaimer: "This report supports market research and pilot design. Corridor figures mix actuals, estimates, forecasts and public-data lower bounds. They should not be used directly as revenue forecasts and do not constitute legal, regulatory or investment advice. UR opportunity statements are hypotheses to test, not claims that a market or payment method is live.",
    skip: "Skip to the report",
    source: "See the end of the report for methodology, limitations and full sources.",
  };

  const metrics = zh ? [
    ["654 亿美元", "海湾重点走廊 · 2025 年度标签"],
    ["至少 233 亿美元", "欧洲至亚洲公开数据下限 · 2025"],
    ["1,737 亿美元", "拉美和加勒比收款 · 2025 估计"],
    ["55 家", "CPN enrolled institutions · 2026-02-20"],
  ] : [
    ["USD 65.4bn", "Priority Gulf corridors · 2025 label"],
    ["≥ USD 23.3bn", "Europe-to-Asia public-data lower bound · 2025"],
    ["USD 173.7bn", "Latin America and Caribbean inflows · 2025 estimate"],
    ["55", "CPN enrolled institutions · 20 Feb 2026"],
  ];

  return (
    <>
      <a className="skip-link" href="#report">{copy.skip}</a>
      <header className="topbar">
        <a className="topbar-title" href={language === "zh" ? "./" : "../"}>{copy.shortTitle}</a>
        <LanguageSwitcher language={language} />
      </header>

      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="hero-intro">{copy.intro}</p>
            <div className="report-meta"><span>{copy.verified}</span><span>{copy.unit}</span></div>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span>Gulf</span><span>Asia</span><span>Europe</span><span>Africa</span><span>LatAm</span><i>UR</i></div>
        </section>

        <section className="metrics" aria-label={zh ? "关键数字" : "Key figures"}>
          {metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
        </section>

        <section className="public-note" aria-label={zh ? "免责声明" : "Disclaimer"}>
          <strong>{zh ? "阅读边界" : "How to read this research"}</strong>
          <p>{copy.disclaimer}</p>
        </section>

        <div className="content-layout">
          <aside className="sidebar">
            <details open>
              <summary>{copy.toc}</summary>
              <nav aria-label={copy.toc}>
                <a href="#charts">{copy.charts}</a>
                {toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.title.replace(/^([一二三四五六七八九十]+、|\d+\.\s*)/, "")}</a>)}
              </nav>
            </details>
          </aside>

          <div className="report-column">
            <section id="charts" className="charts-section">
              <div className="section-intro"><p className="eyebrow">Data view</p><h2>{copy.charts}</h2><p>{copy.chartsIntro}</p></div>
              <Charts lang={language} />
            </section>

            <article id="report" className="report-article" aria-label={copy.readReport} dangerouslySetInnerHTML={{ __html: reportHtml }} />

            <footer className="report-footer">
              <p>{copy.source}</p>
              <p>© 2026 UR Payments Research</p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
