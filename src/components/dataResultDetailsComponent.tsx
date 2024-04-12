import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

import { dataType } from "../configs/types";
import { routes } from "../configs/routes";
import { BaseUri } from "../configs/site";
import { useLang } from "../hooks/langHook";
import { useTheme } from "../hooks/themeHook"; // Import useTheme hook

export function DataDetails({ slug, data }: dataType) {
  const { lang } = useLang();
  const { theme } = useTheme(); // Access the theme state
  let lang_data = data.langs.find((item) => item.lang === lang);
  console.log(lang_data, lang, data.langs);
  if (!lang_data) {
    lang_data = data.langs[0];
  }
  slug = slug.split(":")[0];

  // Define classes based on theme
  const containerClass = theme === "light" ? "bg-white" : "bg-gray-900";
  const textColorClass = theme === "light" ? "text-gray-500" : "text-gray-400";
  const linkColorClass = theme === "light" ? "text-blue-500" : "text-blue-300";
  const iconColorClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <div className="mx-4">
      <div
        className={`max-w-3xl mx-auto mt-8 ${containerClass} shadow-md rounded-lg overflow-hidden`}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex flex-col">
              <div className="flex items-center ">
                <img src={data.logo} alt="logo" className="w-16 h-auto mr-4" />
                <h5 className={`mb-1 ${textColorClass}`}>{lang_data.title}</h5>
              </div>
              <p className={`text-sm ${textColorClass}`}>{data.created_at}</p>
            </div>
            <div className="flex-grow"></div>
            <div>
              <a
                href={BaseUri + slug}
                className={`hover:underline ${linkColorClass}`}
              >
                <IoReturnUpBackOutline
                  className={`w-6 h-6 ${iconColorClass}`}
                />
              </a>
            </div>
          </div>
          <img src={data.image} alt="data" className="w-full mb-4 rounded-lg" />
          <p className={`mb-4 ${textColorClass}`}>{lang_data.description}</p>
          <div
            className={`bg-gray-100 dark:bg-gray-400 p-4 sm:p-6 rounded-lg shadow-md my-3 ${textColorClass}`}
          >
            {lang_data.data}
          </div>
        </div>
        <div className="flex flex-wrap px-4 space-x-1 rtl:space-x-reverse space-y-1 pb-5">
          {data.tags.map((tag, index) => (
            <div key={index}>
              <a
                className="bg-gray-200 p-1 rounded-md text-xs"
                href={BaseUri + routes.category.path + "/" + tag}
              >
                {"#" + tag}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
