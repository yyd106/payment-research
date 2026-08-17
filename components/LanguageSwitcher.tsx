"use client";

import type { MouseEvent } from "react";

type Language = "zh" | "en";

export function LanguageSwitcher({ language }: { language: Language }) {
  const links = language === "zh"
    ? { zh: "./", en: "./en/" }
    : { zh: "../", en: "./" };

  const keepSection = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.hash) event.currentTarget.href += window.location.hash;
  };

  return (
    <nav className="language-switcher" aria-label={language === "zh" ? "语言选择" : "Language selection"}>
      <a href={links.zh} onClick={keepSection} lang="zh-CN" aria-current={language === "zh" ? "page" : undefined}>中文</a>
      <a href={links.en} onClick={keepSection} lang="en" aria-current={language === "en" ? "page" : undefined}>EN</a>
    </nav>
  );
}
