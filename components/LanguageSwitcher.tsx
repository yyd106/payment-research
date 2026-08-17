"use client";

import { useEffect, useState } from "react";

type Language = "zh" | "en";

export function LanguageSwitcher({ language }: { language: Language }) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const links = language === "zh"
    ? { zh: `.${hash}`, en: `./en/${hash}` }
    : { zh: `../${hash}`, en: `.${hash}` };

  return (
    <nav className="language-switcher" aria-label={language === "zh" ? "语言选择" : "Language selection"}>
      <a href={links.zh} lang="zh-CN" aria-current={language === "zh" ? "page" : undefined}>中文</a>
      <a href={links.en} lang="en" aria-current={language === "en" ? "page" : undefined}>EN</a>
    </nav>
  );
}
