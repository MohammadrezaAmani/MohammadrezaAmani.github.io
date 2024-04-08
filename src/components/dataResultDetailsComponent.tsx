import { IoReturnUpBackOutline } from "react-icons/io5";

import { dataType } from "../configs/types";
import { routes } from "../configs/routes";
import { BaseUri } from "../configs/site";

export function DataDetails({ theme, lang, slug, data }: dataType) {
  let lang_data = data.langs.find((item) => item.lang === lang);
  console.log(lang_data, lang, data.langs);
  if (!lang_data) {
    lang_data = data.langs[0];
  }
  slug = slug.split(":")[0];
  return (
    <div className="mx-4">
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden ">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex flex-col">
              <div className="flex items-center ">
                <img src={data.logo} alt="logo" className="w-16 h-auto mr-4" />
                <h5 className="mb-1">{lang_data.title}</h5>
              </div>
              <p className="text-sm text-gray-500">
                {data.created_at}
              </p>
            </div>
            <div className="flex-grow"></div>
            <div>
              <a
                href={BaseUri + slug}
                className="text-blue-500 hover:underline"
              >
                <IoReturnUpBackOutline className="w-6 h-6" />
              </a>
            </div>
          </div>
          <img src={data.image} alt="data" className="w-full mb-4 rounded-lg" />
          <p className="mb-4">{lang_data.description}</p>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md my-3">
            {lang_data.data}
          </div>
        </div>
        <div className="flex flex-wrap px-4 space-x-1 rtl:space-x-reverse space-y-1 pb-5">
          {data.tags.map((tag, index) => (
            <div key={index} >
              <a className="bg-gray-200 p-1 rounded-md text-xs" href={BaseUri + routes.category.path + "/" + tag}>
                {"#" + tag}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
