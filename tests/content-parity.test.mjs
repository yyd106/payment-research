import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const [zh, en, generated, csv] = await Promise.all([
  readFile(new URL("content/report.zh.md", root), "utf8"),
  readFile(new URL("content/report.en.md", root), "utf8"),
  readFile(new URL("content/generated.ts", root), "utf8"),
  readFile(new URL("public/data/corridor-data.csv", root), "utf8"),
]);

const count = (text, expression) => (text.match(expression) ?? []).length;
const urls = (text) => [...text.matchAll(/https?:\/\/[^)\s]+/g)].map((match) => match[0]);

test("keeps the bilingual report structure and sources aligned", () => {
  assert.equal(count(zh, /^## /gm), 14);
  assert.equal(count(en, /^## /gm), 14);
  assert.equal(count(zh, /^### /gm), count(en, /^### /gm));
  assert.equal(count(zh, /^\|/gm), count(en, /^\|/gm));
  assert.deepEqual(urls(zh), urls(en));
  assert.equal(urls(zh).length, 57);
  assert.doesNotMatch(en, /[\u3400-\u9fff]/);
  assert.doesNotMatch(`${zh}\n${en}`, /internal market screening|内部市场筛选|Pre-publication logic|发送前逻辑/);
  assert.match(zh, /三种口径不是按走廊划分的互斥类别/);
  assert.match(en, /measures are not mutually exclusive corridor categories/);
  assert.match(zh, /本报告如何使用/);
  assert.match(en, /How this report uses it/);
  assert.doesNotMatch(`${zh}\n${en}`, /本报告用于哪些走廊|Corridors covered in this report/);
});

test("preserves the report's material evidence statuses", () => {
  assert.match(zh, /FY2024-25 仍为暂定值/);
  assert.match(en, /FY2024-25 total remains provisional/);
  assert.match(zh, /2025 年 WDI 实绩尚未发布/);
  assert.match(en, /WDI actual for 2025 has not yet been published/);
  assert.match(zh, /登记加入（enrolled）CPN/);
  assert.match(en, /enrolled in CPN/);
  assert.match(zh, /按过去 30 天活动计算的年化交易量/);
  assert.match(en, /Annualized transaction volume based on the preceding 30 days/);
  assert.doesNotMatch(`${zh}\n${en}`, /2025 年 1,071 亿美元|USD 107\.1 billion in 2025/);
});

test("ships stable anchors, all report tables and shared chart data", () => {
  for (const id of ["executive-summary", "gulf-to-south-asia", "global-to-latam", "us-to-global", "limitations", "sources"]) {
    assert.ok(generated.includes(`id=\\"${id}\\"`), `missing generated anchor ${id}`);
  }
  assert.match(generated, /reportTableCount = 13/);
  assert.match(csv, /United States outflows,983,1032,,USD 100 million,not yet published in WDI/);
  assert.match(csv, /priority_corridors,Gulf focus,512,554,654/);
});
