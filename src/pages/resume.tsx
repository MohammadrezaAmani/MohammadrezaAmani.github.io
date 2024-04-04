import { Resume as ResumeComponent } from "../components/resume";
import { fullArgs } from "@/configs/types";
import { Layout } from "./layout";

export function Resume(
  { lang, toggleLang, theme, toggleTheme }: fullArgs,
  ...props: any
) {
  return (
    <Layout
      lang={lang}
      toggleLang={toggleLang}
      theme={theme}
      toggleTheme={toggleTheme}
      children={<ResumeComponent lang={lang} theme={theme} />}
    />
  );
}
