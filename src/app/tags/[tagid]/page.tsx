import { useParams } from "react-router-dom";
import { DataDetails } from "../../../components/dataResultDetailsComponent";

import { commonArgs } from "../../../configs/types";
import  BlogData  from "../../../configs/blog/data";
import NotFound from "../../../components/404";

export default function BlogDetails({ theme, lang, slug }: commonArgs) {
  const { tagid } = useParams();

  const data = BlogData.find((item) => item.slug === tagid);

  if (!data) {
    return <NotFound />;
  }

  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
