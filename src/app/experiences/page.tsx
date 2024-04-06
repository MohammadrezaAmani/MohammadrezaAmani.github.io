import { Data } from "../../components/dataResultComponent";
import { commonArgs } from "../../configs/types";
import ExperienceData from "../../configs/experiences/data";

export default function Blog({ theme, lang, slug }: commonArgs) {
  return <Data lang={lang} theme={theme} slug={slug} data={ExperienceData} />;
}
