import { Data } from "../../components/dataResultComponent";
import { commonArgs } from "../../configs/types";
import { blogData } from "../../configs/blogdata";

export default function Project({ theme, lang, slug }: commonArgs) {
  return <Data lang={lang} theme={theme} slug={slug} data={blogData} />;
}
