import { useParams } from "react-router-dom";

import { commonArgs } from "../../../configs/types";
import { blogData } from "../../../configs/blogdata";

import { DataDetails } from "../../../components/dataResultDetailsComponent";

export default function BlogDetails({ theme, lang, slug }: commonArgs) {
  const { courseid } = useParams();
  const data = blogData.find((item) => item.slug === courseid);

  if (!data) {
    return <div>Not Found</div>;
  }

  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
