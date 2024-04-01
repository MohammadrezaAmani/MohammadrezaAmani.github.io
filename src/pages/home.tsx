import Hero from "../components/hero";
import { fullArgs } from "../configs/types";
import { Layout } from "./layout";

export function Home({ lang, toggleLang, theme, toggleTheme }: fullArgs) {
  return (
    <Layout
      lang={lang}
      toggleLang={toggleLang}
      theme={theme}
      toggleTheme={toggleTheme}
      children={<Hero lang={lang} theme={theme} />}
    />
  );
}
