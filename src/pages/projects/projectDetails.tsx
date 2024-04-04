import { fullArgs } from "@/configs/types";
import { Layout } from "./layout";
import { useParams } from "react-router-dom";
import { ProjectDetailsComponent } from "../components/projectDetailsComponent";
import { projectData } from "@/configs/projectdata";
export function ProjectDetails({
  lang,
  toggleLang,
  theme,
  toggleTheme,
}: fullArgs) {
  const { projectslug } = useParams();
  const project = projectData.find((project) => project.slug === projectslug);
  if (!project) {
    return <div>Not Found</div>;
  }
  return (
    <Layout
      lang={lang}
      toggleLang={toggleLang}
      theme={theme}
      toggleTheme={toggleTheme}
      children={
        <ProjectDetailsComponent lang={lang} theme={theme} project={project} />
      }
    />
  );
}
