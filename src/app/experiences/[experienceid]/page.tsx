import { useParams } from "react-router-dom";


import { commonArgs } from "../../../configs/types";
import ExperienceData from "../../../configs/experiences/data";
import { DataDetails } from "../../../components/dataResultDetailsComponent";

export default function ExperienceDetails({ theme, lang, slug }: commonArgs) {
  const { experienceid } = useParams();
  const data = ExperienceData.find((experience) => experience.slug === experienceid);

  if (!data) {
    return <div>Not Found</div>;
  }


  return <DataDetails lang={lang} theme={theme} slug={slug} data={data} />;
}
