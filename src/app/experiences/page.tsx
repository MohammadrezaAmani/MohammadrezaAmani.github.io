import { Data } from "../../components/dataResultComponent";
import { commonArgs } from "../../configs/types";
import ExperienceData from "../../configs/experiences/data";

export default function Blog(props: commonArgs) {
  return <Data slug={props.slug} data={ExperienceData} />;
}
