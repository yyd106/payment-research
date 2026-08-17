import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
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
    assert.match(html, /id="gulf-to-south-asia"/);
    assert.match(html, /id="us-to-global"/);
    assert.match(html, /id="sources"/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
  }

  assert.match(zh, /跨境支付走廊：流量与未满足需求/);
  assert.match(zh, /2025：WDI 尚未发布/);
  assert.match(en, /Cross-border payment corridors: flows and unmet needs/);
  assert.match(en, /2025: not yet available in WDI/);
  assert.match(en, /CPN enrolled institutions/);
});
