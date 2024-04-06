import { Typography, Grid } from "@mui/material";
import { dataType } from "../configs/types";
import { routes } from "../configs/routes";
import { BaseUri } from "../configs/site";

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
          <Typography variant="h6">{keylang.title}</Typography>
          <Typography variant="caption">{data.updated_at}</Typography>
        </div>
        <Typography variant="body1" className="mt-2">
          {keylang.description}
        </Typography>
      </a>
      <div className="mt-2 flex flex-row flex-wrap space-x-1 w-full">
        {data.tags.map((tag, index) => (
          <Grid item key={index}>
            <Typography
              variant="caption"
              className="bg-gray-400 p-1 rounded-md flex-wrap"
            >
              <a href={BaseUri + routes.category.path + "/" + tag}>
                {"#" + tag}
              </a>
            </Typography>
          </Grid>
        ))}
      </div>
    </div>
  );
};
