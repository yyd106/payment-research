import { Charts } from "./Charts";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Language = "zh" | "en";
type TocItem = Readonly<{ id: string; title: string }>;

export function ReportPage({ language, reportHtml, toc }: { language: Language; reportHtml: string; toc: readonly TocItem[] }) {
  const zh = language === "zh";
  const copy = zh ? {
    shortTitle: "跨境支付走廊研究",
    eyebrow: "UR Payments Research · 2023–2025",
    title: "跨境支付走廊：流量信号与服务缺口假设",
    intro: "分清宏观流量能证明什么、企业机会仍缺什么，以及 UR 应如何用生产数据作出上线决定。",
    verified: "最后核验：2026 年 8 月 17 日",
    unit: "正文金额单位：USD billion（十亿美元）",
    toc: "目录",
    charts: "关键证据图",
    chartsIntro: "五张图分别说明数量级、统计口径和证据边界；图后的文字解释它支持什么，也解释它不能证明什么。",
    readReport: "阅读完整报告",
    disclaimer: "本报告用于市场研究与试点设计参考。走廊数字混合了实际值、暂定值、估算、预测和复合代理，不能直接作为企业付款市场规模或收入预测，也不构成法律、监管或投资意见。文中的 UR 机会判断属于待验证假设，不代表任何市场或付款方式已经上线。",
    skip: "跳到正文",
    source: "研究方法、限制与全部来源见报告末尾。",
  } : {
    shortTitle: "Cross-border corridor research",
    eyebrow: "UR Payments Research · 2023–2025",
    title: "Cross-border payment corridors: flow signals and service-gap hypotheses",
    intro: "What macro flows can establish, what remains unproven about enterprise demand, and how UR should use production evidence to make launch decisions.",
    verified: "Last verified: 17 August 2026",
    unit: "Report flow unit: USD billion",
    toc: "Contents",
    charts: "Key evidence charts",
    chartsIntro: "Each chart shows a scale or relationship and states both what the evidence supports and what it cannot establish.",
    readReport: "Read the full report",
    disclaimer: "This report supports market research and pilot design. Corridor figures mix actuals, provisional values, estimates, forecasts and composite proxies. They are not direct measures of B2B payment markets or revenue and do not constitute legal, regulatory or investment advice. UR opportunity statements are hypotheses to test, not claims that a market or payment method is live.",
    skip: "Skip to the report",
    source: "See the end of the report for methodology, limitations and full sources.",
  };

  const metrics = zh ? [
    ["USD 64.7bn", "海湾至四国个人汇款代理，不是 B2B 规模"],
    ["USD 23.3bn", "欧洲至亚洲复合代理，不是完整市场"],
    ["2 个", "首批并行验证假设，不是上线决定"],
    ["5 项", "从宏观流量到 UR 盈利仍需完成的验证"],
  ] : [
    ["USD 64.7bn", "Gulf-to-four-market remittance proxy, not B2B volume"],
    ["USD 23.3bn", "Europe-to-Asia composite proxy, not a full market"],
    ["2", "First-wave hypotheses to test, not launch decisions"],
    ["5", "Validations still required between macro flow and UR profit"],
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
              <div className="section-intro"><p className="eyebrow">{zh ? "证据视图" : "Evidence view"}</p><h2>{copy.charts}</h2><p>{copy.chartsIntro}</p></div>
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
