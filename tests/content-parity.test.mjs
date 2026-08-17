import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const [zh, en, generated, csv, charts, reportPage] = await Promise.all([
  readFile(new URL("content/report.zh.md", root), "utf8"),
  readFile(new URL("content/report.en.md", root), "utf8"),
  readFile(new URL("content/generated.ts", root), "utf8"),
  readFile(new URL("public/data/corridor-data.csv", root), "utf8"),
  readFile(new URL("components/Charts.tsx", root), "utf8"),
  readFile(new URL("components/ReportPage.tsx", root), "utf8"),
]);

const count = (text, expression) => (text.match(expression) ?? []).length;
const urls = (text) => [...text.matchAll(/https?:\/\/[^)\s]+/g)].map((match) => match[0]);
const headingProfile = (text) => text.split(/^## /m).slice(1).map((section) => count(section, /^### /gm));
const tableNumbers = (text) => text.split("\n").filter((line) => line.startsWith("|")).flatMap((line) => line.match(/\d+(?:\.\d+)?/g) ?? []).sort();

test("keeps the bilingual report structure, tables and sources aligned", () => {
  assert.equal(count(zh, /^## /gm), 14);
  assert.equal(count(en, /^## /gm), 14);
  assert.deepEqual(headingProfile(zh), headingProfile(en));
  assert.equal(count(zh, /^\|/gm), count(en, /^\|/gm));
  assert.deepEqual(tableNumbers(zh), tableNumbers(en));
  assert.deepEqual(urls(zh), urls(en));
  assert.ok(urls(zh).length >= 60);
  assert.doesNotMatch(en, /[\u3400-\u9fff]/);
});

test("preserves the material evidence boundaries", () => {
  assert.match(zh, /只能形成待验证问题，不能直接写成“需求没有被满足”/);
  assert.match(en, /question to validate/i);
  assert.match(zh, /不是数学下限，也不是完整市场规模/);
  assert.match(en, /neither a mathematical lower bound nor a complete market size/i);
  assert.match(zh, /不能证明.*BFI.*垄断/s);
  assert.match(en, /do not support.*monopolized by a BFI/i);
  assert.match(zh, /enrolled（登记加入）/);
  assert.match(en, /enrolled/);
  assert.match(zh, /按此前 30 天活动计算的年化交易量/);
  assert.match(en, /annualized transaction volume.*preceding 30 days/i);
  assert.doesNotMatch(`${zh}\n${en}`, /公开数据下限|public-data lower bound/i);
  assert.doesNotMatch(`${zh}\n${en}`, /2025 年 1,071 亿美元|USD 107\.1 billion in 2025/);
});

test("ships stable anchors, all report tables and synchronized chart values", () => {
  for (const id of ["executive-summary", "cpn-bfi-economics", "gulf-to-south-asia", "global-to-latam", "us-to-global", "limitations", "sources"]) {
    assert.ok(generated.includes(`id=\\"${id}\\"`), `missing generated anchor ${id}`);
  }
  assert.match(generated, /reportTableCount = 11/);
  assert.match(csv, /Gulf to India Pakistan Bangladesh and Philippines,50\.6,54\.8,64\.7,USD billion/);
  assert.match(csv, /Europe to Asia composite proxy,19\.7,20\.7,23\.3,USD billion/);
  assert.match(csv, /United States personal-remittance outflows,98\.3,103\.2,,USD billion/);
  for (const value of ["50.6", "54.8", "64.7", "19.7", "20.7", "23.3", "35.1", "17.2", "8.4", "4.0"]) {
    assert.ok(charts.includes(value), `chart source missing ${value}`);
  }
  assert.match(reportPage, /USD 64\.7bn/);
  assert.match(reportPage, /USD 23\.3bn/);
});
