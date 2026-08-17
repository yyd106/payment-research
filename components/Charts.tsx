import type { CSSProperties, ReactNode } from "react";

type Language = "zh" | "en";

const years = [2023, 2024, 2025];

function Figure({ title, kicker, caption, dataLabel, children, table }: {
  title: string;
  kicker: string;
  caption: string;
  dataLabel: string;
  children: ReactNode;
  table: ReactNode;
}) {
  return (
    <figure className="data-figure">
      <div className="figure-heading">
        <p>{kicker}</p>
        <h3>{title}</h3>
      </div>
      {children}
      <figcaption>{caption}</figcaption>
      <details className="chart-data">
        <summary>{dataLabel}</summary>
        <div className="table-scroll" role="region" aria-label={dataLabel}>{table}</div>
      </details>
    </figure>
  );
}

function DirectionalFlowChart({ lang }: { lang: Language }) {
  const gulf = [50.6, 54.8, 64.7];
  const europe = [19.7, 20.7, 23.3];
  const x = [76, 310, 544];
  const y = (value: number) => 300 - (value / 70) * 232;
  const labels = lang === "zh"
    ? {
        title: "两组候选市场的个人汇款规模代理",
        kicker: "方向性流量信号",
        gulf: "海湾至四个收款市场",
        europe: "欧洲至亚洲复合代理",
        caption: "两条线都主要来自个人汇款。它们用于判断资金方向和数量级，不是企业付款市场规模，也不是优先级排名。",
        year: "年度标签",
        data: "查看图表数据",
      }
    : {
        title: "Personal-remittance proxies for two candidate markets",
        kicker: "Directional flow signals",
        gulf: "Gulf to four recipient markets",
        europe: "Europe-to-Asia composite proxy",
        caption: "Both series are primarily personal-remittance measures. They show direction and order of magnitude, not B2B market size or a priority ranking.",
        year: "Year label",
        data: "View chart data",
      };

  return (
    <Figure title={labels.title} kicker={labels.kicker} caption={labels.caption} dataLabel={labels.data} table={
      <table><caption className="sr-only">{labels.title}</caption><thead><tr><th scope="col">{labels.year}</th><th scope="col">{labels.gulf}</th><th scope="col">{labels.europe}</th></tr></thead><tbody>{years.map((year, i) => <tr key={year}><th scope="row">{year}</th><td>{gulf[i]}</td><td>{europe[i]}</td></tr>)}</tbody></table>
    }>
      <div className="chart-scroll" role="region" aria-label={labels.title}>
        <svg className="line-chart" viewBox="0 0 620 350" role="img" aria-labelledby="direction-chart-title direction-chart-desc">
          <title id="direction-chart-title">{labels.title}</title>
          <desc id="direction-chart-desc">{labels.caption}</desc>
          {[0, 20, 40, 60].map((tick) => <g key={tick}><line x1="64" y1={y(tick)} x2="560" y2={y(tick)} className="grid-line"/><text x="50" y={y(tick) + 4} textAnchor="end" className="axis-label">{tick}</text></g>)}
          <polyline points={gulf.map((value, i) => `${x[i]},${y(value)}`).join(" ")} className="line gulf-line" />
          <polyline points={europe.map((value, i) => `${x[i]},${y(value)}`).join(" ")} className="line europe-line" />
          {gulf.map((value, i) => <g key={`g-${years[i]}`}><circle cx={x[i]} cy={y(value)} r="6" className="gulf-dot"/><text x={x[i]} y={y(value) - 13} textAnchor="middle" className="value-label">{value}</text></g>)}
          {europe.map((value, i) => <g key={`e-${years[i]}`}><circle cx={x[i]} cy={y(value)} r="6" className="europe-dot"/><text x={x[i]} y={y(value) + 22} textAnchor="middle" className="value-label">{value}</text></g>)}
          {years.map((year, i) => <text key={year} x={x[i]} y="326" textAnchor="middle" className="axis-label">{year}</text>)}
        </svg>
      </div>
      <div className="legend"><span><i className="swatch gulf" />{labels.gulf}</span><span><i className="swatch europe" />{labels.europe}</span><span>{lang === "zh" ? "单位：USD billion" : "Unit: USD billion"}</span></div>
    </Figure>
  );
}

function MacroPools({ lang }: { lang: Language }) {
  const pools = lang === "zh" ? [
    { name: "拉美和加勒比个人汇款流入", values: [157.0, 165.6, 173.7], note: "2025：IDB 估计", max: 180 },
    { name: "美国个人汇款支出", values: [98.3, 103.2, null], note: "2025：WDI 尚未发布", max: 120 },
    { name: "撒哈拉以南非洲个人汇款流入", values: [52.2, 57.2, 56.0], note: "2025：预测", max: 65 },
  ] : [
    { name: "Latin America and Caribbean remittance inflows", values: [157.0, 165.6, 173.7], note: "2025: IDB estimate", max: 180 },
    { name: "US personal-remittance outflows", values: [98.3, 103.2, null], note: "2025: not yet available in WDI", max: 120 },
    { name: "Sub-Saharan Africa remittance inflows", values: [52.2, 57.2, 56.0], note: "2025: forecast", max: 65 },
  ];
  const title = lang === "zh" ? "三类地区或汇出国个人汇款资金池" : "Three regional or origin-country remittance pools";
  const caption = lang === "zh" ? "每个小图使用独立纵轴，只能观察自身数量级和变化，不能横向比较走廊吸引力。" : "Each panel uses its own scale. Use it to inspect one pool, not to compare corridor attractiveness across pools.";
  const dataLabel = lang === "zh" ? "查看图表数据" : "View chart data";

  return (
    <Figure title={title} kicker={lang === "zh" ? "宏观背景" : "Macro context"} caption={caption} dataLabel={dataLabel} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "资金池" : "Pool"}</th>{years.map(year => <th scope="col" key={year}>{year}</th>)}</tr></thead><tbody>{pools.map(pool => <tr key={pool.name}><th scope="row">{pool.name}</th>{pool.values.map((value, i) => <td key={years[i]}>{value ?? (lang === "zh" ? "未发布" : "Not available")}</td>)}</tr>)}</tbody></table>
    }>
      <div className="macro-grid">
        {pools.map((pool) => <section className="macro-card" key={pool.name}><h4>{pool.name}</h4><p>{pool.note}</p><div className="mini-bars">{pool.values.map((value, i) => <div className="mini-bar-column" key={years[i]}><span>{value ?? "—"}</span><i style={{ height: value == null ? 0 : `${(value / pool.max) * 100}%` }} className={i === 2 ? "marked" : ""}/><small>{years[i]}</small></div>)}</div></section>)}
      </div>
      <div className="legend"><span>{lang === "zh" ? "单位：USD billion" : "Unit: USD billion"}</span></div>
    </Figure>
  );
}

function TradeProxy({ lang }: { lang: Language }) {
  const series = lang === "zh" ? [
    { name: "新加坡与欧盟", values: [56.0, 52.0, 54.0], className: "trade-a" },
    { name: "香港与欧盟", values: [65.0, 63.0, 63.0], className: "trade-b" },
    { name: "香港与中东", values: [26.6, 24.1, 24.7], className: "trade-c" },
  ] : [
    { name: "Singapore–EU", values: [56.0, 52.0, 54.0], className: "trade-a" },
    { name: "Hong Kong–EU", values: [65.0, 63.0, 63.0], className: "trade-b" },
    { name: "Hong Kong–Middle East", values: [26.6, 24.1, 24.7], className: "trade-c" },
  ];
  const title = lang === "zh" ? "亚洲与欧洲、中东的部分贸易额代理" : "Selected trade-value proxy between Asia, Europe and the Middle East";
  const caption = lang === "zh" ? "这是部分双向货物贸易额，只反映企业结算活动的数量级，不是单向支付流量或 UR 可处理金额。" : "These are selected two-way merchandise-trade values. They indicate the scale of settlement activity, not one-way payment flows or UR-addressable volume.";
  const max = 150;
  const totals = [148.0, 139.0, 142.0];
  const dataLabel = lang === "zh" ? "查看图表数据" : "View chart data";

  return (
    <Figure title={title} kicker={lang === "zh" ? "企业付款代理" : "Corporate-payment proxy"} caption={caption} dataLabel={dataLabel} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "组成" : "Component"}</th>{years.map(year => <th scope="col" key={year}>{year}</th>)}</tr></thead><tbody>{series.map(item => <tr key={item.name}><th scope="row">{item.name}</th>{item.values.map((value, i) => <td key={years[i]}>{value}</td>)}</tr>)}</tbody></table>
    }>
      <div className="stacked-chart" role="img" aria-label={caption}>{years.map((year, yearIndex) => <div className="stacked-row" key={year}><strong>{year}</strong><div className="stacked-track">{series.map(item => <span key={item.name} className={item.className} style={{ width: `${(item.values[yearIndex] / max) * 100}%` } as CSSProperties} title={`${item.name}: ${item.values[yearIndex]}`}><b>{item.values[yearIndex]}</b></span>)}</div><em>≈{totals[yearIndex]}</em></div>)}</div>
      <div className="legend">{series.map(item => <span key={item.name}><i className={`swatch ${item.className}`} />{item.name}</span>)}<span>{lang === "zh" ? "单位：USD billion" : "Unit: USD billion"}</span></div>
    </Figure>
  );
}

function GulfComposition({ lang }: { lang: Language }) {
  const items = lang === "zh" ? [
    { name: "印度", value: 35.1, className: "gulf-a" },
    { name: "巴基斯坦", value: 17.2, className: "gulf-b" },
    { name: "孟加拉", value: 8.4, className: "gulf-c" },
    { name: "菲律宾", value: 4.0, className: "gulf-d" },
  ] : [
    { name: "India", value: 35.1, className: "gulf-a" },
    { name: "Pakistan", value: 17.2, className: "gulf-b" },
    { name: "Bangladesh", value: 8.4, className: "gulf-c" },
    { name: "Philippines", value: 4.0, className: "gulf-d" },
  ];
  const total = 64.7;
  const title = lang === "zh" ? "海湾个人汇款规模代理的收款市场构成" : "Recipient-market mix in the Gulf remittance proxy";
  const caption = lang === "zh" ? "印度约占混合方法代理的 54%。印度使用 FY2024-25 暂定代理值，各市场统计期间和方法并不完全一致。" : "India represents about 54% of this mixed-method proxy. India uses a provisional FY2024-25 proxy, and periods and methods differ across markets.";
  const dataLabel = lang === "zh" ? "查看图表数据" : "View chart data";

  return (
    <Figure title={title} kicker="2025" caption={caption} dataLabel={dataLabel} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "收款市场" : "Recipient market"}</th><th scope="col">{lang === "zh" ? "金额（USD billion）" : "Value (USD billion)"}</th><th scope="col">{lang === "zh" ? "占比" : "Share"}</th></tr></thead><tbody>{items.map(item => <tr key={item.name}><th scope="row">{item.name}</th><td>{item.value}</td><td>{(item.value / total * 100).toFixed(1)}%</td></tr>)}</tbody></table>
    }>
      <div className="chart-scroll" role="region" aria-label={title}>
        <div className="composition-bar" role="img" aria-label={caption}>{items.map(item => <span key={item.name} className={item.className} style={{ width: `${(item.value / total) * 100}%` }}><b>{item.value}</b></span>)}</div>
      </div>
      <div className="legend">{items.map(item => <span key={item.name}><i className={`swatch ${item.className}`} />{item.name} {item.value}</span>)}<span>{lang === "zh" ? "合计 USD 64.7bn" : "Total USD 64.7bn"}</span></div>
    </Figure>
  );
}

function ConsumerCostSnapshot({ lang }: { lang: Language }) {
  const rows = lang === "zh" ? [
    { label: "沙特至印度 · 样本平均", cost: 5.59 },
    { label: "UAE 至印度 · 样本平均", cost: 3.72 },
    { label: "UAE 至印度 · Emirates NBD", cost: 0.77 },
    { label: "UAE 至印度 · Remitly 银行入账", cost: 1.04 },
  ] : [
    { label: "Saudi Arabia to India · sample average", cost: 5.59 },
    { label: "UAE to India · sample average", cost: 3.72 },
    { label: "UAE to India · Emirates NBD", cost: 0.77 },
    { label: "UAE to India · Remitly bank deposit", cost: 1.04 },
  ];
  const title = lang === "zh" ? "同一消费者市场的价格差异很大" : "Consumer prices vary widely within the same market";
  const caption = lang === "zh" ? "世界银行 2025 年第三季度 USD 200 价格快照。它说明零售痛点分布不均，不代表 BFI 批发成本，也不能乘以年度流量推算 UR 收入。" : "World Bank Q3 2025 price snapshot for USD 200 transfers. It shows uneven retail pain, not BFI wholesale cost, and cannot be multiplied by annual flows to estimate UR revenue.";
  const dataLabel = lang === "zh" ? "查看图表数据" : "View chart data";

  return (
    <Figure title={title} kicker={lang === "zh" ? "价格证据边界" : "Pricing evidence boundary"} caption={caption} dataLabel={dataLabel} table={
      <table><caption className="sr-only">{title}</caption><thead><tr><th scope="col">{lang === "zh" ? "样本" : "Sample"}</th><th scope="col">{lang === "zh" ? "总成本" : "Total cost"}</th></tr></thead><tbody>{rows.map(row => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.cost}%</td></tr>)}</tbody></table>
    }>
      <div className="cost-chart" role="img" aria-label={caption}>{rows.map(row => <div className="cost-row" key={row.label}><span>{row.label}<small>USD 200</small></span><div><i style={{ width: `${(row.cost / 6) * 100}%` }} /><b>{row.cost}%</b></div></div>)}</div>
    </Figure>
  );
}

export function Charts({ lang }: { lang: Language }) {
  return <div className="chart-grid"><DirectionalFlowChart lang={lang}/><MacroPools lang={lang}/><TradeProxy lang={lang}/><GulfComposition lang={lang}/><ConsumerCostSnapshot lang={lang}/></div>;
}
