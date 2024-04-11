import { ThemeType } from "../../configs/types";
import Data, { resumeLangs } from "../../configs/resume/data";
import { langs } from "../../configs/langs";
function ResumeTemplate(props: {
  lang: keyof typeof langs;
  theme: ThemeType;
  slug: string;
  resumeLang: (typeof resumeLangs)[0];
}) {
  const indexing = Data.personal.langs.findIndex(
    (item) => item.lang === props.lang
  );
  const lang = Data.personal.langs[indexing];

  return (
    <div className="flex flex-row space-x-4 rtl:space-x-reverse p-7">
      <div className="mb-4 bg-slate-900 p-4 w-2/5">
        <img
          src={Data.personal.image}
          alt="John Doe"
          className="w-64 h-auto rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-xl text-white mb-2">
            {props.resumeLang.aboutme}
          </h2>
          <p className="flex flex-nowrap text-gray-300">{lang.about}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl mb-2 text-white">{props.resumeLang.skill}</h2>
          <ul className="list-disc list-inside grid grid-rows-2 text-gray-300">
            {lang.favorites.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-4 w-3/5">
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-5">{lang.name}</h2>
          <div className="grid grid-cols-2 gap-x-5">
            {Data.personal.socials.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-gray-900 hover:underline flex items-center"
              >
                <item.icon className="h-6 w-6 mr-1" />
                {item.value}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            {props.resumeLang.education}
          </h2>
          {Data.education.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.langs[indexing].title}
                </span>
                <span className="text-sm text-gray-400">
                  {item.created_at} - {item.updated_at}
                </span>
              </div>
              <p>{item.langs[indexing].description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            {props.resumeLang.experience}
          </h2>
          {Data.experiences.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.langs[indexing].title}
                </span>
                <span className="text-sm text-gray-400">
                  {item.created_at} - {item.updated_at}
                </span>
              </div>
              <p>{item.langs[indexing].description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            {props.resumeLang.projects}
          </h2>
          {Data.projects.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.langs[indexing].title}
                </span>
                {/* <span className="text-sm text-gray-400">
                  {item.created_at} - {item.updated_at}
                </span> */}
              </div>
              <p>{item.langs[indexing].description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplate;
