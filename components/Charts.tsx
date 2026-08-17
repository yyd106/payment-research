import type { CSSProperties, ReactNode } from "react";

type Language = "zh" | "en";

const years = [2023, 2024, 2025];

function Figure({ title, kicker, caption, children, table }: { title: string; kicker: string; caption: string; children: ReactNode; table: ReactNode }) {
  return (
    <figure className="data-figure">
      <div className="figure-heading">
        <p>{kicker}</p>
        <h3>{title}</h3>
      </div>
      {children}
      <figcaption>{caption}</figcaption>
      <details className="chart-data">
        <summary>Data / 数据</summary>
        <div className="table-scroll" tabIndex={0}>{table}</div>
      </details>
    </figure>
  );
}

function PriorityChart({ lang }: { lang: Language }) {
  const gulf = [512, 554, 654];
  const europe = [197, 207, 233];
  const x = [76, 310, 544];
  const y = (value: number) => 300 - (value / 700) * 232;
  const labels = lang === "zh"
    ? { title: "两组优先走廊的个人汇款规模", kicker: "优先级信号", gulf: "海湾重点走廊", europe: "欧洲至亚洲公开下限", caption: "海湾重点走廊的估算规模更大，适合先做真实试付。2025 年印度部分采用 FY2024-25 暂定代理值，各国统计期间并不完全一致。" }
    : { title: "Personal-remittance scale of two priority corridor groups", kicker: "Priority signal", gulf: "Priority Gulf corridors", europe: "Europe-to-Asia public-data lower bound", caption: "The estimated Gulf corridor pool is larger and offers a stronger starting point for live payment tests. India’s 2025 point uses a provisional FY2024-25 proxy, and reporting periods differ across markets." };

  return (
    <Figure title={labels.title} kicker={labels.kicker} caption={labels.caption} table={
      <table><caption className="sr-only">{labels.title}</caption><thead><tr><th scope="col">{lang === "zh" ? "年度标签" : "Year label"}</th><th scope="col">{labels.gulf}</th><th scope="col">{labels.europe}</th></tr></thead><tbody>{years.map((year, i) => <tr key={year}><th scope="row">{year}</th><td>{gulf[i]}</td><td>{europe[i]}</td></tr>)}</tbody></table>
    }>
      <div className="chart-scroll" tabIndex={0} role="region" aria-label={labels.title}>
        <svg className="line-chart" viewBox="0 0 620 350" role="img" aria-labelledby="priority-chart-title priority-chart-desc">
          <title id="priority-chart-title">{labels.title}</title>
          <desc id="priority-chart-desc">{labels.caption}</desc>
          {[0, 200, 400, 600].map((tick) => <g key={tick}><line x1="64" y1={y(tick)} x2="560" y2={y(tick)} className="grid-line"/><text x="50" y={y(tick) + 4} textAnchor="end" className="axis-label">{tick}</text></g>)}
          <polyline points={gulf.map((value, i) => `${x[i]},${y(value)}`).join(" ")} className="line gulf-line" />
          <polyline points={europe.map((value, i) => `${x[i]},${y(value)}`).join(" ")} className="line europe-line" />
          {gulf.map((value, i) => <g key={`g-${years[i]}`}><circle cx={x[i]} cy={y(value)} r="6" className="gulf-dot"/><text x={x[i]} y={y(value) - 13} textAnchor="middle" className="value-label">{value}</text></g>)}
          {europe.map((value, i) => <g key={`e-${years[i]}`}><circle cx={x[i]} cy={y(value)} r="6" className="europe-dot"/><text x={x[i]} y={y(value) + 22} textAnchor="middle" className="value-label">≥{value}</text></g>)}
          {years.map((year, i) => <text key={year} x={x[i]} y="326" textAnchor="middle" className="axis-label">{year}</text>)}
        </svg>
      </div>
      <div className="legend"><span><i className="swatch gulf" />{labels.gulf}</span><span><i className="swatch europe" />{labels.europe}</span><span>{lang === "zh" ? "单位：亿美元" : "Unit: USD 100m"}</span></div>
    </Figure>
  );
}

function MacroPools({ lang }: { lang: Language }) {
  const pools = lang === "zh" ? [
    { name: "拉美和加勒比收款", values: [1570, 1656, 1737], note: "2025：IDB 估计", max: 1800 },
    { name: "美国汇出", values: [983, 1032, null], note: "2025：WDI 尚未发布", max: 1200 },
    { name: "撒哈拉以南非洲收款", values: [522, 572, 560], note: "2025：预测", max: 650 },
  ] : [
    { name: "Latin America and Caribbean inflows", values: [1570, 1656, 1737], note: "2025: IDB estimate", max: 1800 },
    { name: "US outflows", values: [983, 1032, null], note: "2025: not yet available in WDI", max: 1200 },
    { name: "Sub-Saharan Africa inflows", values: [522, 572, 560], note: "2025: forecast", max: 650 },
  ];
  const title = lang === "zh" ? "三类宏观个人汇款资金池" : "Three macro personal-remittance pools";
  const caption = lang === "zh" ? "每个小图使用独立纵轴，只能观察自身变化，不能横向比较走廊吸引力。" : "Each panel uses its own scale. Use the panels to inspect changes within a pool, not to compare corridor attractiveness across pools.";

  return (
    <Figure title={title} kicker={lang === "zh" ? "宏观背景" : "Macro context"} caption={caption} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "资金池" : "Pool"}</th>{years.map(y => <th scope="col" key={y}>{y}</th>)}</tr></thead><tbody>{pools.map(pool => <tr key={pool.name}><th scope="row">{pool.name}</th>{pool.values.map((v, i) => <td key={years[i]}>{v ?? (lang === "zh" ? "未发布" : "Not available")}</td>)}</tr>)}</tbody></table>
    }>
      <div className="macro-grid">
        {pools.map((pool) => <section className="macro-card" key={pool.name}><h4>{pool.name}</h4><p>{pool.note}</p><div className="mini-bars">{pool.values.map((value, i) => <div className="mini-bar-column" key={years[i]}><span>{value ?? "—"}</span><i style={{ height: value == null ? 0 : `${(value / pool.max) * 100}%` }} className={i === 2 ? "marked" : ""}/><small>{years[i]}</small></div>)}</div></section>)}
      </div>
    </Figure>
  );
}

function TradeProxy({ lang }: { lang: Language }) {
  const series = lang === "zh" ? [
    { name: "新加坡与欧盟", values: [560, 520, 540], className: "trade-a" },
    { name: "香港与欧盟", values: [650, 630, 630], className: "trade-b" },
    { name: "香港与中东", values: [266, 241, 247], className: "trade-c" },
  ] : [
    { name: "Singapore–EU", values: [560, 520, 540], className: "trade-a" },
    { name: "Hong Kong–EU", values: [650, 630, 630], className: "trade-b" },
    { name: "Hong Kong–Middle East", values: [266, 241, 247], className: "trade-c" },
  ];
  const title = lang === "zh" ? "亚洲至欧洲和中东的贸易额代理" : "Trade-value proxy from Asia to Europe and the Middle East";
  const caption = lang === "zh" ? "这是部分双向货物贸易额，只反映企业结算活动的数量级，不是单向支付流量。" : "These are selected two-way merchandise-trade values. They indicate the scale of corporate settlement activity, not one-way payment flows.";
  const max = 1500;
  return (
    <Figure title={title} kicker={lang === "zh" ? "企业付款代理" : "Corporate-payment proxy"} caption={caption} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "组成" : "Component"}</th>{years.map(y => <th scope="col" key={y}>{y}</th>)}</tr></thead><tbody>{series.map(item => <tr key={item.name}><th scope="row">{item.name}</th>{item.values.map((v, i) => <td key={years[i]}>{v}</td>)}</tr>)}</tbody></table>
    }>
      <div className="stacked-chart" role="img" aria-label={caption}>{years.map((year, yearIndex) => <div className="stacked-row" key={year}><strong>{year}</strong><div className="stacked-track">{series.map(item => <span key={item.name} className={item.className} style={{ width: `${(item.values[yearIndex] / max) * 100}%` } as CSSProperties} title={`${item.name}: ${item.values[yearIndex]}`}><b>{item.values[yearIndex]}</b></span>)}</div><em>≈{[1480,1390,1420][yearIndex]}</em></div>)}</div>
      <div className="legend">{series.map(item => <span key={item.name}><i className={`swatch ${item.className}`} />{item.name}</span>)}<span>{lang === "zh" ? "单位：亿美元" : "Unit: USD 100m"}</span></div>
    </Figure>
  );
}

function GulfComposition({ lang }: { lang: Language }) {
  const items = lang === "zh" ? [
    { name: "印度", value: 351, className: "gulf-a" }, { name: "巴基斯坦", value: 172, className: "gulf-b" }, { name: "孟加拉", value: 84, className: "gulf-c" }, { name: "菲律宾", value: 47, className: "gulf-d" },
  ] : [
    { name: "India", value: 351, className: "gulf-a" }, { name: "Pakistan", value: 172, className: "gulf-b" }, { name: "Bangladesh", value: 84, className: "gulf-c" }, { name: "Philippines", value: 47, className: "gulf-d" },
  ];
  const total = 654;
  const title = lang === "zh" ? "海湾重点走廊的收款市场构成" : "Recipient-market mix in the priority Gulf corridors";
  const caption = lang === "zh" ? "印度约占这组估算流量的 54%。印度使用 FY2024-25 暂定值；各市场统计期间并不完全一致。" : "India represents about 54% of this estimated corridor pool. India uses a provisional FY2024-25 value, and reporting periods are not fully aligned across markets.";
  return (
    <Figure title={title} kicker="2025" caption={caption} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "收款市场" : "Recipient market"}</th><th scope="col">{lang === "zh" ? "金额（亿美元）" : "Value (USD 100m)"}</th><th scope="col">{lang === "zh" ? "占比" : "Share"}</th></tr></thead><tbody>{items.map(item => <tr key={item.name}><th scope="row">{item.name}</th><td>{item.value}</td><td>{(item.value / total * 100).toFixed(1)}%</td></tr>)}</tbody></table>
    }>
      <div className="chart-scroll" tabIndex={0} role="region" aria-label={title}>
        <div className="composition-bar" role="img" aria-label={caption}>{items.map(item => <span key={item.name} className={item.className} style={{ width: `${(item.value / total) * 100}%` }}><b>{item.value}</b></span>)}</div>
      </div>
      <div className="legend">{items.map(item => <span key={item.name}><i className={`swatch ${item.className}`} />{item.name} {item.value}</span>)}<span>{lang === "zh" ? "合计 654 亿美元" : "Total USD 65.4bn"}</span></div>
    </Figure>
  );
}

function TicketCost({ lang }: { lang: Language }) {
  const rows = lang === "zh" ? [
    { corridor: "沙特至印度", amount: 200, cost: 5.59 }, { corridor: "沙特至印度", amount: 500, cost: 3.07 }, { corridor: "UAE 至印度", amount: 200, cost: 3.72 }, { corridor: "UAE 至印度", amount: 500, cost: 2.19 },
  ] : [
    { corridor: "Saudi Arabia to India", amount: 200, cost: 5.59 }, { corridor: "Saudi Arabia to India", amount: 500, cost: 3.07 }, { corridor: "UAE to India", amount: 200, cost: 3.72 }, { corridor: "UAE to India", amount: 500, cost: 2.19 },
  ];
  const title = lang === "zh" ? "印度小额汇款成本随单笔金额下降" : "Small-ticket remittance costs to India fall as ticket size rises";
  const caption = lang === "zh" ? "世界银行 2025 年第三季度价格快照。固定费用对 200 美元汇款影响明显；该快照不能乘以年度流量推算 UR 收入。" : "World Bank price snapshot for Q3 2025. Fixed fees weigh more heavily on USD 200 transfers; the snapshot cannot be multiplied by annual flows to estimate UR revenue.";
  return (
    <Figure title={title} kicker={lang === "zh" ? "价格痛点" : "Pricing pain point"} caption={caption} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "走廊" : "Corridor"}</th><th scope="col">{lang === "zh" ? "汇款金额（美元）" : "Transfer (USD)"}</th><th scope="col">{lang === "zh" ? "平均成本" : "Average cost"}</th></tr></thead><tbody>{rows.map(row => <tr key={`${row.corridor}-${row.amount}`}><th scope="row">{row.corridor}</th><td>{row.amount}</td><td>{row.cost}%</td></tr>)}</tbody></table>
    }>
      <div className="cost-chart" role="img" aria-label={caption}>{rows.map(row => <div className="cost-row" key={`${row.corridor}-${row.amount}`}><span>{row.corridor}<small>USD {row.amount}</small></span><div><i style={{ width: `${(row.cost / 6) * 100}%` }} /><b>{row.cost}%</b></div></div>)}</div>
    </Figure>
  );
}

export function Charts({ lang }: { lang: Language }) {
  return <div className="chart-grid"><PriorityChart lang={lang}/><MacroPools lang={lang}/><TradeProxy lang={lang}/><GulfComposition lang={lang}/><TicketCost lang={lang}/></div>;
}
