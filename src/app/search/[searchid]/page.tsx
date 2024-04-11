import { useParams } from "react-router-dom";
import { DataDetails } from "../../../components/dataResultDetailsComponent";

import { commonArgs } from "../../../configs/types";
import BlogData from "../../../configs/blog/data";
import NotFound from "../../../components/404";

export default function BlogDetails(props: commonArgs) {
  const { searchid } = useParams();

  const data = BlogData.find((item) => item.slug === searchid);

  if (!data) {
    return <NotFound />;
  }

  return <DataDetails slug={props.slug} data={data} />;
}
