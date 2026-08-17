# UR Cross-border Payment Corridors: Flow Signals, Service-gap Hypotheses, and Validation Sequence (2023–2025)

> Version: 2026-08-17 (restructured with additional CPN/BFI analysis)<br>
> Scope: six groups of cross-border flows and what they mean for UR's pilot selection<br>
> Purpose: market research and pilot-design reference; not legal, regulatory, or investment advice<br>
> Amount unit: all flows are stated in USD billion. `64.7` means USD 64.7 billion, equivalent to 647 units of USD one hundred million

## 1. Conclusion: public data supports only two pilot hypotheses

Public data can show where cross-border money has moved consistently. It cannot yet prove that a particular type of business customer is underserved, much less that UR can make money there. This report therefore does not rank the six corridor groups as a launch sequence. Instead, it narrows the evidence into two payment hypotheses that can be validated in parallel.

| Initial validation hypothesis | What the public data already shows | What is still missing | Current decision |
|---|---|---|---|
| UAE institutional funds paid to Indian business bank accounts | There is a long-standing personal-remittance flow from the Gulf to India, with flows strongly skewed toward India; a public Circle Payments Network (CPN) local-currency payout route to India exists | Actual business-customer volume, a business-to-business (B2B) route in UR's account, a second independent payout route, all-in cost, and success rate | Move into production validation, not launch |
| Swiss or European institutional funds paid to India or the Philippines | A composite scale proxy assembled from public data is approximately USD 23.3bn; UR's Swiss customer relationships and CHF/EUR funding access are a closer fit for this direction | Actual payment logs from businesses or platforms, specific beneficiary types and use cases, a payout route in UR's account, and the price customers are willing to pay | Validate in parallel with the Gulf hypothesis |

Only weaker decisions can be made for the other four market groups at this point: narrow Africa to specific countries and payout methods first; obtain payment logs from existing Partners before considering Singapore and Hong Kong to Europe and the Gulf; enter Latin America only behind customer flows that already exist; and continue to defer a US direct-to-consumer business.

UR's opportunity is also not “using stablecoins” or “covering many countries.” The potential product value is this: for one specific payment configuration, UR can quote an acceptable price consistently, complete compliance review and local beneficiary credit, and switch to a validated independent route when the primary payout route is unavailable.

## 2. What the three types of figures actually measure

There is no public bilateral-payments database that covers every country, year, and customer type consistently. This report can use only three different types of evidence. They may observe the same region, but their statistical populations differ. They cannot be added together or assessed using one common market-penetration rate.

| Data measure | What it actually counts | Question it answers | Judgment it can support | Judgment it cannot support |
|---|---|---|---|---|
| Bilateral personal remittances | Personal remittance flows from a specific origin into a specific receiving market | Approximately how large household remittances are in a particular direction | The currency direction, the base of consumer payout infrastructure, and consumer pricing benchmarks | Demand for business payroll, supplier payments, or platform settlement, or UR's revenue |
| Regional remittance total | Personal remittances received by an entire region from the world, or the macro total of personal remittances sent by one country to the world | How large the overall pool of personal funds is for a receiving region or sending country | Regions worth breaking down further | How much a specific origin contributes, the size of a bilateral corridor, or the size of business payments |
| Two-way merchandise trade | Total merchandise imports and exports in both directions between two regions | The approximate scale of cross-border settlement activity between businesses | Whether it is worthwhile to obtain business payment logs and continue the research | One-way payment volume, the amount providers can process, or UR's obtainable market share |

For example, in 2025, Latin America and the Caribbean's approximately USD 173.7bn in regional remittances answers “how much personal-remittance money flowed from the world into Latin American households.” It does not show how much Europe or the Gulf sent to Latin America, and it does not include merchant settlement or supplier payments.

The evidence statuses in the tables must also remain separate: actual values come from published statistical series; provisional values remain subject to revision; estimates are calculated from public totals and shares; forecasts describe a future year or one whose data is not yet complete; and a composite scale proxy combines different public series only to indicate an order of magnitude.

## 3. Five further validations are required to move from “money exists” to “UR can make money”

What UR ultimately sells is not “India coverage” or “Latin America coverage.” It is a specific payment configuration: the payer's jurisdiction, payer type, funding currency and method, use case, beneficiary type, payout currency and method, amount range, and service time. A macro corridor serves only as the first filter.

For a payment configuration to become a saleable service, it must pass six checks in all: the market-flow check, followed by five further validations.

1. Sufficient relevant money flows exist in the market.
2. Target customers make this type of payment repeatedly and are dissatisfied with the current outcome.
3. UR and the origin-side Partner are legally permitted to contract with the customer, receive funds, and initiate the payment.
4. UR's CPN account or a backup service provider supports this exact combination of payer, beneficiary, use case, amount, and payout method.
5. The Beneficiary Financial Institution can quote consistently, complete the local payout, and provide an independent backup route.
6. All-in cost, success rate, time to beneficiary credit, refunds, and capital usage meet customer requirements and UR's internal profitability threshold.

Current public data mainly covers item 1 and provides a small amount of regional context for item 2. Items 3 through 6 require legal advice, customer payment logs, production configuration, live quotes, and real-payment validation.

### Customer pain points, service-provider costs, and UR's product must not be conflated

| Object being observed | The real-world issue | How it affects the opportunity assessment |
|---|---|---|
| Customer outcome | Before payment, the customer does not know the amount the beneficiary will receive or when it will arrive; during payment, the customer is repeatedly asked for more information; after payment, failures, refunds, and fees are difficult to explain | Only customer interviews, support tickets, payment logs, or direct competitor tests can show that a specific payment configuration has a service gap |
| Service-provider cost | One-way flows require continuous replenishment of the target currency and create FX, liquidity, compliance, and local-partner costs | These are supply-side costs, not customer pain points. Customers feel them only when they become higher prices, lower limits, suspended quotes, or delays |
| UR's product | Aggregate quotes, standardize information and statuses, retain payment evidence, and manage primary and backup routes | These capabilities are differentiators only when the outcome is better than the customer's current service, not because they appear on a feature list |

Consumer remittance apps, global payout APIs, banks, and CPN are not the same type of competitor. Consumer products already offer low-cost bank-account or cash remittances in major corridors; Wise Platform, Nium, Thunes, TerraPay, Airwallex, and others provide multi-country payout interfaces; banks provide accounts, FX, and clearing; and CPN provides institution-to-institution quoting, compliance-information exchange, and stablecoin settlement. In this report, a Partner is an institution that contracts directly with the end customer or provides the funding entry point. UR must compare the complete outcome the customer ultimately buys, not place all these institutions into a single ranking by “number of countries covered.”

Accordingly, “public materials do not prove that a service need is already met” can form only a question to validate. It cannot be presented directly as “demand is unmet.”

## 4. CPN changes how liquidity is organized, not the realities of the last mile

Traditional cross-border providers generally net flows across their entire network rather than looking for reverse flows only within one bilateral corridor. In India, for example, a provider may offset part of its Indian payout obligations with INR sent by other customers, existing INR inventory, and transactions flowing in the opposite direction. Only the residual amount that cannot be offset requires external FX, additional liquidity, or an adjustment to the provider's funding position. Wise's public explanation and regulatory filing both show that reuse of reverse-direction funds is only one settlement method for part of its transactions; it does not eliminate every residual position. [Wise: How does Wise work](https://wise.com/gb/blog/how-does-wise-work), [Wise: SEC registration statement](https://www.sec.gov/Archives/edgar/data/2099039/000119312526151439/d19735d20fr12b.htm)

CPN does not require UR to hold local fiat currency continuously in every receiving country, but it does not make one-way flows disappear:

1. UR requests a Quote, meaning a live price for one specific payment configuration, in USDC.
2. When a Beneficiary Financial Institution (BFI) is willing to accept that configuration at that time, it returns an exchange rate, fees, validity period, and estimated local-currency payout time.
3. After receiving USDC, the BFI must hold, buy, or borrow the local fiat currency.
4. The BFI or its downstream bank or payment institution pays out through a local rail.
5. When local fiat liquidity is insufficient, the market moves, or compliance costs rise, the outcome may be a wider spread, a lower limit, no quote, a request for more information, or a refund.

A stable BFI can therefore keep UR from depending on reverse customer flows, but it cannot eliminate the cost of local fiat liquidity. A BFI's all-in price typically includes the local payout fee, the FX spread between USDC and local fiat, capital usage, compliance review, downstream-partner fees, and the risk of failed payments and refunds. [Circle: CPN field guide](https://www.circle.com/blog/circle-payments-network-cpn-a-concise-field-guide-for-prospective-network-participants), [Circle: Quotes](https://developers.circle.com/cpn/concepts/quotes)

### “Country permitted,” “route present in the account,” and “payment successful” are three different states

Circle's country table identifies countries in which CPN is permitted to operate, but the page explicitly warns that not every permitted country has a currently available route. An actual route also depends on UR's account configuration, destination country, currency, payout method, amount, and use case. [Circle: CPN supported countries](https://developers.circle.com/cpn/references/compliance/supported-countries), [Circle: Get supported payment routes](https://developers.circle.com/api-reference/cpn/cpn-platform/list-routes)

| Receiving market | Does the local payout market show a single-provider monopoly? | Public CPN evidence | What it means for UR |
|---|---|---|---|
| India | No. NEFT, IMPS, and RTGS have broad bank participation, and the rails themselves are low-cost | Circle has announced one INR payout route supported by Saber; public documentation lists IMPS, NEFT, and RTGS | It can enter production testing. UR must still confirm B2B/B2P support, amounts, pricing, downstream banks, and a second independent route |
| Pakistan | No. Multiple banks and payment institutions participate in Raast | The country is on the permitted list, but as of 2026-08-17, the public destination-country and fiat-currency lists do not include PK or PKR | UR cannot publicly claim that the corridor is available. Check UR's production configuration, the BFI, and a locally authorized bank first |
| Bangladesh | No evidence of a nationwide monopoly was found, but cross-border funds must pass through authorized banks, adding more layers to the chain | The country is on the permitted list, but the current public routes do not include BDT; local rules continue to restrict virtual-asset transactions | It has the highest uncertainty of the four markets. New 2026 rules allow authorized banks to work with overseas digital PSPs and permit certain low-value B2C export receipts, but authorized banks still control FX, accounting, KYC, and reporting |
| Philippines | No. InstaPay, PESONet, and remittance institutions have broad participation | The country is on the permitted list, but as of 2026-08-17, the public destination-country list does not include PH; the public payout-method enumeration includes InstaPay and PESONet | Local rails are not the main uncertainty. First confirm whether UR's account has a production route and how many independent payout chains exist |

In 2026-2, Circle announced an India INR payout route supported by Saber that covers IMPS, NEFT, and RTGS. The announcement establishes that at least one public route exists. It does not establish that every payment use case is enabled in UR's account or that a second BFI exists. [Circle: India local-currency payout announcement](https://www.circle.com/blog/circle-payments-network-expands-local-currency-payout-corridors-across-asia-the-middle-east-europe-and-the-us)

Public materials on India, Pakistan, and the Philippines do not support the claim that local payout is monopolized by a BFI. What may be concentrated is the source of CPN quotes for a specific payment configuration. Circle does not publish BFI counts by route, so the answer can come only from UR's production account and repeated Quotes. [RBI: NEFT FAQ](https://www.rbi.org.in/scripts/FAQView.aspx?Id=60), [SBP: Raast P2P](https://www.sbp.org.pk/our-subsidiaries/raast/raast-person-to-person), [BSP: Payment systems](https://www.bsp.gov.ph/SitePages/PaymentsAndSettlements/PaymentsAndSettlements.aspx/)

A Quote is not a guarantee of beneficiary credit. After a payment is created, the BFI may still review the specific payer, beneficiary, and use case and issue a Request for Information (RFI). The beneficiary account or local bank may still reject the payment, and a failed payment may lead to a stablecoin refund. [Circle: RFI](https://developers.circle.com/cpn/concepts/compliance/rfis), [Circle: Payment states and refunds](https://developers.circle.com/cpn/concepts/payments/component-states-and-workflows)

Circle's network figures show only that CPN is growing. In the third quarter of 2025, 29 institutions were enrolled, meaning registered to participate, and 55 were undergoing eligibility review; as of 2026-2-20, those figures were 55 and 74, respectively. As of 2026-3-31, annualized transaction volume based on activity in the preceding 30 days was USD 8.3bn, implying approximately USD 0.68–0.69bn in transaction volume during those 30 days. Public materials do not break these figures down by Originating Financial Institution (OFI), Beneficiary Financial Institution (BFI), production status, or specific route. They therefore prove neither that a route has redundancy nor that it necessarily lacks a BFI. [Circle 2025 Q3 results](https://www.sec.gov/Archives/edgar/data/1876042/000187604225000045/nolivelinksversion_q3202.htm), [Circle 2025 Q4 results](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000032/final_circlereportsfourt.htm), [Circle 2026 Q1 results](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000148/final_05x11q1epr30.htm)

## 5. Evidence and current decisions for the six corridor groups

The table places different statistical measures side by side only to show how far the research on each group has progressed. It must not be used to compare market sizes.

| Research scope | Latest visible scale | Data measure | What the public evidence can show | What the public evidence cannot show | Current decision |
|---|---:|---|---|---|---|
| UAE and Saudi Arabia to India, Pakistan, Bangladesh, and the Philippines | USD 64.7bn (2025 label) | Mixed-method bilateral personal-remittance proxy | Personal funds have flowed consistently in one direction into the four receiving markets, with India and Pakistan accounting for the largest share | Business and platform demand, volume obtainable by UR, or BFI cost | Validate UAE to India first; check production routes before testing the other countries |
| Europe and Switzerland to India, the Philippines, Indonesia, and Vietnam | USD 23.3bn (2025 label) | Composite scale proxy assembled from public data | The origins included in the proxy generate substantial personal flows | Full European scale, business-payment scale, or the trend for the entire region | Validate in parallel with the Gulf hypothesis |
| Singapore and Hong Kong with Europe and the Gulf | USD 142.0bn (2025) | Partial two-way merchandise trade | Business settlement activity is large in order-of-magnitude terms | One-way payments, UR customer demand, or the amount UR can process | Do not initiate without Partner logs |
| Global to Sub-Saharan Africa | USD 56.0bn (2025 forecast) | Regional personal-remittance total | The overall pool of personal funds received by the region and its high-cost context | The contribution from Europe or the Gulf, or a B2B/B2P opportunity in any specific country | Narrow to a specific country and payout method first |
| Global to Latin America and the Caribbean | USD 173.7bn (2025 estimate) | Regional personal-remittance total | The regional pool of personal remittances is large | A specific origin corridor, business payments, or UR's advantage | Follow existing customer flows only |
| US outbound personal remittances, macro measure | USD 103.2bn (2024) | Sending-country personal-remittance total | The United States is a large sending market | Consumer-app transaction volume, comparable 2025 actuals, or UR's serviceable market | Continue to defer a direct-to-consumer business |

## 6. Gulf to South Asia and the Philippines: one-way flows make CPN worth testing

This group of data establishes large, persistent personal flows. It does not establish that an unmet need already exists for business batch payments. Its value is that it produces a supply-side hypothesis: when traditional providers must keep replenishing INR, PKR, BDT, and PHP, can CPN use BFI quotes to reduce the cost of UR maintaining local-fiat positions itself?

### How the personal-remittance scale proxy is constructed

Amount unit: USD billion.

| Receiving market | 2023 label | 2024 label | 2025 label | Calculation method and period |
|---|---:|---:|---:|---|
| India | 29.1 | 30.7 | 35.1 | Proxy values based on India's BoP private transfer credits for FY2022-23, FY2023-24, and FY2024-25, multiplied by the shares in RBI's FY2023-24 survey: UAE 19.2% and Saudi Arabia 6.7%; the final year is provisional |
| Pakistan | 11.2 | 13.0 | 17.2 | Remittances from Saudi Arabia and the UAE disclosed by the State Bank of Pakistan, categorized by fiscal-year end |
| Bangladesh | 6.8 | 7.4 | 8.4 | Remittances from Saudi Arabia and the UAE disclosed by Bangladesh Bank, categorized by fiscal-year end |
| Philippines | 3.5 | 3.7 | 4.0 | Cash remittances from Saudi Arabia and the UAE directly disclosed by the Philippine central bank, categorized by calendar year |
| Mixed-method total | 50.6 | 54.8 | 64.7 | Statistical periods and methods differ; the total is used only to observe order of magnitude, not to calculate a strict growth rate |

India's corresponding totals are approximately USD 112.5bn, USD 118.7bn, and USD 135.4bn, each multiplied by the combined UAE and Saudi origin share of 25.9%. Private transfer credits here include family support, savings, and some local withdrawals from non-resident deposits in India. They are not pure P2P wage remittances and are not bilateral actual flows published by RBI. [Indian Parliament: FY2022-23 and FY2023-24 private transfer credits](https://eparlib.sansad.in/bitstream/123456789/2989690/1/18_External_Affairs_6.pdf), [India Economic Survey 2025-26](https://www.indiabudget.gov.in/economicsurvey/doc/eschapter/echap04.pdf), [RBI: Changing Dynamics of India’s Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)

For the Philippines, this version uses Saudi Arabia and UAE cash remittances directly disclosed in the central bank's Table 11, instead of multiplying the national total by origin shares. BSP also warns that transactions routed through a remittance company headquartered in the United States or a US correspondent bank may be recorded as originating from the United States, so origin-country data may still be distorted. [BSP: Table 11](https://www.bsp.gov.ph/Statistics/External/Table%2011.pdf)

### Consumer prices cannot establish BFI cost

The World Bank's third-quarter 2025 price snapshot shows that, for a USD 200 transfer, the sample average cost was 5.59% from Saudi Arabia to India and 3.72% from the UAE to India. For a USD 500 transfer, those averages fell to 3.07% and 2.19%, respectively. Yet within the same UAE-to-India sample, Emirates NBD's USD 200 quote had a cost of 0.77%, and one Remitly bank-account quote cost 1.04%. Consumer pricing pain varies within the same corridor. If UR were to build a retail product, its competitive benchmark would be low-cost digital channels, not the average. [World Bank: Saudi Arabia to India](https://remittanceprices.worldbank.org/corridor/Saudi%20Arabia/India), [World Bank: UAE to India](https://remittanceprices.worldbank.org/corridor/United%20Arab%20Emirates/India)

These samples include sending fees and FX margins. They are not CPN BFI wholesale quotes. Public materials cannot show whether BFIs for India, Pakistan, Bangladesh, or the Philippines are expensive. The question can be answered only by comparing production Quotes for the same amount, time window, and payment configuration. [World Bank: RPW Methodology](https://remittanceprices.worldbank.org/methodology)

### Minimum conclusion at this stage

- Established: all four markets receive persistent personal inflows that are strongly skewed toward the receiving country; local rails in India, Pakistan, and the Philippines do not show evidence of nationwide commercial monopolies.
- Reasonable inference: this directional imbalance increases traditional providers' need to replenish the target currencies; CPN can shift that work to the BFI providing the quote.
- Not yet established: platform payroll, supplier payments, or B2P payments are among the three most important buyer pain points in these markets; CPN has two independent BFIs for the relevant configurations; or UR's all-in cost is better than current services.

The first production test should therefore be narrowed to a regulated UAE Partner or business paying an Indian business bank account. Pakistan should enter Quote testing only after UR's account returns a PKR route and a lawful use case. Bangladesh first requires confirmation of the local legal and BFI structure. The Philippines can be an alternative receiving market beyond India.

## 7. Europe and Switzerland to Asia: a closer fit for UR, but B2B demand remains unvalidated

Like the Gulf group, this data comes mainly from personal remittances. It can show that money moves in the relevant currency directions. It cannot directly establish the scale of supplier payments, platform-seller settlement, or global-workforce payments.

Amount unit: USD billion.

| Receiving market | 2023 label | 2024 label | 2025 label | European origins included |
|---|---:|---:|---:|---|
| India | 15.6 | 16.5 | 18.8 | United Kingdom, Germany, Belgium, Ireland, the Netherlands, Switzerland, France, Italy, and Spain; uses the same Indian fiscal-year totals and RBI FY2023-24 origin shares |
| Philippines | 3.8 | 3.9 | 4.0 | European regional personal remittances reported by the Philippine central bank |
| Indonesia | 0.3 | 0.3 | 0.5 | European regional migrant-worker remittances reported by Bank Indonesia |
| Vietnam | Not included | Not included | Not included | A national total is available, but comparable European-origin data is not |
| Composite scale proxy | 19.7 | 20.7 | 23.3 | India is estimated; the Philippines and Indonesia are regional data. This is neither a mathematical lower bound nor a complete market size |

RBI's survey shows that the GCC items listed in the FY2016-17 table summed to 46.7% of India's remittance origins, falling to 37.9% in FY2023-24. The United States reached 27.7%, while the United Kingdom rose from 3.0% to 10.8%. This supports separate research into flows between the United Kingdom and India, but it does not establish continued growth across all European origins. [RBI: Changing Dynamics of India’s Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)

The FSB's 2025 data can establish that cross-border B2B/B2P payments still face speed and transparency problems at an overall regional level. However, its sampled directions, amounts, and statistical populations differ from the Europe-to-Asia configurations in this report. It cannot serve as direct demand evidence for a specific bilateral business corridor. [FSB: 2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

The European direction is still worth validating in parallel with the Gulf direction because it fits UR's capabilities, not because of its ranking by macro flow. UR is closer to CHF/EUR institutional funding access and European institutional customer relationships. The next step is to obtain real payment logs from existing customers or Partners and identify business beneficiaries, use cases, amounts, frequency, current fees, failures, and reconciliation costs. Without this data, the personal-remittance proxy cannot be presented as the size of a business market.

## 8. Singapore and Hong Kong with Europe and the Gulf: trade scale cannot substitute for customer evidence

Public materials do not provide a complete database of “payments from Asian businesses to Europe and the Gulf.” The figures below are used only to establish the order of magnitude of business settlement activity.

Amount unit: USD billion.

| Two-way merchandise trade included | 2023 | 2024 | 2025 | Data boundary |
|---|---:|---:|---:|---|
| Singapore with the EU | 56.0 | 52.0 | 54.0 | Euro-denominated trade value converted at annual average exchange rates |
| Hong Kong with the EU | 65.0 | 63.0 | 63.0 | Merchandise trade in both directions |
| Hong Kong with the Middle East | 26.6 | 24.1 | 24.7 | US-dollar amounts disclosed by the Hong Kong government |
| Total visible portion | 148.0 | 139.0 | 142.0 | Excludes Singapore with the Gulf, the United Kingdom, Switzerland, and services trade |

[European Commission: EU trade with Singapore](https://webgate.ec.europa.eu/isdb_results/factsheets/country/details_singapore_en.pdf), [Hong Kong Trade and Industry Department: Hong Kong–EU Trade Relations](https://www.tid.gov.hk/en/our_work/statistics/trade_partners/eu.html), [Hong Kong government: 2025 Middle East trade data](https://www.info.gov.hk/gia/general/202603/18/P2026031800337.htm)

Two-way trade includes funds flowing in the opposite direction, from Europe or the Gulf to Asia. It also includes trade that may be settled through bank letters of credit, group treasury centers, or other methods. It cannot show the specific point at which Airwallex, Wise, Nium, banks, or current treasury systems fail to meet a customer need.

This market group should therefore not be initiated based on USD 142.0bn. It should enter product validation only when an existing Partner's billing records, failed-payment samples, or finance workflows show that CHF funding, net amount received, approvals, invoice matching, refunds, or cross-provider reconciliation are creating measurable costs.

## 9. Global to Sub-Saharan Africa: customer pain is strong, and so is delivery risk

The available figure is total regional personal remittances from all global origins, not bilateral flows from Europe or the Gulf to Africa. The World Bank's public series shows that Sub-Saharan Africa received approximately USD 52.2bn and USD 57.2bn in 2023 and 2024, respectively. For 2025, approximately USD 56.0bn is a forecast, not a complete actual value, so it cannot be used to infer a year-on-year decline. [World Bank: Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT), [World Bank: Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)

There is more direct evidence of consumer pricing pain: in the World Bank's third-quarter 2025 sample, the average cost of sending USD 200 to Sub-Saharan Africa was 8.46%, the highest of any region. The FSB report also shows that only 24.2% of wholesale cross-border payments on the receiving side in Africa are credited within one hour. These are regional indicators, however. They do not establish that a specific B2B/B2P configuration from Europe or the Gulf is unserved. [World Bank: RPW Q3 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf), [FSB: 2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

Africa cannot be treated as a single corridor for procurement. UR must first choose a country, beneficiary type, and bank-account or wallet payout, then validate local FX, weekend liquidity, name matching, RFIs, failures, and refunds. This market requires two genuinely independent payout routes, not merely two BFI names. If two BFIs depend on the same local bank or the same liquidity source, they remain a single point of failure.

## 10. Global to Latin America and the Caribbean: a large market to enter behind existing customer demand, not based on the total

Amount unit: USD billion.

| Year | Regional personal-remittance inflows | Data status |
|---|---:|---|
| 2023 | 157.0 | World Bank WDI actual |
| 2024 | 165.6 | World Bank WDI actual |
| 2025 | 173.7 | Inter-American Development Bank estimate |

The two institutions use different estimation methods, so this mixed series cannot be used to calculate a precise growth rate. Within the 2025 estimate, Mexico accounts for approximately USD 62.5bn, Central America USD 55.5bn, and South America USD 35.3bn. Mexico and Central America do not have the same directional patterns, so the regional total cannot select UR's first country. [IDB: Remittances to LAC after the 2025 surge](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge), [Banco de México: Remittances](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadroAnalitico&idCuadro=CA11&locale=es&sector=1)

Remitly, Western Union, Wise, dLocal, EBANX, Bitso, and others already provide mature alternatives across mainstream personal remittances, PIX, SPEI, local-bank, and cash networks. For a USD 200 remittance from the United States to Mexico, the World Bank's third-quarter 2025 sample shows an average cost of 4.54%. Industry data cited by the IDB says Bitso processed more than USD 6.5bn in US–Mexico remittances in 2024. The stablecoin middle leg already operates at scale, so “using stablecoins” alone cannot differentiate UR. [World Bank: United States to Mexico](https://remittanceprices.worldbank.org/corridor/United%20States/Mexico), [IDB: Stablecoins and remittances](https://www.iadb.org/en/blog/research-development/whats-impact-stablecoins-remittances-and-regulatory-risks)

Latin America should be validated only when an existing Partner already has a defined country, payout method, and transaction logs. Validation should focus on beneficiary verification, local tax fields, failure reasons, refunds, and multi-provider reconciliation, not on whether UR “covers Latin America.”

## 11. US personal-remittance outflows: large, but not a fit for a UR direct-to-consumer business

The World Bank WDI currently records the US macro measure of personal-remittance outflows for 2023 and 2024 as USD 98.3bn and USD 103.2bn, respectively. As of this review, a comparable actual value for 2025 has not been published. The indicator includes personal transfers and compensation of employees, so it cannot be treated directly as consumer-remittance app transaction volume. [World Bank: Personal remittances paid](https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT), [World Bank: WDI metadata](https://databank.worldbank.org/metadataglossary/world-development-indicators/series/BM.TRF.PWKR.CD.DT)

From 2026-1-1, the United States imposes a 1% tax on certain consumer remittances, but it mainly covers funds received through physical instruments such as cash, money orders, and cashier's checks. Funding from an account at a US financial institution or a US-issued debit or credit card is generally not subject to the tax, and business payments fall outside this definition of consumer remittance. [US Congress: Public Law 119-21 §70604](https://www.congress.gov/bill/119th-congress/house-bill/1/text?lv=true), [IRS: Remittance transfer tax](https://www.irs.gov/irb/2025-43_IRB)

UR's main reasons for deferring a US consumer business remain state-by-state licensing or licensed partnerships, consumer protection, fraud prevention, chargebacks, round-the-clock customer support, cash networks, and customer-acquisition cost. A Swiss license and CPN access do not materially reduce these costs. If an existing US institutional customer brings payment volume, a licensed US institution should own the customer relationship and funding, while UR assesses only institution-to-institution settlement or receiving-side orchestration.

## 12. Use production data to decide whether to launch

The first round should validate only three specific payment configurations. The third is conditional on the production configuration actually returning a route:

1. A regulated UAE Partner or business to an Indian business bank account: B2B supplier payment, with an internal test amount of USD 5,000–50,000.
2. A Swiss or European institution to a Philippine business or individual bank account: B2B/B2P platform payment, with an internal test amount of USD 500–10,000.
3. A regulated UAE Partner to a Pakistani individual's bank account or wallet: business-to-person (B2P) platform payment, with an internal test amount of USD 100–2,000. For this configuration, CPN's API uses B2C as its route label for the same sender-and-beneficiary-type combination. Stop this test if no PKR production route is available.

These amounts are internal test parameters intended to cover Quote behavior at small, medium, and larger values. They are not average market transaction sizes.

### Production validation has four stages

| Stage | Evidence to obtain | What this stage can decide |
|---|---|---|
| Customer evidence | Real payment logs, current fees, failure and refund samples, reconciliation hours, and customers' required time to credit | Whether the problem is real and recurring, and whether customers are willing to switch or pay |
| Legality and account configuration | Legal advice on contracting and fund flows; destinations, currencies, payout methods, use cases, limits, and required fields in UR's account | Whether the configuration can enter Quote, rather than merely appear on the permitted-country list |
| Repeated Quotes | Cover at least weekdays, weekends, local holidays, and different amount bands; record the quote source, original mid-market rate, all fees, beneficiary amount, validity period, and estimated time | Whether BFI quotes are persistent, pricing is stable, and an independent alternative route exists |
| Real low-value payments | Payment approval, RFI, actual local beneficiary credit, statement information, failures, refunds, and exception escalation | Whether the end-to-end outcome after Quote meets customer requirements |

Collect four consecutive weeks of data for each configuration. At minimum, record the number of quotable routes, all-in cost and volatility, payment approval rate, RFI rate, P50/P95 actual time to beneficiary credit, meaning the elapsed time within which 50% and 95% of payments are credited, failure rate, refund time, weekend performance, payout method, and capital usage.

Before the pilot, business, compliance, and operations must jointly set pass, pause, and exit thresholds. This report does not invent figures for the team. At minimum, the thresholds must cover five types of decision:

- Whether customer demand meets the threshold for initiating the project.
- Whether legal advice and contracts have confirmed origin-side and receiving-side responsibilities.
- Whether two payout routes have been tested with real payments and do not rely entirely on the same downstream bank or liquidity source, or whether one CPN route and one independent backup-provider route exist.
- Whether beneficiary credit, RFI, failure, and refund performance meets the target customer's timing requirements.
- Whether all-in cost, UR's gross margin, and liquidity usage meet internal financial thresholds.

Only this dataset can support a launch or stop decision. Macro flows and country coverage cannot substitute for it.

## 13. Evidence boundaries for the conclusions

| Judgment | Current evidence strength | How far the report can state it |
|---|---|---|
| Large personal flows exist from the Gulf to the four markets | Medium | Under the 2025 label, the mixed-method proxy shows approximately USD 64.7bn; a strict growth rate cannot be calculated |
| Europe and Switzerland to Asia is approximately USD 23.3bn | Medium-low | This is a composite proxy assembled from public data; it is neither a lower bound nor a complete market size |
| Business customers generally lack transparent and reconcilable services | Medium-low | The FSB supports speed, cost, and disclosure problems at global and regional levels; specific corridors still require customer and production evidence |
| BFIs in India, Pakistan, Bangladesh, or the Philippines are expensive or monopolized | Insufficient | Public materials cannot establish this; for Bangladesh, they establish only that there are more banking intermediaries and regulatory steps |
| One stable BFI can solve one-way flows | Partly valid as a mechanism | It removes UR's dependence on reverse customer flows, but liquidity, use cases, downstream banks, failed-payment refunds, and backup routes remain |
| UR has a profitable opportunity in a particular corridor | Not yet validated | It can be stated only as a pilot hypothesis pending joint validation through customer, legal, Quote, real-payment, and unit-economics evidence |

The other principal limitations are:

- The FY2023-24 origin shares for India are provisionally applied to all three years and may overstate or understate annual changes.
- India, Pakistan, and Bangladesh use fiscal years; the Philippines and other markets mainly use calendar years. Year labels must not be treated as fully aligned calendar-year series.
- The 2025 Africa figure is a forecast, the 2025 Latin America figure is an estimate, and the US 2025 WDI actual has not been published.
- The World Bank's Remittance Prices Worldwide figures are consumer-price snapshots for specific dates, amounts, and sampled services. They are not full-year transaction averages, BFI wholesale costs, or UR unit economics.
- Service-provider names illustrate product categories. They are not a complete list of market shares or production coverage.
- Two BFI names do not necessarily create independent redundancy. The downstream banks, FX-liquidity sources, and local rails must also differ.

## 14. Principal data sources

- [World Bank: Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT)
- [World Bank: Personal remittances paid](https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT)
- [World Bank: WDI remittance metadata](https://databank.worldbank.org/metadataglossary/world-development-indicators/series/BX.TRF.PWKR.CD.DT)
- [World Bank: Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)
- [World Bank: Remittance Prices Worldwide Q3 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)
- [FSB: G20 Roadmap for Cross-border Payments, 2025](https://www.fsb.org/2025/10/g20-roadmap-for-cross-border-payments-consolidated-progress-report-for-2025/)
- [RBI: Changing Dynamics of India’s Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)
- [State Bank of Pakistan: FY2025 Statistical Supplement](https://www.sbp.org.pk/assets/document/publications/reports-annual-aarFY25-Statistical-Supplement-Complete-Statistical-Supplement.pdf)
- [Bangladesh Bank: Annual Remittance Data](https://www.bb.org.bd/en/index.php/econdata/bop_yearly/5)
- [Bangladesh Bank: 2026 cross-border digital payment framework](https://www.bb.org.bd/mediaroom/circulars/fepd/jul292026fepd-125e.pdf)
- [Bangladesh Bank: 2026 B2C export-platform rules](https://www.bb.org.bd/mediaroom/circulars/fepd/jun152026fepd-112e.pdf)
- [BSP: Overseas Filipinos’ Remittances Table 11](https://www.bsp.gov.ph/Statistics/External/Table%2011.pdf)
- [Bank Indonesia: Indonesian Migrant Workers’ Remittances](https://www.bi.go.id/SEKI/tabel/TABEL5_31.pdf)
- [European Commission: EU trade with Singapore](https://webgate.ec.europa.eu/isdb_results/factsheets/country/details_singapore_en.pdf)
- [Hong Kong Trade and Industry Department: Hong Kong–EU Trade Relations](https://www.tid.gov.hk/en/our_work/statistics/trade_partners/eu.html)
- [Inter-American Development Bank: 2025 LAC remittance estimate](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge)
- [Circle: CPN](https://developers.circle.com/cpn)
- [Circle: Supported countries](https://developers.circle.com/cpn/references/compliance/supported-countries)
- [Circle: Supported payment routes](https://developers.circle.com/api-reference/cpn/cpn-platform/list-routes)
- [Circle: Supported payment methods](https://developers.circle.com/cpn/references/payments/supported-payment-methods)
- [Circle: India local-currency payout announcement](https://www.circle.com/blog/circle-payments-network-expands-local-currency-payout-corridors-across-asia-the-middle-east-europe-and-the-us)
- [RBI: MTSS Master Direction](https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=10868)
- [SBP: Raast](https://www.sbp.org.pk/our-subsidiaries/raast/raast-person-to-person)
- [Bangladesh Bank: Payment systems](https://www.bb.org.bd/en/index.php/financialsystems/paysystems)
- [Bangladesh Bank: Virtual asset circular](https://www.bb.org.bd/mediaroom/circulars/fepd/sep152022fepd24e.pdf)
- [BSP: PESONet participants](https://www.bsp.gov.ph/PaymentAndSettlement/PESONet%20Participants.pdf)
- [BSP: InstaPay participants](https://www.bsp.gov.ph/PaymentAndSettlement/Instapay%20Participants.pdf)
- [IRS: Remittance transfer tax](https://www.irs.gov/irb/2025-43_IRB)
