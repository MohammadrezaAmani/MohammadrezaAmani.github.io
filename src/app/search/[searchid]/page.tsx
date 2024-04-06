import { useParams } from "react-router-dom";
import { DataDetails } from "../../../components/dataResultDetailsComponent";

import { commonArgs } from "../../../configs/types";
import { blogData } from "../../../configs/blogdata";

export default function BlogDetails({ theme, lang, slug }: commonArgs) {
  const { searchid } = useParams();

  const data = blogData.find((item) => item.slug === searchid);

  if (!data) {
    return <div>Not Found</div>;
  }

  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
