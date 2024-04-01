import { Blog as BlogComponent } from "../components/blog";
import { fullArgs } from "../configs/types";
import { Layout } from "./layout";

export function Blog(
  { lang, toggleLang, theme, toggleTheme }: fullArgs,
  ...props: any
) {
  return (
    <Layout
      lang={lang}
      toggleLang={toggleLang}
      theme={theme}
      toggleTheme={toggleTheme}
      children={<BlogComponent lang={lang} theme={theme} />}
    />
  );
}
