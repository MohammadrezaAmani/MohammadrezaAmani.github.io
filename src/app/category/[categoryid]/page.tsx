import { useParams } from "react-router-dom";
import { commonArgs } from "../../../configs/types";
import  BlogData  from "../../../configs/blog/data";
import { DataDetails } from "../../../components/dataResultDetailsComponent";

import NotFound  from "../../../components/404";

export default function BlogDetails({ theme, lang, slug }: commonArgs) {
  const { categoryid } = useParams();
  const data = BlogData.find( (item) => item.slug === categoryid);

  if (!data) {
    return<NotFound />
  }

  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
