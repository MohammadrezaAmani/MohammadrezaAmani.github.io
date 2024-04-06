import { useParams } from "react-router-dom";

import { commonArgs } from "../../../configs/types";
import EducationData from "../../../configs/education/data";
import { DataDetails } from "../../../components/dataResultDetailsComponent";

export default function EducationDetails({ theme, lang, slug }: commonArgs) {
  const { educationid } = useParams();
  const data = EducationData.find((item) => item.slug === educationid);

  if (!data) {
    return <div>Not Found</div>;
  }

  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
