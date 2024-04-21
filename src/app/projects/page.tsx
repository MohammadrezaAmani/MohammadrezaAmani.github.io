import { Data } from "../../components/dataResultComponent";
import { commonArgs } from "../../configs/types";
import BlogData from "../../configs/projects/data";

export default function Blog(props: commonArgs) {
  return <Data slug={props.slug} data={BlogData} />;
}
