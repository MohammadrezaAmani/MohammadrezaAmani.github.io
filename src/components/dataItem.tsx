import { routes } from "../configs/routes";
import { BaseUri } from "../configs/site";
import { dataType } from "../configs/types";

export const DataItem: React.FC<dataType> = ({ data, lang, slug, theme }) => {
  let keylang = data.langs.find((item) => item.lang === lang);
  if (!keylang) {
    keylang = data.langs[0];
  }
  return (
    <div id={`data-item-${data.slug}`} className="shadow-lg rounded-sm p-6">
      <a href={BaseUri + slug + "/" + data.slug} className="block w-full">
        {data.image !== "" && (
          <div className="h-48 w-full ">
            <img
              src={data.image}
              alt={keylang.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex justify-between mt-4">
          <h6 className="text-xl font-bold">{keylang.title}</h6>
          <p className="text-xs">{data.updated_at}</p>
        </div>
        <p className="mt-2">{keylang.description}</p>
      </a>
      <div className="mt-2 flex flex-row flex-wrap space-x-1 w-full">
        {data.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 p-1 rounded-md flex-wrap">
            <a href={BaseUri + routes.category.path + "/" + tag}>{"#" + tag}</a>
          </span>
        ))}
      </div>
    </div>
  );
};
