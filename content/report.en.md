# UR Cross-border Payment Corridor Flows and Unmet Needs Study (2023–2025)

> Version: 2026-08-17 (cross-validation revision)<br>
> Scope: the six corridor groups covered in the preceding feasibility report<br>
> Purpose: market research and pilot-design reference; not legal, regulatory, or investment advice<br>
> Monetary unit: unless otherwise stated, all amounts are in USD 100 million. `654` means USD 65.4 billion

## Executive conclusion

None of the six corridor groups lacks service providers that can deliver an individual payment to the destination market. The real unmet need is a reliable business service that lets a customer confirm the total cost, amount received, and delivery time before payment; submit only the required information during processing; reconcile the payment afterwards; and use a validated alternative route when one beneficiary financial institution is unavailable.

UR should not select markets based on flow size alone. A more useful test is whether all three conditions below hold:

1. The flow is large enough to support a business.
2. Existing providers already offer coverage, but still do not deliver a reliable, transparent, and reconcilable service.
3. UR can close the gap with its Swiss-licensed capabilities, Circle Payments Network (CPN), and existing Partners.

Applying this test:

- The first validation wave should cover the Gulf to India and Pakistan. Estimated personal remittances across the full corridor group increased from USD 51.2 billion in 2023 to USD 65.4 billion in 2025.
- The second wave should cover Europe or Switzerland to India and the Philippines. The lower bound supported by public data increased from USD 19.7 billion to USD 23.3 billion; Vietnam and some European sending markets are not included.
- Africa has the strongest pain points, but also the highest beneficiary-side, foreign exchange, and compliance risks. It is suitable only for a one- or two-country pilot.
- Latin America and outbound US consumer remittances are larger markets, but competition from established brands, licensing structures, and local networks is stronger. They are not suitable starting points for UR.

Three principles apply throughout this report:

- Flow size indicates the size of the funding pool. It does not show how much volume UR can win.
- Provider coverage of a country does not mean that the payment configuration a customer needs is reliably available.
- CPN expands the range of beneficiary-side institutions that UR may be able to reach. UR's product value is to turn reachability into a service it can promise to customers, track end to end, switch to an alternative route, and reconcile.

## 1. Three data measures used in this report

No public database provides complete bilateral payment data across all countries, years, and customer types. This report therefore uses three measures. The measures are not mutually exclusive corridor categories: in principle, the same corridor can be examined through all three, although comparable public data may not be available for every measure. This report selects one primary measure for each corridor group based on the question being asked and the available evidence. The measures answer different questions, must not be added together, and must not be subjected to a common market-penetration assumption.

| Data measure | Question answered | How this report uses it | Main limitation |
|---|---|---|---|
| Bilateral personal remittances | Approximately how much was remitted between two markets in a year? | Used as the primary flow evidence for the Gulf to South Asia and the Philippines, and for Europe and Switzerland to Asia | Excludes business invoices, platform merchant settlements, and capital flows |
| Regional remittance total | How large is the overall funding pool received by a region or sent by a major origin country? | Used when complete bilateral data are unavailable to describe the overall pools for Africa, Latin America, and US outflows | Cannot isolate the actual contribution of a specific sending region |
| Two-way merchandise trade | Approximately how much cross-border business settlement activity exists? | Used only to indicate the scale of corporate settlement activity between Singapore and Hong Kong, and Europe and the Gulf | Is not a one-way payment flow and does not equal the amount addressable by payment providers |

### Confidence levels

- High: annual actuals from the same official series.
- Medium: an official total multiplied by an official source-country share, or multiple official series combined into a verifiable lower bound.
- Low: trade used as a proxy for payment demand, or an official forecast used for 2025 because an actual value is unavailable.

### Abbreviations

- SP: service provider.
- BFI: beneficiary financial institution. The BFI converts the settlement asset into local fiat currency and pays the ultimate beneficiary.
- RFI: request for information, meaning a request for additional information.
- CPN: Circle Payments Network. It lets an originating institution request quotes from multiple BFIs and use stablecoins for inter-institution settlement.
- B2B, B2P, and P2P: business-to-business, business-to-person, and person-to-person payments, respectively.
- FY: fiscal year. WDI: World Development Indicators, the World Bank's development indicator database.

## 2. Flow overview for the six corridor groups

Monetary unit: USD 100 million.

| Corridor group | 2023 | 2024 | 2025 | What the figures represent | Confidence |
|---|---:|---:|---:|---|---|
| UAE and Saudi Arabia to India, Pakistan, Bangladesh, and the Philippines | 512 | 554 | 654 | Estimated bilateral personal remittances; India is classified by the ending year of the corresponding fiscal year | Medium |
| Europe and Switzerland to India, the Philippines, Indonesia, and Vietnam | At least 197 | At least 207 | At least 233 | Lower bound for personal remittances constructed from published source data; India is classified by the ending year of the corresponding fiscal year; Vietnam and some European sources are excluded | Medium |
| Singapore and Hong Kong to Europe, Switzerland, and the Gulf | Approx. 1,480 | Approx. 1,390 | Approx. 1,420 | Selected two-way merchandise trade, used only to show the order of magnitude of business settlement activity | Low |
| Europe and the Gulf to selected Sub-Saharan African markets | Approx. 522 | Approx. 572 | Approx. 560 | Total personal remittances received by Sub-Saharan Africa; 2025 is a forecast | Low to medium |
| Global to Latin America | 1,570 | 1,656 | 1,737 | Total personal remittances received by Latin America and the Caribbean | High |
| US consumers to global destinations | 983 | 1,032 | Not yet published | Total personal remittances sent from the United States; the latest comparable WDI actual is for 2024 | Medium |

This table supports only order-of-magnitude comparisons. The first and second groups most closely approximate corridor-specific flows. The third is a trade proxy. The fourth and fifth are recipient-region totals. The sixth is an origin-country total. The first two groups are also not strict calendar-year time series: India, Pakistan, and Bangladesh are classified by the ending year of their fiscal year, while the Philippines, Indonesia, and other regional data are mainly classified by calendar year. The Latin American figure is therefore not a sufficient basis for concluding that Latin America is the best market for UR. Exact growth rates should not be calculated for the first two groups.

## 3. What counts as demand not yet met by current SPs

The presence of an SP proves only that a payment can be made in some form. UR can treat a payment as a reliably marketable service only when it meets all six conditions below:

1. Legal structure: it is clear who contracts with the customer, who receives the funds, who performs the currency conversion, and who pays the beneficiary.
2. Supported configuration: the payer type, beneficiary type, currency, amount, purpose, and payout method are all supported.
3. Pre-payment certainty: the quote shows all fees, the exchange rate, the net amount the beneficiary will receive, the validity period, and the expected delivery time.
4. Manageable in-flight processing: an RFI requests only the necessary information, has a clear owner and response deadline, and exposes its status through an API.
5. Post-payment explainability: delivery, failure, and refund each have a unique payment ID, a clear reason, an amount, and a timestamp.
6. Service continuity: when the primary BFI does not quote or is unavailable, UR has an alternative BFI or backup SP validated with real low-value payments.

In principle, BFIs supported by CPN are reachable through the same network. Reachability, however, addresses only part of the second condition:

- Account configuration shows which payment routes UR may request.
- A quote shows whether a BFI is willing to accept a payment at that moment.
- Only after a payment is created does the BFI review the specific payer, beneficiary, and payment purpose.
- Only live test payments and ongoing monitoring establish actual success rates, delivery times, RFI behavior, and refund performance.

Corridor development therefore means confirming that a payment has a reliable primary BFI and a usable alternative route. Only then can UR confidently sell a service commitment to customers.

Circle's network-level disclosures further show why access to CPN does not by itself establish redundancy in a specific corridor. At the Q3 2025 earnings release, 29 financial institutions were enrolled in CPN and 55 were undergoing eligibility review. By 20 February 2026, those figures had risen to 55 and 74. Annualized transaction volume based on the preceding 30 days rose from USD 3.4 billion as of 7 November 2025 to USD 8.3 billion as of 31 March 2026. [Circle Q3 2025 earnings materials](https://www.sec.gov/Archives/edgar/data/1876042/000187604225000045/nolivelinksversion_q3202.htm), [Circle Q4 2025 earnings materials](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000032/final_circlereportsfourt.htm), [Circle Q1 2026 earnings materials](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000148/final_05x11q1epr30.htm)

These disclosures do not identify which institutions are originating financial institutions (OFIs) or BFIs, which have processed production transactions, or which currencies and payout methods they support. They show that the network is growing. They do not establish that two usable BFIs support a particular UR payment configuration. UR still needs to inspect its account configuration, request production quotes repeatedly, and complete live test payments.

## 4. Recommended market-entry sequence

| Rank | Corridor group | Flow assessment | Unmet need | Fit with UR capabilities | Recommended action |
|---:|---|---|---|---|---|
| 1 | UAE and Saudi Arabia to South Asia and the Philippines | High and growing quickly | Medium to high | High | Select one sending-side Partner and two recipient countries; validate platform or business bulk payments |
| 2 | Europe and Switzerland to Asia | Medium to high; the published lower bound is still growing | Medium | High | Start with CHF and EUR institutional funding and business or platform payments; do not market to consumers |
| 3 | Europe and the Gulf to selected African markets | Medium | Very high | Medium | Select only one or two countries; validate a second BFI, weekend liquidity, and refunds before launch |
| 4 | Singapore and Hong Kong to Europe and the Gulf | Very high trade activity | Medium | Medium | Derive demand from actual invoices and payment failures of existing Partners; do not initiate a project based on trade value |
| 5 | Global to Latin America | Very high | Medium, concentrated in secondary markets and operating processes | Medium to low | Use first for supplier sourcing and capability benchmarking; enter only when existing customer flow is available |
| 6 | US consumers to global destinations | Very high | Present, but concentrated in the hardest-to-serve scenarios | Low | Defer a directly operated consumer business; work only with licensed US institutions |

## 5. Corridor 1: UAE and Saudi Arabia to India, Pakistan, Bangladesh, and the Philippines

### Assessment

- 2025 flow: approximately USD 65.4 billion. India uses a provisional FY2024-25 value, not a calendar-year 2025 actual.
- Core use cases: platform payments, business payroll, and supplier payments.
- Main gaps: low-value payment costs, bulk payments, consistent information requests, delivery commitments, refunds, and reconciliation.
- Recommendation for UR: include in the first validation wave, beginning with UAE to India or Pakistan; do not offer consumer cash remittances.

### Flow composition

Monetary unit: USD 100 million.

| Recipient market | 2023 | 2024 | 2025 | Calculation basis |
|---|---:|---:|---:|---|
| India | 291 | 307 | 351 | Balance of payments private transfer credits proxy for FY2022-23, FY2023-24, and FY2024-25, multiplied by the RBI-reported source shares of 19.2% for the UAE and 6.7% for Saudi Arabia; the FY2024-25 total is provisional, and the same shares are provisionally applied to all three years |
| Pakistan | 112 | 130 | 172 | Sum of remittances from Saudi Arabia and the UAE reported by the State Bank of Pakistan |
| Bangladesh | 68 | 74 | 84 | Sum of remittances from Saudi Arabia and the UAE reported by Bangladesh Bank |
| Philippines | 41 | 43 | 47 | Total annual remittance receipts multiplied by the source-country shares for Saudi Arabia and the UAE reported by the Bangko Sentral ng Pilipinas |
| Total | 512 | 554 | 654 | Sum of rounded figures in this table; India, Pakistan, and Bangladesh are classified by fiscal-year ending year, while the Philippines is classified by calendar year |

The India row now consistently uses private transfer credits in India's balance of payments as a proxy for inward remittances: approximately USD 112.5 billion in FY2022-23, USD 118.7 billion in FY2023-24, and USD 135.4 billion in FY2024-25, multiplied by the combined 25.9% source-country share for the UAE and Saudi Arabia. This is a gross credit-side inflow, not a net figure after transfer debits. It is also not equivalent to pure P2P wage-remittance volume. The FY2024-25 figure remains provisional. As of this review, the public WDI table does not provide an Indian calendar-year 2025 actual, so this version no longer uses the calendar-year 2025 figure from the original draft. [Indian Parliament: private transfer credits for FY2022-23 and FY2023-24](https://eparlib.sansad.in/bitstream/123456789/2989690/1/18_External_Affairs_6.pdf), [RBI: FY2023-24 remittance survey](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260), [Economic Survey of India 2025-26](https://www.indiabudget.gov.in/economicsurvey/doc/eschapter/echap04.pdf)

To avoid inconsistent treatment on only the Gulf side, this version applies the fiscal-year approach to the Indian component of both the Gulf and European corridor groups for all three years. The figures are suitable for judging order of magnitude, not for strict year-on-year comparison with calendar-year data for other countries.

The RBI reports that India received approximately USD 118.7 billion in FY2023-24, of which the UAE accounted for 19.2% and Saudi Arabia for 6.7%. The weighted average cost of remitting less than USD 200 remained 4.6%, above the United Nations target of 3%. [RBI: Changing Dynamics of India's Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)

The World Bank's Q3 2025 price snapshot also shows that fixed costs remain significant for low-value payments. For a USD 200 transfer, the average cost was 5.59% from Saudi Arabia to India and 3.72% from the UAE to India. For a USD 500 transfer, the respective costs fell to 3.07% and 2.19%. [World Bank: Saudi Arabia to India](https://remittanceprices.worldbank.org/corridor/Saudi%20Arabia/India), [World Bank: UAE to India](https://remittanceprices.worldbank.org/corridor/United%20Arab%20Emirates/India)

The same UAE-to-India sample also includes quoted prices far below the average. For a USD 200 transfer, the sample cost for Emirates NBD was 0.77%, while one Remitly bank-deposit quote was 1.04%. This shows that the consumer pricing pain point is unevenly distributed within the corridor. If UR builds a consumer product, its real competitors are these low-cost digital channels, not the 3.72% average. The high average cost alone does not establish a retail pricing advantage for UR. [World Bank: UAE to India provider sample](https://remittanceprices.worldbank.org/corridor/United-Arab-Emirates/India?order=field_cc2_fx_margin_calc&sort=asc)

Remittances received by Pakistan from Saudi Arabia and the UAE increased from approximately USD 11.2 billion in FY2023 to approximately USD 17.2 billion in FY2025. [State Bank of Pakistan: FY2025 Statistical Supplement](https://www.sbp.org.pk/assets/document/publications/reports-annual-aarFY25-Statistical-Supplement-Complete-Statistical-Supplement.pdf) The corresponding amount for Bangladesh increased from approximately USD 6.8 billion to approximately USD 8.4 billion. [Bangladesh Bank: annual remittance data](https://www.bb.org.bd/en/index.php/econdata/bop_yearly/5), [Bangladesh Bank: FY2023-24 quarterly report](https://www.bb.org.bd/pub/quaterly/remittance_earnings/remittance%20april-june%202024.pdf)

### What current SPs cover and what remains unresolved

| Service type | Representative SPs | Existing coverage | Not yet reliably addressed |
|---|---|---|---|
| Gulf consumer remittances | Al Ansari Exchange, LuLu Exchange, STC Bank, urpay, Remitly, Western Union, MoneyGram | Customer acquisition through branches or apps, individual identity verification, and bank or cash remittances | All-in cost for small transfers may still exceed 3%; consumer products do not directly support business bulk payments, structured RFIs, or transaction-level reconciliation |
| Global payment APIs | Nium, Thunes, TerraPay, Wise Platform | Access to multiple countries and local payout methods through one integration | “India supported” does not prove that the required payer type, beneficiary type, purpose, amount, and payout-method configuration is supported, or that a second reliable quote is available |
| Stablecoin settlement networks | Circle CPN | Requests for quotes from multiple BFIs through the same network, with stablecoin-based inter-institution settlement | A current quote does not establish long-term success rates, RFI response times, refund times, or reliable availability of local payout methods |

This corridor group does not need another consumer remittance app. It needs a bulk-payment service for platforms, workforce companies, and payment institutions. Customers need to lock the amount received before payment; submit payer, beneficiary, payment purpose, and invoice information once; obtain local confirmation that the beneficiary was credited, failure reasons, and refund status afterwards; and switch to a previously tested alternative route when the primary BFI does not quote.

### Recommended UR approach

The first pilot should cover UAE to India or Pakistan, followed by a second recipient country using the same sending-side Partner. This allows UR to reuse Partner onboarding, compliance information, and settlement liquidity. The initial phase should support only institutional and platform payments, not consumer cash remittances.

## 6. Corridor 2: Europe and Switzerland to India, the Philippines, Indonesia, and Vietnam

### Assessment

- Published lower bound for 2025: approximately USD 23.3 billion; the actual figure is higher. India uses a provisional FY2024-25 value.
- Core use cases: supplier payments, platform seller payouts, and global workforce payments.
- Main gaps: rules for business beneficiaries, wallets, payment purposes, limits, RFIs, and refunds remain fragmented by country.
- Recommendation for UR: begin with India and the Philippines, then consider Indonesia and Vietnam.

### What the public data can establish

Monetary unit: USD 100 million.

| Recipient market | 2023 | 2024 | 2025 | European sources included |
|---|---:|---:|---:|---|
| India | 156 | 165 | 188 | Balance of payments private transfer credits proxy for FY2022-23, FY2023-24, and FY2024-25, multiplied by the European source shares in the RBI survey; includes the United Kingdom, Germany, Belgium, Ireland, the Netherlands, Switzerland, France, Italy, and Spain |
| Philippines | 38 | 39 | 40 | European regional remittances reported by the Bangko Sentral ng Pilipinas |
| Indonesia | Approx. 3 | 3 | 5 | European regional remittances reported by Bank Indonesia |
| Vietnam | Not included | Not included | Not included | Only a national recipient total is available; comparable European source data is unavailable |
| Published lower-bound total | 197 | 207 | 233 | Sum of rounded figures in this table; Vietnam and some European sources are excluded, so the actual figure is higher |

The India row uses the same set of fiscal-year totals as the Gulf corridor's India row. Its European source-country shares come from the same RBI survey used for the Gulf corridor estimates. The RBI's long-run survey also shows that the combined share of the listed GCC countries in remittances to India fell from 46.7% in FY2016-17 to 37.9% in FY2023-24. The United States reached 27.7%, while the United Kingdom increased from 3.0% to 10.8%. This supports separate validation of the UK-to-India corridor. It does not establish that all European sources are increasing, and the published lower bound for the European corridor must not be treated as a complete market share. [RBI: Changing Dynamics of India's Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)

The Bangko Sentral ng Pilipinas notes that when a remittance is processed through the US headquarters of a remittance company or a US correspondent bank, its source may be recorded as the United States rather than the payer's actual country of residence. Official source statistics may therefore understate European flows. [BSP: Overseas Filipinos' Remittances](https://www.bsp.gov.ph/statistics/external/ofw2.aspx)

Migrant-worker remittances received by Indonesia from Europe were approximately USD 295 million in 2024 and USD 450 million in 2025, far below the amounts received from the Middle East, Singapore, and Hong Kong. [Bank Indonesia: Indonesian Migrant Workers' Remittances](https://www.bi.go.id/SEKI/tabel/TABEL5_31.pdf) Vietnam received approximately USD 14.5 billion and USD 15.0 billion in total remittances in 2024 and 2025, but the available public material does not support a reliable European component. [World Bank: Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)

### What current SPs cover and what remains unresolved

| Service type | Representative SPs | Existing coverage | Not yet reliably addressed |
|---|---|---|---|
| European cross-border business accounts and payments | Wise Business, Airwallex, Nium, Convera, Corpay | Funding in EUR, GBP, and other currencies; multi-currency conversion; and bank-account payments | Coverage combinations for CHF funding, business beneficiaries, and local wallets are inconsistent; required documentation by payment purpose, limits, and refund timeframes still need country-by-country verification |
| Platform payment APIs | Wise Platform, Nium, Airwallex, Thunes | Bulk payments, API statuses, and selected local rails | Customers must still connect orders, invoices, RFIs, and general-ledger entries themselves; public country coverage does not prove that a particular business-beneficiary type has passed a live test payment |
| CPN routes | Circle CPN and BFIs on the network | Standardized quote requests and stablecoin settlement for the middle leg | Does not replace licensing analysis for customer acquisition in Europe, or assume UR's responsibility for local business payout, foreign-exchange reporting, and failure handling |

FSB 2025 data show that only 25.6% of wholesale cross-border payments in Asia-Pacific were credited within one hour. Nearly half of B2B and B2P services in the region still did not disclose both cost and speed. The gap was wider in South Asia: among B2B and B2P services that disclosed cost, only 26.9% also disclosed speed. [FSB: 2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

The gap is therefore not a lack of SPs moving money from Europe to Asia. Businesses and platforms struggle to obtain a consistent cross-border service: they need to know what information is required when creating a payment, the amount received and delivery window when receiving a quote, who is handling a payment held in review, when funds will be returned after failure, and how the finance system can match the payment and fees to the original order.

### Recommended UR approach

Validate India and the Philippines first, then consider Indonesia and Vietnam. UR can differentiate through CHF funding, institutional customer relationships, CPN quotes, and standardized RFI and reconciliation processes. Before proceeding, however, it must establish in which European countries it may actively solicit customers.

## 7. Corridor 3: Singapore and Hong Kong to Europe, Switzerland, and the Gulf

### Assessment

- Visible two-way merchandise trade in 2025: approximately USD 142.0 billion.
- Core use cases: business accounts payable, trade services, and platform settlement.
- Main gaps: multi-entity payment approval, invoice matching, amount-received certainty, status tracking, and cross-currency reconciliation.
- Recommendation for UR: enter only through actual payment problems reported by existing Partners; do not initiate a project based on macro trade data alone.

### Why this section uses trade value

The core activity in this corridor group is business payments, not personal remittances. No complete public database shows how much businesses in Singapore or Hong Kong pay to Europe and the Gulf each year. This report therefore uses two-way merchandise trade to indicate the order of magnitude of settlement activity.

Monetary unit: USD 100 million.

| Included trade relationship | 2023 | 2024 | 2025 | Source data |
|---|---:|---:|---:|---|
| Singapore–EU merchandise trade | Approx. 560 | Approx. 520 | Approx. 540 | EUR 52.2 billion, EUR 48.1 billion, and EUR 47.7 billion, converted at annual average exchange rates |
| Hong Kong–EU merchandise trade | Approx. 650 | Approx. 630 | Approx. 630 | EUR 60.4 billion, EUR 58.4 billion, and EUR 55.7 billion, converted at annual average exchange rates |
| Hong Kong–Middle East merchandise trade | 266 | 241 | 247 | USD amounts published directly by the Hong Kong government |
| Visible subtotal | Approx. 1,480 | Approx. 1,390 | Approx. 1,420 | Excludes Singapore–Gulf, UK, and Swiss trade, as well as services trade |

European Commission data show Singapore–EU merchandise trade of approximately EUR 52.2 billion, EUR 48.1 billion, and EUR 47.7 billion in 2023, 2024, and 2025. [European Commission: EU trade with Singapore](https://webgate.ec.europa.eu/isdb_results/factsheets/country/details_singapore_en.pdf) Hong Kong–EU trade was EUR 58.4 billion in 2024 and EUR 55.7 billion in 2025; the official year-on-year change implies approximately EUR 60.4 billion in 2023. [Hong Kong Trade and Industry Department: Hong Kong–EU Trade Relations](https://www.tid.gov.hk/en/our_work/statistics/trade_partners/eu.html) Hong Kong–Middle East trade was approximately USD 26.6 billion and USD 24.1 billion in 2023 and 2024, and approximately USD 24.7 billion in 2025. [Hong Kong government: 2023–2024 Middle East trade data](https://www.info.gov.hk/gia/general/202601/21/P2026012100524p.htm), [Hong Kong government: 2025 Middle East trade data](https://www.info.gov.hk/gia/general/202603/18/P2026031800337.htm)

These figures establish only that business settlement activity is large. Two-way trade includes funds moving in the opposite direction, from Europe and the Gulf to Asia, and does not equal the volume addressable by payment providers.

### What current SPs cover and what remains unresolved

| Service type | Representative SPs | Existing coverage | Not yet reliably addressed |
|---|---|---|---|
| Multi-currency business accounts | Airwallex, Wise Business, Nium, Banking Circle | SGD, HKD, EUR, GBP, and other accounts; foreign exchange; and bank payments | Payment approval across multiple group entities, invoice and purchase-order matching, fee allocation, beneficiary verification, and refunds are still often left to the customer |
| High-value business foreign exchange and payments | Convera, Corpay, banks | High-value foreign exchange, forwards, and bank credit | API status, transaction-level reconciliation, and local payout methods may be less mature for platforms making frequent low-value payments |
| Stablecoin infrastructure | Circle CPN, BVNK, Bridge, and others | 24/7 inter-institution settlement and selected fiat on- and off-ramps | Does not automatically supply trade documentation, final-recipient bank fees, local cut-off times, or return reasons |

The strongest opportunity in this corridor is financial certainty, not merely faster on-chain settlement. UR would need to lock the amount received and quote validity period; attach each payment to its contract, invoice, and purchase order; map payment status to each document; return a clear failure reason; and let group finance reconcile principal, exchange rate, fees, and refunds in one end-of-day file.

### Recommended UR approach

Airwallex, Wise, Nium, and banks already hold strong positions. UR has a clear entry point only when customers specifically require CHF accounts, stablecoin treasury management, CPN multi-BFI quotes, or standardized statuses across multiple existing SPs. UR should analyze actual accounts-payable and payment-failure samples from two or three existing Partners before deciding whether to initiate a project.

## 8. Corridor 4: Europe and the Gulf to selected Sub-Saharan African markets

### Assessment

- Total regional remittances in 2025: approximately USD 56.0 billion. This is an official forecast, not a complete actual value.
- Core use cases: platform payments, payroll, and supplier payments.
- Main gaps: the highest costs; fragmented bank, wallet, and cash networks; unstable foreign exchange and local liquidity; and limited alternative routes.
- Recommendation for UR: select only one or two countries and validate a second BFI and refund performance before launch.

### The available figures are regional totals, not bilateral flows

The World Bank's public series shows that Sub-Saharan Africa received approximately USD 52.2 billion and USD 57.2 billion in personal remittances in 2023 and 2024. Complete actual data for 2025 remain unavailable; the World Bank previously forecast approximately USD 56.0 billion. The 2025 figure therefore cannot support a conclusion that the market contracted year on year. [World Bank: Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT), [World Bank: Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)

The total includes funds originating in North America, Europe, the Gulf, and other regions. Public data do not support a reliable bilateral split for Europe and the Gulf. Nigeria, Kenya, and Ghana, three of the larger recipient markets, received a combined total of approximately USD 26.2 billion in 2023 and USD 30.2 billion in 2024. These figures can inform an initial country screen.

### What current SPs cover and what remains unresolved

| Service type | Representative SPs | Existing coverage | Not yet reliably addressed |
|---|---|---|---|
| Global cash and bank remittances | Western Union, MoneyGram, Ria | Cash-agent networks, consumer brands, and selected bank deposits | High costs; business APIs, transaction-level reconciliation, and failure reasons may not meet platform requirements; cash use cases carry high fraud and customer-support costs |
| African bank and wallet networks | Onafriq, Thunes, TerraPay, Nium, dLocal | Multi-country bank and mobile-wallet coverage | Some countries or wallets still depend on a single partner; changes in local foreign exchange, liquidity, or regulation can cause quotes or payout methods to disappear temporarily; return times are uncertain |
| Stablecoin settlement for the middle leg | Circle CPN and other stablecoin SPs | Reduces some prefunding and settlement delays | The last mile still requires local fiat, bank, or wallet liquidity; stablecoins do not remove restrictions on capital movement, cash preferences, or local reporting obligations |

In the World Bank's Q3 2025 data, the average cost of sending USD 200 to Sub-Saharan Africa was 8.46%, the highest of all regions. In the 2024 sample, corridors including Saudi Arabia to Sudan and the UAE to Sudan had no service meeting the World Bank's low-cost SmaRT benchmark. [World Bank: Remittance Prices Worldwide Q3 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf), [World Bank: Remittance Prices Worldwide Q3 2024](https://remittanceprices.worldbank.org/sites/default/files/rpw_main_report_and_annex_q324.pdf)

The FSB associates high costs with dependence on US-dollar cash, weak competition, limited direct payment-system access for non-bank SPs, substantial reporting requirements, and sparse rural financial access points. In 2025, only 24.2% of wholesale cross-border payments in Africa were credited within one hour. [FSB: 2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

### Recommended UR approach

Africa must not be treated as a single corridor. UR should select one market with mature bank-account coverage and one market with high mobile-wallet use. For each, it should separately validate the primary BFI, alternative BFI, foreign-exchange spread, weekend liquidity, beneficiary-name matching, RFIs, failures, and refunds. UR should not promise reliable service without a second BFI that has passed live test payments.

## 9. Corridor 5: Global to Latin America

### Assessment

- Total regional remittances in 2025: approximately USD 173.7 billion.
- Core use cases: merchant settlement and platform payments.
- Main gaps: concentrated in secondary countries, business payments, beneficiary verification, local tax fields, failure reasons, and refunds.
- Recommendation for UR: use first for supplier sourcing and price benchmarking; enter only when existing customer flow is available.

### Flow scope

Monetary unit: USD 100 million.

| Year | Personal remittances received by Latin America and the Caribbean |
|---|---:|
| 2023 | 1,570 |
| 2024 | 1,656 |
| 2025 | 1,737 |

The 2023 and 2024 values come from the World Bank WDI. The 2025 value is the latest estimate published by the Inter-American Development Bank in 2026. The IDB's own series estimates growth of 7.3% in 2025, including approximately USD 62.5 billion for Mexico, USD 55.5 billion for Central America, and USD 35.3 billion for South America. The two institutions use different methods to estimate 2024, so a growth rate must not be derived from the mixed series in this table. [World Bank: Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT), [IDB: Remittances to LAC after the 2025 surge](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge)

The regional total also conceals divergent country-level trends. Banco de México's revised 2025 value was approximately USD 62.5 billion, down 3.9% year on year, while Central America continued to grow rapidly. The USD 173.7 billion figure can therefore indicate the size of the overall Latin American funding pool, but cannot identify UR's first country. [Banco de México: Remittances](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadroAnalitico&idCuadro=CA11&locale=es&sector=1), [IDB: Remittances to LAC after the 2025 surge](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge)

### What current SPs cover and what remains unresolved

| Service type | Representative SPs | Existing coverage | Not yet reliably addressed |
|---|---|---|---|
| Global personal remittances | Remitly, Wise, Xoom, Western Union, MoneyGram, Ria | Major corridors including United States to Mexico, with cash and bank-account payout | Secondary countries, less common wallets, and cash locations remain fragmented; providers differ in how fully they disclose final fees and amounts received |
| Local Latin American payment networks | dLocal, EBANX, Nium, Thunes | PIX, SPEI, local banks, and multiple payout methods | Businesses and platforms still need to manage beneficiary verification, tax IDs, payment purposes, local refunds, and multi-SP reconciliation; a country-coverage count does not establish that these fields work completely |
| Stablecoin routes | Bitso, Circle CPN, BVNK, Bridge, and others | Faster inter-institution settlement between US dollars and local currencies | Does not automatically address local bank accounts, cash, tax fields, or compliance reviews; a low middle-leg cost does not establish a low total beneficiary-side cost |

FSB 2025 data show that the average cost of sending USD 200 to Latin America remained 5.7%, unchanged from 2023. Although 60.6% of services could deliver within one hour, cost did not fall in parallel with the speed improvement. The average cost of P2P payments sent from Latin America was 3.4%, while 46%–55% of B2P and P2P corridors cost more than 3%. [FSB: 2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

In the World Bank's Q3 2025 sample, the average cost of a USD 200 transfer from the United States to Mexico was 4.54%. Industry data cited by the IDB indicate that Bitso processed more than USD 6.5 billion in US–Mexico remittances in 2024. This shows that stablecoin settlement for the middle leg is already reaching scale, and that “using stablecoins” is not itself a differentiator for UR. [World Bank: United States to Mexico corridor](https://remittanceprices.worldbank.org/corridor/United%20States/Mexico), [IDB: Stablecoins, remittances and regulatory risks](https://www.iadb.org/en/blog/research-development/whats-impact-stablecoins-remittances-and-regulatory-risks)

### Recommended UR approach

If existing Partners already need Latin American platform payouts, UR can begin with one country that has a mature instant-payment rail. It should focus on standardized quotes, beneficiary verification, clear failure reasons, and reconciliation, rather than advertising generic “Latin America coverage.”

## 10. Corridor 6: US consumers to global destinations

### Assessment

- Latest comparable actual: approximately USD 103.2 billion in 2024; the WDI actual for 2025 has not yet been published.
- Core use case: individuals remitting money to family members overseas.
- Main gaps: concentrated among customers and destinations that rely on cash, lack standard identity documents, have low digital adoption, or involve high risks and customer-support costs.
- Recommendation for UR: defer a directly operated consumer business and work only with licensed US institutions.

### Flow scope

The World Bank WDI currently records US personal remittance outflows of USD 98.3 billion in 2023 and USD 103.2 billion in 2024. As of this review, the public table does not provide a comparable 2025 actual, so this version no longer carries forward the USD 107.1 billion figure used in the original draft. [World Bank: Personal remittances paid](https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT)

Beginning 1 January 2026, the United States imposes a 1% excise tax on certain consumer remittances. Its scope is mainly transfers funded with cash, money orders, cashier's checks, and similar physical instruments. Funding from a US financial-institution account or a US-issued debit or credit card is generally excluded, and business payments do not fall within the definition of a consumer remittance transfer. The tax adds collection and reporting work for cash-funded consumer products. It is not the main reason for UR to defer a US business; state-by-state licensing, consumer operations, and competitive costs remain the larger obstacles. [US Congress: Public Law 119-21 §70604](https://www.congress.gov/bill/119th-congress/house-bill/1/text?lv=true), [IRS: Remittance transfer tax](https://www.irs.gov/irb/2025-43_IRB)

### What current SPs cover and what remains unresolved

| Service type | Representative SPs | Existing coverage | Not yet reliably addressed |
|---|---|---|---|
| Digital remittance apps | Remitly, Wise, Xoom, WorldRemit | App-based service, card or bank-account funding, and digital tracking for major destination countries | Users in less common destination markets, those requiring cash payout, and those with incomplete identity documents or name mismatches remain difficult to serve; stalled complex payments require costly customer support |
| Cash and omnichannel networks | Western Union, MoneyGram, Ria | Cash funding, cash payout, and broad agent networks | Fee and exchange-rate transparency varies; agent-network and fraud-management costs are high |
| Platform or bank partnerships | Visa Direct, Mastercard Move, banks, licensed aggregators | Card rails, bank distribution, and US compliance frameworks | A new entrant still needs state-by-state licenses or a licensed partner; fraud, chargebacks, consumer protection, and marketing costs do not disappear after connecting to an API |

The FSB's 2025 report shows that average costs for B2B and B2P cross-border payments originating in North America had risen above 3%. For both service types, only approximately 25% of services disclosed both cost and speed, and payment speeds remained comparatively low. [FSB: 2025 Cross-border Payments Progress Report](https://www.fsb.org/uploads/P091025-1.pdf)

The remaining demand is concentrated among the hardest customer groups and destinations to operate. Serving them requires a consumer brand, fraud prevention, chargeback handling, round-the-clock customer support, a cash network, and US licenses. UR's existing Swiss license and CPN access do not materially reduce these costs.

### Recommended UR approach

Continue to defer a US consumer-facing business. If US-originated flow becomes available, a regulated bank or payment platform should own the customer relationship and funding, while UR provides only inter-institution settlement or beneficiary-side orchestration.

## 11. The next research round should validate payment configurations, not countries

Macro data can rank opportunities, but cannot establish margins or service reliability. The next round should validate three specific payment configurations:

1. UAE institutional funds to an Indian business bank account: supplier payments of USD 5,000–50,000 per transaction.
2. UAE institutional funds to a Pakistani individual bank account or wallet: platform B2P payments of USD 100–2,000 per transaction.
3. Swiss institutional funds to a Philippine business or individual bank account: platform settlement of USD 500–10,000 per transaction.

For each configuration, collect four consecutive weeks of data: number of BFIs quoting, all-in cost, quote volatility, payment approval rate, RFI rate, delivery times at the 50th and 95th percentiles, failure rate, refund time, weekend performance, and available payout methods.

Only these data can answer the three commercial questions that matter: how much revenue UR can retain per payment, how much liquidity it must commit, and what service level it can promise customers.

## 12. Limitations and data notes

- No complete global database provides actual bilateral personal remittance data for 2023–2025. The Indian and similar figures are estimates using official totals and official source-country shares, not transaction-level bank data.
- The FY2023-24 source shares for India are provisionally applied to all three years. This may understate or overstate annual changes.
- Annual totals for India consistently use the balance of payments private transfer credits proxy for FY2022-23, FY2023-24, and FY2024-25. Source-country shares come from the RBI's FY2023-24 bank survey. These inputs estimate order of magnitude; they are not bilateral actuals published by the RBI and do not represent pure P2P wage-remittance flows. The FY2024-25 total remains provisional.
- India, Pakistan, and Bangladesh use fiscal years and are classified by the fiscal-year ending year in this report. The Philippines and several other markets use calendar years. The first two corridor groups are therefore not strictly comparable calendar-year time series.
- The Europe-to-Asia figures are a lower bound constructed from published data. Vietnam and some European sources are excluded; the figures must not be used as a complete market share.
- The Singapore and Hong Kong corridor uses two-way merchandise trade. It indicates only the order of magnitude of settlement demand and must not be treated as UR-addressable volume or a one-way payment flow.
- The 2025 figure for Africa is a World Bank forecast because complete actuals remain unavailable. It cannot establish a year-on-year decline.
- The SP lists are not comprehensive market maps and do not mean that a corridor is live in production. Procurement still requires checks of account configuration, current quotes, payment-review conditions, and contractual responsibilities.
- CPN's published institution counts and network-wide transaction volume do not separate OFIs, BFIs, production status, or payout methods. They do not establish that multiple usable BFIs support a particular payment configuration.
- The World Bank's Remittance Prices Worldwide data are price snapshots for specific dates, amounts, and sampled services. They are not annual average transacted prices for all customers. [World Bank: RPW Methodology](https://remittanceprices.worldbank.org/methodology)
- High flow and high cost establish only that a problem exists. UR's opportunity also depends on licensing boundaries, customer acquisition, upstream quotes, payout success rates, and unit economics.

## 13. Principal data sources

- [World Bank: Personal remittances received](https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT)
- [World Bank: Personal remittances paid](https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT)
- [World Bank: Migration and Development Brief 40](https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU-a9cf73b5-fcad-425a-a0dd-cc8f2f3331ce.pdf)
- [World Bank: Remittance Prices Worldwide Q3 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)
- [FSB: G20 Roadmap for Cross-border Payments, 2025](https://www.fsb.org/2025/10/g20-roadmap-for-cross-border-payments-consolidated-progress-report-for-2025/)
- [RBI: Changing Dynamics of India's Remittances](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23260)
- [State Bank of Pakistan: FY2025 Statistical Supplement](https://www.sbp.org.pk/assets/document/publications/reports-annual-aarFY25-Statistical-Supplement-Complete-Statistical-Supplement.pdf)
- [Bangladesh Bank: Annual Remittance Data](https://www.bb.org.bd/en/index.php/econdata/bop_yearly/5)
- [BSP: Overseas Filipinos' Remittances](https://www.bsp.gov.ph/statistics/external/ofw2.aspx)
- [Bank Indonesia: Indonesian Migrant Workers' Remittances](https://www.bi.go.id/SEKI/tabel/TABEL5_31.pdf)
- [European Commission: EU trade with Singapore](https://webgate.ec.europa.eu/isdb_results/factsheets/country/details_singapore_en.pdf)
- [Hong Kong Trade and Industry Department: Hong Kong–EU Trade Relations](https://www.tid.gov.hk/en/our_work/statistics/trade_partners/eu.html)
- [Inter-American Development Bank: 2025 LAC remittance estimate](https://www.iadb.org/en/blog/migration/remittances-latin-america-and-caribbean-ease-after-2025-surge)
- [Indian Parliament: private transfer credits for FY2022-23 and FY2023-24](https://eparlib.sansad.in/bitstream/123456789/2989690/1/18_External_Affairs_6.pdf)
- [Economic Survey of India 2025-26](https://www.indiabudget.gov.in/economicsurvey/doc/eschapter/echap04.pdf)
- [Circle Q1 2026: CPN network disclosures](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000148/final_05x11q1epr30.htm)
- [Banco de México: Remittances](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadroAnalitico&idCuadro=CA11&locale=es&sector=1)
- [IRS: Remittance transfer tax](https://www.irs.gov/irb/2025-43_IRB)
