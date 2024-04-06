import { useParams } from "react-router-dom";

import { commonArgs } from "../../../configs/types";
import { DataDetails } from "../../../components/dataResultDetailsComponent";
import NotFound from "../../../components/404";
import BlogData from "../../../configs/blog/data";

export default function BlogDetails({ theme, lang, slug }: commonArgs) {
  const { blogid } = useParams();

  const data = BlogData.find((item) => item.slug === blogid);

  if (!data) {
    return <NotFound />;
  }

  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
