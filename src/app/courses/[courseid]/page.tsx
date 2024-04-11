import { useParams } from "react-router-dom";

import { commonArgs } from "../../../configs/types";
import BlogData from "../../../configs/blog/data";

import { DataDetails } from "../../../components/dataResultDetailsComponent";
import NotFound from "../../../components/404";

export default function BlogDetails(props: commonArgs) {
  const { courseid } = useParams();
  const data = BlogData.find((item) => item.slug === courseid);

  if (!data) {
    return <NotFound />;
  }

  return <DataDetails slug={props.slug} data={data} />;
}
