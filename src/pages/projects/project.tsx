import { Project as ProjectComponent } from "../components/project";
import { fullArgs } from "@/configs/types";
import { Layout } from "./layout";

export function Project(
  { lang, toggleLang, theme, toggleTheme }: fullArgs,
  ...props: any
) {
  return (
    <Layout
      lang={lang}
      toggleLang={toggleLang}
      theme={theme}
      toggleTheme={toggleTheme}
      children={<ProjectComponent lang={lang} theme={theme} />}
    />
  );
}
