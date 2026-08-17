import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders aligned Chinese and English research pages", async () => {
  const [zhResponse, enResponse] = await Promise.all([render("/"), render("/en")]);
  assert.equal(zhResponse.status, 200);
  assert.equal(enResponse.status, 200);
  assert.match(zhResponse.headers.get("content-type") ?? "", /^text\/html\b/i);

  const [zh, en] = await Promise.all([zhResponse.text(), enResponse.text()]);
  for (const html of [zh, en]) {
    assert.equal((html.match(/class="data-figure"/g) ?? []).length, 5);
    assert.equal((html.match(/<article id="report"/g) ?? []).length, 1);
    assert.equal((html.match(/<h1/g) ?? []).length, 1);
    for (const id of ["executive-summary", "cpn-bfi-economics", "gulf-to-south-asia", "validation-plan", "limitations", "sources"]) {
      assert.match(html, new RegExp(`id="${id}"`));
      assert.match(html, new RegExp(`href="#${id}"`));
    }
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
    assert.doesNotMatch(html, /public-data lower bound|公开数据下限/i);
  }

  assert.match(zh, /<html[^>]*lang="zh-CN"/);
  assert.match(en, /<html[^>]*lang="en"/);
  assert.match(zh, /跨境支付走廊：流量信号与服务缺口假设/);
  assert.match(en, /Cross-border payment corridors: flow signals and service-gap hypotheses/i);
  assert.match(zh, /USD 64\.7bn/);
  assert.match(en, /USD 64\.7bn/);
  assert.match(zh, /https:\/\/yyd106\.github\.io\/payment-research\//);
  assert.match(en, /https:\/\/yyd106\.github\.io\/payment-research\/en\//);
});
