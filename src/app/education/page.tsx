import { Data } from "../../components/dataResultComponent";
import { commonArgs } from "../../configs/types";
import EducationData from "../../configs/education/data";

export default function Blog(props: commonArgs) {
  return <Data slug={props.slug} data={EducationData} />;
}
