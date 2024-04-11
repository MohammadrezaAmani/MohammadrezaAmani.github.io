import { useParams } from "react-router-dom";

import { commonArgs } from "../../../configs/types";
import EducationData from "../../../configs/education/data";
import { DataDetails } from "../../../components/dataResultDetailsComponent";
import NotFound from "../../../components/404";

export default function EducationDetails(props: commonArgs) {
  const { educationid } = useParams();
  const data = EducationData.find((item) => item.slug === educationid);

  if (!data) {
    return <NotFound />;
  }

  return <DataDetails slug={props.slug} data={data} />;
}
