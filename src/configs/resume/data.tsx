import EducationData from "../education/data";
import ExperiencesData from "../experiences/data";
import ProjectsData from "../projects/data";
import CoursesData from "../courses/data";
import PublicationsData from "../publications/data";
import { profile } from "../data";
import { langs } from "../langs";
const Data = {
  personal: profile,
  education: EducationData,
  experiences: ExperiencesData,
  projects: ProjectsData,
  courses: CoursesData,
  publications: PublicationsData,
};

export default Data;

export const resumeLangs = [
  {
    lang: langs.en.short,
    aboutme: "ABOUT ME",
    education: "EDUCATION",
    skill: "SKILLS",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    courses: "COURSES",
    publications: "PUBLICATIONS",
    download: "Download",
    back: "Back",
    print: "Print",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
  },
  {
    lang: langs.fa.short,
    aboutme: "درباره من",
    education: "تحصیلات",
    skill: "مهارت‌ها",
    experience: "تجربیات",
    projects: "پروژه‌ها",
    courses: "دوره‌ها",
    publications: "منتشر شده‌ها",
    download: "دانلود",
    back: "بازگشت",
    print: "چاپ",
    theme: "تم",
    light: "روشن",
    dark: "تاریک",
  },
];
