import EducationData from "../education/data";
import ExperiencesData from "../experiences/data";
import ProjectsData from "../projects/data";
import CoursesData from "../courses/data";
import PublicationsData from "../publications/data";
import { profile } from "../data";
const Data = {
  personal: profile,
  education: EducationData,
  experiences: ExperiencesData,
  projects: ProjectsData,
  courses: CoursesData,
  publications: PublicationsData,
};

export default Data;
