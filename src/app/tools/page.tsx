import { Data } from "../../components/dataResultComponent";
import { commonArgs } from "../../configs/types";
import BlogData from "../../configs/blog/data";

export default function Blog({ theme, lang, slug }: commonArgs) {
  return <Data lang={lang} theme={theme} slug={slug} data={BlogData} />;
}
