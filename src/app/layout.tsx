import React, { useMemo } from "react";

import Header from "./../components/header";
import Footer from "./../components/footer";
import { veryFullArgs } from "./../configs/types";

export function Layout({
  lang,
  toggleLang,
  theme,
  toggleTheme,
  children,
}: veryFullArgs) {
  // Memoize the Header component
  const memoizedHeader = useMemo(
    () => (
      <Header
        lang={lang}
        toggleLang={toggleLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    ),
    [lang, toggleLang, theme, toggleTheme]
  );

  // Memoize the Footer component
  const memoizedFooter = useMemo(
    () => <Footer lang={lang} theme={theme} slug="/" />,
    [lang, theme]
  );

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col w-full">
        {memoizedHeader}
        {children}
      </div>
      {memoizedFooter}
    </div>
  );
}
