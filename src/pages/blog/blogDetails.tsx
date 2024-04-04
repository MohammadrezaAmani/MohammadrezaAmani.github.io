import { fullArgs } from "@/configs/types";
import { Layout } from "./layout";
import { useParams } from "react-router-dom";
import { BlogDetailsComponent } from "../components/blogDetailsComponent";
import { blogData } from "@/configs/blogdata";
export function BlogDetails({
  lang,
  toggleLang,
  theme,
  toggleTheme,
}: fullArgs) {
  const { blogslug } = useParams();
  const blog = blogData.find((blog) => blog.slug === blogslug);
  if (!blog) {
    return <div>Not Found</div>;
  }
  return (
    <Layout
      lang={lang}
      toggleLang={toggleLang}
      theme={theme}
      toggleTheme={toggleTheme}
      children={<BlogDetailsComponent lang={lang} theme={theme} blog={blog} />}
    />
  );
}
