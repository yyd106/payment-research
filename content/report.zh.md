# UR 跨境支付走廊：流量信号、服务缺口假设与验证顺序（2023–2025）

> 版本：2026-08-17（结构重写与 CPN/BFI 补充）<br>
> 研究对象：六组跨境资金流及其对 UR 试点选择的意义<br>
> 用途：市场研究与试点设计参考，不构成法律、监管或投资意见<br>
> 金额单位：流量统一使用 USD billion（十亿美元）。`64.7` 表示 USD 64.7 billion，即 647 亿美元

## 一、结论：公开数据只够形成两个试点假设

公开数据能够回答“哪里长期有跨境资金流”，但还不能证明“某类企业客户没有被服务”，更不能证明 UR 在那里可以赚钱。本报告因此不把六组走廊排成上线顺序，而是把证据收束为两个可以并行验证的付款假设。

| 首批验证假设 | 公开数据已经说明什么 | 仍然缺少什么 | 当前决定 |
|---|---|---|---|
| UAE 机构资金付至印度企业银行账户 | 海湾至印度存在长期、明显偏向印度的个人汇款流；印度已有公开的 Circle Payments Network（CPN）本币付款路径 | 真实企业客户流量、UR 账户中的企业对企业（B2B）路径、第二条独立付款路径、全包成本和成功率 | 进入生产验证，不据此上线 |
| 瑞士或欧洲机构资金付至印度或菲律宾 | 公开数据拼接出的个人汇款规模代理约为 USD 23.3bn；UR 的瑞士客户关系和 CHF/EUR 资金入口与该方向更接近 | 企业或平台的真实付款日志、具体收款人类型和用途、UR 账户中的付款路径、客户愿意支付的价格 | 与海湾假设并行验证 |

其他四组市场目前只能得出更弱的决定：非洲先缩小到具体国家和收款方式；新加坡、香港至欧洲和海湾必须先取得现有 Partner 的付款日志；拉美只跟随已经出现的客户流量；美国消费者业务继续暂缓。

UR 的机会也不是“使用稳定币”或“覆盖很多国家”。真正可能形成产品价值的是：在一个具体付款组合上，UR 能持续给出可接受的价格，完成合规审查和当地入账，并在主付款路径不可用时切换到经过验证的独立路径。

## 二、三种数字分别回答什么

公开市场没有一套同时覆盖所有国家、年份和客户类型的双边支付数据库。本报告只能使用三种不同证据。它们可以观察同一地区，但统计对象不同，不能相加，也不能使用同一个市场渗透率。

| 数字口径 | 实际统计的对象 | 它回答的问题 | 可以支持的判断 | 不能支持的判断 |
|---|---|---|---|---|
| 双边个人汇款 | 某个来源地的个人汇款流入某个收款市场 | 特定方向上的家庭汇款大约有多大 | 判断币种方向、个人收款基础设施和消费者价格基准 | 企业工资、供应商付款、平台结算的需求量或 UR 收入 |
| 地区汇款总额 | 一个地区从全球收到的个人汇款，或一个国家向全球汇出的个人汇款宏观口径 | 整个收款地区或汇出国的个人资金池有多大 | 选择值得继续拆分的地区 | 某个来源地贡献多少、某条双边走廊有多大、企业付款有多大 |
| 双向货物贸易额 | 两个地区之间两个方向的货物进出口总额 | 企业跨境结算活动大约处于什么数量级 | 判断是否值得取得企业付款日志继续研究 | 单向付款额、服务商可处理金额、UR 可获取市场份额 |

例如，拉美和加勒比 2025 年约 USD 173.7bn 的地区汇款总额，回答的是“全球向拉美家庭汇入了多少个人汇款”。它不回答“欧洲或海湾向拉美汇了多少”，也不包含商户结算和供应商付款。

表中的证据状态也必须分开理解：实际值来自已经发布的统计序列；暂定值仍可能修订；估算由公开总量和占比计算；预测描述未来或尚未齐备的年度；复合规模代理把不同公开序列拼在一起，只用于看数量级。

## 三、从“市场有钱”到“UR 能赚钱”还要完成五项验证

UR 最终出售的不是“印度覆盖”或“拉美覆盖”，而是一个具体付款组合：付款人所在司法管辖区、付款人类型、入金币种和方式、付款用途、收款人类型、收款币种和方式、金额范围及服务时效。宏观走廊只负责第一轮筛选。

一个付款组合要成为可售服务，需要依次通过六项检查：

1. 市场中存在足够的相关资金流。
2. 目标客户确实在重复执行这类付款，并对现有结果不满意。
3. UR 和汇出端 Partner 有权签约、收取资金并发起付款。
4. UR 的 CPN 账户或备用服务商支持这个付款人、收款人、用途、金额和收款方式组合。
5. 收款端金融机构能够持续报价、完成当地付款，并提供独立的备用路径。
6. 全包成本、成功率、到账时间、退款和资金占用达到客户要求及 UR 的内部盈利门槛。

当前公开数据主要覆盖第 1 项，并为第 2 项提供少量区域性背景。第 3 至第 6 项必须用法律意见、客户付款日志、生产配置、真实报价和真实付款验证。

### 客户痛点、服务商成本和 UR 产品不能混成一件事

| 观察对象 | 现实中的问题 | 它如何影响机会判断 |
|---|---|---|
| 客户结果 | 付款前不知道实收金额和时间，付款中反复补资料，付款后难以解释失败、退款和费用 | 只有客户访谈、工单、付款日志或竞品实测才能证明某个具体付款组合存在缺口 |
| 服务商成本 | 单向流导致目标货币需要持续补充，还要承担 FX、流动性、合规和本地合作方成本 | 这是供应侧成本，不是客户痛点；只有当成本转化为高价、限额、停报价或延迟时，客户才会感知 |
| UR 的产品 | 聚合报价、统一资料和状态、保存付款证据、管理主备路径 | 这些能力只有在结果优于客户现有服务时才构成差异，而不是功能清单本身 |

消费者汇款 App、全球付款 API、银行和 CPN 也不是同一类竞争者。消费者产品已经能在主流走廊提供低价银行或现金汇款；Wise Platform、Nium、Thunes、TerraPay、Airwallex 等提供多国付款接口；银行提供账户、FX 和清算；CPN 提供机构间报价、合规信息交换和稳定币结算。本文所说的 Partner，是与终端客户直接签约或提供入金的合作机构。UR 需要比较的是客户最终购买的完整结果，而不是把这些机构放进同一张“国家覆盖数”排名。

因此，“公开资料没有证明某项服务已经满足”只能形成待验证问题，不能直接写成“需求没有被满足”。

## 四、CPN 改变的是资金组织方式，不是最后一公里事实

传统跨境服务商通常会在整个网络内轧差，而不是只在一条双边走廊内寻找反向付款。以印度为例，服务商可以用其他客户汇出的 INR、已有 INR 库存和反向交易抵消部分印度入账；仍然无法抵消的部分，才需要外部换汇、补充流动性或调整资金头寸。Wise 的公开说明和监管文件都表明，反向资金复用只是部分交易的结算方式，不会消除所有残余头寸。[Wise：How does Wise work](https://wise.com/gb/blog/how-does-wise-work)、[Wise：SEC registration statement](https://www.sec.gov/Archives/edgar/data/2099039/000119312526151439/d19735d20fr12b.htm)

CPN 不要求 UR 自己在每个收款国长期持有法币，但它没有让单向流消失：

1. UR 以 USDC 请求一个具体付款组合的 Quote（即一次即时报价）。
2. Beneficiary Financial Institution（BFI，收款端金融机构）在当时愿意承接时，返回汇率、费用、有效期和预计法币付款时间。
3. BFI 收到 USDC 后，需要持有、买入或借入当地法币。
4. BFI 或其下游银行、支付机构通过当地轨道付款。
5. 当地法币不足、市场波动或合规成本上升时，结果会表现为点差扩大、限额降低、无报价、补资料或退款。

所以，一个稳定 BFI 可以让 UR 不依赖客户的反向资金流，却不能消除当地法币流动性成本。BFI 的全包价格通常包含本地付款费、USDC 与当地法币之间的 FX 点差、资金占用、合规审查、下游合作方费用和失败退款风险。[Circle：CPN field guide](https://www.circle.com/blog/circle-payments-network-cpn-a-concise-field-guide-for-prospective-network-participants)、[Circle：Quotes](https://developers.circle.com/cpn/concepts/quotes)

### “国家允许”“账户有路径”和“付款成功”是三种状态

Circle 的国家表说明 CPN 被允许在哪些国家运营，但该页面明确提醒，并非所有允许国家都有当前可用路径。实际路径还取决于 UR 账户配置、目的国、币种、付款方式、金额和 use case（付款场景）。[Circle：CPN supported countries](https://developers.circle.com/cpn/references/compliance/supported-countries)、[Circle：Get supported payment routes](https://developers.circle.com/api-reference/cpn/cpn-platform/list-routes)

| 收款市场 | 本地付款市场是否显示单一机构垄断 | CPN 公开证据 | 对 UR 的含义 |
|---|---|---|---|
| 印度 | 否。NEFT、IMPS 和 RTGS 有广泛银行参与，轨道本身成本较低 | Circle 已宣布一条由 Saber 支持的 INR 付款路径，公开文档列出 IMPS、NEFT 和 RTGS | 可以进入生产测试；仍需确认 B2B/B2P、金额、价格、下游银行和第二条独立路径 |
| 巴基斯坦 | 否。Raast 有多家银行和支付机构参加 | 国家在允许清单中，但截至 2026-08-17，公开目的国和法币列表没有 PK 或 PKR | 不能公开宣称走廊已可用；先查 UR 生产配置、BFI 和当地授权银行 |
| 孟加拉 | 未发现全国性垄断证据，但跨境资金必须经过授权银行，链路层级更多 | 国家在允许清单中，但当前公开路径未列 BDT；当地仍限制虚拟资产交易 | 四国中不确定性最高。2026 年新规则允许授权银行与境外数字 PSP 合作，并开放特定小额 B2C 出口收款，但 FX、账务、KYC 和报送仍由授权银行控制 |
| 菲律宾 | 否。InstaPay、PESONet 及汇款机构参与面较广 | 国家在允许清单中，但截至 2026-08-17，公开目的国列表没有 PH；公开付款方式枚举出现 InstaPay 和 PESONet | 本地轨道不是主要疑点；先确认 UR 账户是否有生产路径以及有几条独立付款链 |

Circle 于 2026 年 2 月宣布由 Saber 支持印度 INR 付款路径，覆盖 IMPS、NEFT 和 RTGS；这一公告证明至少有一条公开路径，不证明 UR 账户已启用全部付款场景，也不证明存在第二个 BFI。[Circle：India local-currency payout announcement](https://www.circle.com/blog/circle-payments-network-expands-local-currency-payout-corridors-across-asia-the-middle-east-europe-and-the-us)

印度、巴基斯坦和菲律宾的公开资料不支持“本地付款被 BFI 垄断”这一结论。真正可能集中的是 CPN 内部针对某个具体付款组合的报价来源；Circle 没有公开逐路径 BFI 数量，因此只能从 UR 的生产账户和连续 Quote 得到答案。[RBI：NEFT FAQ](https://www.rbi.org.in/scripts/FAQView.aspx?Id=60)、[SBP：Raast P2P](https://www.sbp.org.pk/our-subsidiaries/raast/raast-person-to-person)、[BSP：Payment systems](https://www.bsp.gov.ph/SitePages/PaymentsAndSettlements/PaymentsAndSettlements.aspx/)

Quote 也不是到账保证。创建付款后，BFI 仍可审查具体付款人、收款人和用途，发出 Request for Information（RFI，补充资料请求）；收款账户或本地银行仍可能拒绝，失败后还可能发生稳定币退款。[Circle：RFI](https://developers.circle.com/cpn/concepts/compliance/rfis)、[Circle：Payment states and refunds](https://developers.circle.com/cpn/concepts/payments/component-states-and-workflows)

Circle 的网络数据只能说明 CPN 正在成长。2025 年第三季度有 29 家机构 enrolled（登记加入）、55 家接受资格审核；截至 2026 年 2 月 20 日，分别为 55 家和 74 家。截至 2026 年 3 月 31 日，按此前 30 天活动计算的年化交易量为 USD 8.3bn，对应约 USD 0.68–0.69bn 的最近 30 天交易量。公开材料没有拆分汇出端机构（OFI）、收款端机构（BFI）、生产状态或具体路径，因此既不能证明某条路径有冗余，也不能证明它一定缺少 BFI。[Circle 2025 Q3 业绩材料](https://www.sec.gov/Archives/edgar/data/1876042/000187604225000045/nolivelinksversion_q3202.htm)、[Circle 2025 Q4 业绩材料](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000032/final_circlereportsfourt.htm)、[Circle 2026 Q1 业绩材料](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000148/final_05x11q1epr30.htm)

## 五、六组走廊的证据与当前决策

下表把不同统计口径放在一起，只是为了显示每组研究目前推进到了哪一步，不用于比较市场大小。

| 研究范围 | 最新可见规模 | 数字口径 | 公开证据能够说明什么 | 公开证据不能说明什么 | 当前决策 |
|---|---:|---|---|---|---|
| UAE、沙特至印度、巴基斯坦、孟加拉、菲律宾 | USD 64.7bn（2025 标签） | 双边个人汇款混合方法代理 | 个人资金长期单向流入四个收款市场，印度和巴基斯坦占主要部分 | 企业和平台需求、UR 可获取流量、BFI 成本 | 先验证 UAE 至印度；其他国家先查生产路径 |
| 欧洲、瑞士至印度、菲律宾、印尼、越南 | USD 23.3bn（2025 标签） | 公开数据拼接的复合规模代理 | 已计来源存在可观个人资金流 | 完整欧洲规模、企业付款规模、整个地区趋势 | 与海湾假设并行验证 |
| 新加坡、香港与欧洲、海湾 | USD 142.0bn（2025） | 部分双向货物贸易 | 企业结算活动数量级较大 | 单向付款、UR 客户需求和可处理金额 | 没有 Partner 日志前不立项 |
| 全球至撒哈拉以南非洲 | USD 56.0bn（2025 预测） | 地区个人汇款总额 | 整个地区的个人收款资金池和高成本背景 | 欧洲或海湾贡献、某国 B2B/B2P 机会 | 先缩到具体国家和收款方式 |
| 全球至拉美和加勒比 | USD 173.7bn（2025 估计） | 地区个人汇款总额 | 地区个人汇款资金池很大 | 特定来源走廊、企业付款和 UR 优势 | 只跟随已有客户流量 |
| 美国个人汇款支出宏观口径 | USD 103.2bn（2024） | 汇出国个人汇款总额 | 美国是大型汇出市场 | 消费者 App 成交额、2025 可比实绩、UR 可服务市场 | 继续暂缓自营消费者业务 |

## 六、海湾至南亚和菲律宾：单向流让 CPN 值得测试

这组数据证明了大额、持续的个人资金流，不能证明企业批量付款已经形成未满足需求。其价值在于提出一个供应侧假设：当传统服务商需要持续补充 INR、PKR、BDT 和 PHP 时，CPN 能否通过 BFI 报价降低 UR 自己维护当地法币头寸的成本。

### 个人汇款规模代理如何构成

金额单位：USD billion。

| 收款市场 | 2023 标签 | 2024 标签 | 2025 标签 | 计算方法与期间 |
|---|---:|---:|---:|---|
| 印度 | 29.1 | 30.7 | 35.1 | 印度 FY2022-23、FY2023-24、FY2024-25 的 BoP 私人转移贷方代理值，乘以 RBI FY2023-24 调查中的 UAE 19.2% 和沙特 6.7%；最后一年为暂定值 |
| 巴基斯坦 | 11.2 | 13.0 | 17.2 | 巴基斯坦央行披露的沙特和 UAE 汇款，按财政年度结束年份归类 |
| 孟加拉 | 6.8 | 7.4 | 8.4 | 孟加拉央行披露的沙特和 UAE 汇款，按财政年度结束年份归类 |
| 菲律宾 | 3.5 | 3.7 | 4.0 | 菲律宾央行直接披露的沙特和 UAE cash remittances，按自然年归类 |
| 混合方法合计 | 50.6 | 54.8 | 64.7 | 统计期间和方法不同，只用于观察数量级，不用于计算严格增长率 |

印度总额依次约为 USD 112.5bn、USD 118.7bn 和 USD 135.4bn，再乘以 25.9% 的 UAE 与沙特来源占比。这里的私人转移贷方包含家庭赡养、储蓄及部分非居民存款在印度的本地提款，不是纯粹的 P2P 工资汇款，也不是 RBI 发布的双边实际流量。[印度议会：FY2022-23 与 FY2023-24 私人转移贷方](https://eparlib.sansad.in/bitstream/123456789/2989690/1/18_External_Affairs_6.pdf)、[印度 Economic Survey 2025-26](https://www.indiabudget.gov.in/economicsurvey/doc/eschapter/echap04.pdf)、[RBI：Changing Dynamics of India’s Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)

菲律宾改用央行 Table 11 直接披露的沙特和 UAE cash remittances，不再用全国总额乘来源占比。BSP 同时提醒，经美国总部汇款公司或美国代理行处理的交易可能被记录为美国来源，因此来源国数据仍可能失真。[BSP：Table 11](https://www.bsp.gov.ph/Statistics/External/Table%2011.pdf)

### 消费者价格不能证明 BFI 成本

世界银行 2025 年第三季度价格快照显示，发送 USD 200 时，沙特至印度的样本平均成本为 5.59%，UAE 至印度为 3.72%；发送 USD 500 时分别降至 3.07% 和 2.19%。但 UAE 至印度的同一批样本中，Emirates NBD 的 USD 200 报价成本为 0.77%，Remitly 的一个银行入账报价为 1.04%。消费者价格痛点在同一走廊内分布不均，UR 若做零售产品，竞争基准应是低价数字渠道，而不是平均值。[World Bank：Saudi Arabia to India](https://remittanceprices.worldbank.org/corridor/Saudi%20Arabia/India)、[World Bank：UAE to India](https://remittanceprices.worldbank.org/corridor/United%20Arab%20Emirates/India)

这些样本包含发送费和 FX margin，不是 CPN 的 BFI 批发报价。公开资料无法回答印度、巴基斯坦、孟加拉或菲律宾的 BFI 是否昂贵；这个问题只能通过同一金额、时段和付款组合的生产 Quote 比较。[World Bank：RPW Methodology](https://remittanceprices.worldbank.org/methodology)

### 当前最小结论

- 已证实：四个市场存在长期个人流入，方向明显偏向收款国；印度、巴基斯坦和菲律宾的本地轨道没有显示全国性商业垄断。
- 合理推断：这种方向不平衡会增加传统服务商补充目标货币的需要；CPN 可以把这项工作转给报价 BFI。
- 尚未证实：平台工资、供应商付款或 B2P 是这些市场的前三大采购痛点；CPN 对相关组合有两个独立 BFI；UR 的全包成本优于现有服务。

因此，第一项生产测试应收窄为 UAE 受监管 Partner 或企业向印度企业银行账户付款。巴基斯坦只有在 UR 账户返回 PKR 路径和合法 use case 后再进入 Quote 测试；孟加拉先完成当地法律与 BFI 结构确认；菲律宾可以作为印度之外的备选收款市场。

## 七、欧洲和瑞士至亚洲：与 UR 更匹配，但 B2B 需求仍待验证

这组数据与海湾组一样，主要来自个人汇款。它能够说明相关币种方向存在资金活动，不能直接证明供应商付款、平台卖家结算或全球用工付款的规模。

金额单位：USD billion。

| 收款市场 | 2023 标签 | 2024 标签 | 2025 标签 | 已计入的欧洲来源 |
|---|---:|---:|---:|---|
| 印度 | 15.6 | 16.5 | 18.8 | 英国、德国、比利时、爱尔兰、荷兰、瑞士、法国、意大利和西班牙；使用同一组印度财政年度总额和 RBI FY2023-24 来源占比 |
| 菲律宾 | 3.8 | 3.9 | 4.0 | 菲律宾央行的欧洲地区个人汇款 |
| 印尼 | 0.3 | 0.3 | 0.5 | Bank Indonesia 的欧洲地区移工汇款 |
| 越南 | 未计入 | 未计入 | 未计入 | 有全国总额，缺少可比的欧洲来源数据 |
| 复合规模代理 | 19.7 | 20.7 | 23.3 | 印度是估算，菲律宾和印尼是地区数据；不是数学下限，也不是完整市场规模 |

RBI 调查显示，GCC 国家在印度汇款来源中的份额从 FY2016-17 表内分项合计的 46.7% 降至 FY2023-24 的 37.9%，美国达到 27.7%，英国从 3.0% 升至 10.8%。这支持单独研究英国和印度之间的资金流，但不能证明整个欧洲来源持续增长。[RBI：Changing Dynamics of India’s Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)

FSB 2025 年数据能够证明跨境 B2B/B2P 在区域总体上仍有速度和透明度问题，但其样本方向、金额和统计总体与本报告的欧洲至亚洲组合不同，不能作为某条双边企业走廊的直接需求证据。[FSB：2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

欧洲方向仍值得与海湾方向并行验证，理由来自 UR 能力匹配，而不是宏观流量排名：UR 更接近 CHF/EUR 机构资金入口和欧洲机构客户关系。下一步应从现有客户或 Partner 取得真实付款日志，确认企业收款人、用途、金额、频率、现有费用、失败和对账成本；没有这些数据，不能把个人汇款代理值写成企业市场规模。

## 八、新加坡和香港与欧洲及海湾：贸易规模不能代替客户证据

公开资料没有完整的“亚洲企业向欧洲和海湾付款”数据库。以下数字只用于确认企业结算活动数量级。

金额单位：USD billion。

| 已计入的双向货物贸易 | 2023 | 2024 | 2025 | 数据边界 |
|---|---:|---:|---:|---|
| 新加坡与欧盟 | 56.0 | 52.0 | 54.0 | 欧元贸易额按年度平均汇率折算 |
| 香港与欧盟 | 65.0 | 63.0 | 63.0 | 两个方向的货物贸易 |
| 香港与中东 | 26.6 | 24.1 | 24.7 | 香港政府披露的美元金额 |
| 可见部分合计 | 148.0 | 139.0 | 142.0 | 未计新加坡与海湾、英国、瑞士和服务贸易 |

[European Commission：EU trade with Singapore](https://webgate.ec.europa.eu/isdb_results/factsheets/country/details_singapore_en.pdf)、[Hong Kong Trade and Industry Department：Hong Kong–EU Trade Relations](https://www.tid.gov.hk/en/our_work/statistics/trade_partners/eu.html)、[香港政府：2025 年中东贸易数据](https://www.info.gov.hk/gia/general/202603/18/P2026031800337.htm)

双向贸易额包含欧洲或海湾付向亚洲的反方向资金，也包含可能通过银行信用证、集团资金中心或其他方式结算的贸易。它不能说明 Airwallex、Wise、Nium、银行或现有财务系统在哪个具体环节没有满足客户。

因此，这组市场不应根据 USD 142.0bn 立项。只有现有 Partner 的账单、付款失败样本或财务流程显示 CHF 入口、实收金额、审批、发票匹配、退款或跨服务商对账正在造成可量化成本时，才进入产品验证。

## 九、全球至撒哈拉以南非洲：客户痛点强，交付风险也最强

这里能看到的是全球来源的地区个人汇款总额，不是欧洲或海湾至非洲的双边流量。世界银行公开序列显示，撒哈拉以南非洲 2023 和 2024 年收到约 USD 52.2bn 和 USD 57.2bn；2025 年约 USD 56.0bn 是预测，不是完整实际值，因此不能据此判断同比下降。[World Bank：Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT)、[World Bank：Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)

消费者价格痛点有更直接的证据：世界银行 2025 年第三季度样本中，向撒哈拉以南非洲发送 USD 200 的平均成本为 8.46%，在各地区中最高。FSB 报告还显示，非洲收款侧只有 24.2% 的批发跨境付款在一小时内入账。不过，这些是地区性指标，不能证明某个欧洲或海湾来源的 B2B/B2P 组合无人服务。[World Bank：RPW Q3 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)、[FSB：2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

非洲不能作为一条走廊采购。UR 必须先选定国家、收款人类型和银行账户或钱包，再验证当地 FX、周末流动性、姓名匹配、RFI、失败和退款。这里需要的是两条真正独立的付款路径，而不只是两个 BFI 名称；两家 BFI 如果依赖同一家当地银行或同一流动性来源，仍然属于同一个故障点。

## 十、全球至拉美和加勒比：大市场适合跟随客户，不适合凭总量进入

金额单位：USD billion。

| 年份 | 地区个人汇款流入 | 数据状态 |
|---|---:|---|
| 2023 | 157.0 | 世界银行 WDI 实际值 |
| 2024 | 165.6 | 世界银行 WDI 实际值 |
| 2025 | 173.7 | 美洲开发银行估计 |

两个机构的估算方法不同，不能用这张混合序列表计算精确增长率。2025 年估计中，墨西哥约 USD 62.5bn，中美洲约 USD 55.5bn，南美洲约 USD 35.3bn；墨西哥与中美洲的方向并不相同，因此地区总量不能替 UR 选择首个国家。[IDB：Remittances to LAC after the 2025 surge](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge)、[Banco de México：Remittances](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadroAnalitico&idCuadro=CA11&locale=es&sector=1)

主流个人汇款、PIX、SPEI、本地银行和现金网络已有 Remitly、Western Union、Wise、dLocal、EBANX、Bitso 等成熟替代方案。美国至墨西哥的 USD 200 汇款在世界银行 2025 年第三季度样本中平均成本为 4.54%；IDB 引用的行业数据称，Bitso 2024 年处理超过 USD 6.5bn 的美墨汇款。稳定币中段已经规模化，因此“使用稳定币”本身不能形成 UR 的差异。[World Bank：United States to Mexico](https://remittanceprices.worldbank.org/corridor/United%20States/Mexico)、[IDB：Stablecoins and remittances](https://www.iadb.org/en/blog/research-development/whats-impact-stablecoins-remittances-and-regulatory-risks)

拉美只应在现有 Partner 已有明确国家、收款方式和交易日志时验证。验证重点是收款人校验、当地税务字段、失败原因、退款和多服务商对账，而不是“是否覆盖拉美”。

## 十一、美国个人汇款支出：规模大，但不适合 UR 自营消费者业务

世界银行 WDI 当前记录的美国个人汇款支出宏观口径为：2023 年 USD 98.3bn、2024 年 USD 103.2bn。截至本次核验，2025 年可比实际值尚未发布。该指标包含个人转移和雇员报酬，不能直接当成消费者汇款 App 的成交额。[World Bank：Personal remittances paid](https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT)、[World Bank：WDI metadata](https://databank.worldbank.org/metadataglossary/world-development-indicators/series/BM.TRF.PWKR.CD.DT)

从 2026 年 1 月 1 日起，美国对部分消费者汇款征收 1% 税，但主要覆盖现金、money order（汇票类支付工具）和 cashier’s check（银行本票）等实物工具入金；从美国金融机构账户或美国发行的借记卡、信用卡入金通常不适用，企业付款也不在这一消费者汇款定义内。[美国国会：Public Law 119-21 §70604](https://www.congress.gov/bill/119th-congress/house-bill/1/text?lv=true)、[IRS：Remittance transfer tax](https://www.irs.gov/irb/2025-43_IRB)

UR 暂缓美国消费者业务的主要理由仍然是逐州牌照或持牌合作、消费者保护、反欺诈、拒付、全天客服、现金网络和获客成本。瑞士牌照和 CPN 接入不能明显降低这些成本。如果已有美国机构客户带来流量，应由持牌美国机构负责客户关系和入金，UR 只评估机构间结算或收款端编排。

## 十二、下一步用生产数据决定是否上线

首轮只验证三个具体付款组合，其中第三个组合以生产配置确实返回路径为前提：

1. UAE 受监管 Partner 或企业至印度企业银行账户：B2B 供应商付款，内部试验金额 USD 5,000–50,000。
2. 瑞士或欧洲机构至菲律宾企业或个人银行账户：B2B/B2P 平台付款，内部试验金额 USD 500–10,000。
3. UAE 受监管 Partner 至巴基斯坦个人银行账户或钱包：企业对个人（B2P）平台付款，内部试验金额 USD 100–2,000；CPN API 把这种发送方与收款人组合称为 B2C。没有 PKR 生产路径时停止该项。

这些金额只是覆盖小额、中额和较大额 Quote 行为的内部试验参数，不是市场平均客单价。

### 生产验证分四步

| 阶段 | 要取得的证据 | 这一阶段能够决定什么 |
|---|---|---|
| 客户证据 | 真实付款日志、当前费用、失败和退款样本、对账工时、客户要求的到账时效 | 问题是否真实、是否重复、客户是否愿意更换或付费 |
| 合法性与账户配置 | 签约和资金流法律意见；UR 账户中的目的国、币种、付款方式、use case、限额和所需字段 | 该组合能否进入 Quote，而不是只在国家允许清单中出现 |
| 连续 Quote | 至少覆盖工作日、周末、当地节假日和不同金额段；记录报价来源、原始中间价、全部费用、实收金额、有效期和预计时间 | BFI 报价是否持续、价格是否稳定、是否存在独立备选路径 |
| 真实小额付款 | 付款批准、RFI、当地实际入账、账单信息、失败、退款和异常升级 | Quote 之后的端到端结果能否达到客户要求 |

每个组合连续采集四周数据，至少记录：可报价路径数、全包成本和波动、付款批准率、RFI 率、P50/P95 实际到账时间（即 50% 和 95% 的付款分别在多久内到账）、失败率、退款时间、周末表现、收款方式和资金占用。

业务、合规和运营需要在试点前共同设定通过、暂停和退出门槛。本报告不替团队编造数值。最少要覆盖五类决定：

- 客户需求是否达到立项门槛。
- 汇出端和收款端责任是否已经被法律意见与合同确认。
- 是否存在两条真实试付过、下游银行或流动性来源不完全相同的付款路径；或者一条 CPN 路径加一条独立备用服务商路径。
- 到账、RFI、失败和退款是否达到目标客户提出的时效。
- 全包成本、UR 毛利和流动性占用是否达到内部财务门槛。

只有这组数据能够支持上线或停止决定。宏观流量和国家覆盖不能替代它。

## 十三、结论的证据边界

| 判断 | 当前证据强度 | 可以写到什么程度 |
|---|---|---|
| 海湾至四国存在较大的个人资金流 | 中 | 混合方法代理显示 2025 标签约 USD 64.7bn；不能计算严格增长率 |
| 欧洲和瑞士至亚洲规模约 USD 23.3bn | 中低 | 这是公开数据拼接的复合代理；不是下限，也不是完整市场规模 |
| 企业客户普遍缺少透明、可对账的服务 | 中低 | FSB 支持全球和区域层面的速度、成本及披露问题；具体走廊仍需客户和生产证据 |
| 印度、巴基斯坦、孟加拉或菲律宾 BFI 昂贵或被垄断 | 不足 | 公开资料不能证明；孟加拉只能证明银行中介和监管步骤更多 |
| 一个稳定 BFI 可以解决单向流 | 机制上部分成立 | 它让 UR 不必依赖反向客户流，但流动性、use case、下游银行、失败退款和备用路径仍然存在 |
| UR 在某条走廊有可盈利机会 | 尚未验证 | 只能写成试点假设，等待客户、法律、Quote、真实付款和单位经济共同验证 |

其余主要限制如下：

- 印度来源占比暂按 FY2023-24 应用于三年，可能高估或低估年度变化。
- 印度、巴基斯坦和孟加拉使用财政年度；菲律宾等市场主要使用自然年。年度标签不能当成完全一致的自然年序列。
- 2025 非洲数字是预测，2025 拉美数字是估计，美国 2025 WDI 实绩尚未发布。
- 世界银行 Remittance Prices Worldwide 是特定日期、金额和样本服务的消费者价格快照，不是全年成交均价、BFI 批发成本或 UR 单位经济。
- 服务商名单用于说明产品类型，不是完整市场份额或生产覆盖清单。
- 两个 BFI 名称不一定形成独立冗余；下游银行、FX 流动性来源和本地轨道也必须不同。

## 十四、主要数据源

- [World Bank：Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT)
- [World Bank：Personal remittances paid](https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT)
- [World Bank：WDI remittance metadata](https://databank.worldbank.org/metadataglossary/world-development-indicators/series/BX.TRF.PWKR.CD.DT)
- [World Bank：Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)
- [World Bank：Remittance Prices Worldwide Q3 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)
- [FSB：G20 Roadmap for Cross-border Payments, 2025](https://www.fsb.org/2025/10/g20-roadmap-for-cross-border-payments-consolidated-progress-report-for-2025/)
- [RBI：Changing Dynamics of India’s Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)
- [State Bank of Pakistan：FY2025 Statistical Supplement](https://www.sbp.org.pk/assets/document/publications/reports-annual-aarFY25-Statistical-Supplement-Complete-Statistical-Supplement.pdf)
- [Bangladesh Bank：Annual Remittance Data](https://www.bb.org.bd/en/index.php/econdata/bop_yearly/5)
- [Bangladesh Bank：2026 cross-border digital payment framework](https://www.bb.org.bd/mediaroom/circulars/fepd/jul292026fepd-125e.pdf)
- [Bangladesh Bank：2026 B2C export-platform rules](https://www.bb.org.bd/mediaroom/circulars/fepd/jun152026fepd-112e.pdf)
- [BSP：Overseas Filipinos’ Remittances Table 11](https://www.bsp.gov.ph/Statistics/External/Table%2011.pdf)
- [Bank Indonesia：Indonesian Migrant Workers’ Remittances](https://www.bi.go.id/SEKI/tabel/TABEL5_31.pdf)
- [European Commission：EU trade with Singapore](https://webgate.ec.europa.eu/isdb_results/factsheets/country/details_singapore_en.pdf)
- [Hong Kong Trade and Industry Department：Hong Kong–EU Trade Relations](https://www.tid.gov.hk/en/our_work/statistics/trade_partners/eu.html)
- [Inter-American Development Bank：2025 LAC remittance estimate](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge)
- [Circle：CPN](https://developers.circle.com/cpn)
- [Circle：Supported countries](https://developers.circle.com/cpn/references/compliance/supported-countries)
- [Circle：Supported payment routes](https://developers.circle.com/api-reference/cpn/cpn-platform/list-routes)
- [Circle：Supported payment methods](https://developers.circle.com/cpn/references/payments/supported-payment-methods)
- [Circle：India local-currency payout announcement](https://www.circle.com/blog/circle-payments-network-expands-local-currency-payout-corridors-across-asia-the-middle-east-europe-and-the-us)
- [RBI：MTSS Master Direction](https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=10868)
- [SBP：Raast](https://www.sbp.org.pk/our-subsidiaries/raast/raast-person-to-person)
- [Bangladesh Bank：Payment systems](https://www.bb.org.bd/en/index.php/financialsystems/paysystems)
- [Bangladesh Bank：Virtual asset circular](https://www.bb.org.bd/mediaroom/circulars/fepd/sep152022fepd24e.pdf)
- [BSP：PESONet participants](https://www.bsp.gov.ph/PaymentAndSettlement/PESONet%20Participants.pdf)
- [BSP：InstaPay participants](https://www.bsp.gov.ph/PaymentAndSettlement/Instapay%20Participants.pdf)
- [IRS：Remittance transfer tax](https://www.irs.gov/irb/2025-43_IRB)
