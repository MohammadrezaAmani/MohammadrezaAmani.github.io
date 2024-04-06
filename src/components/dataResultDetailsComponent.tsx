import { Card, CardContent, Grid, Typography } from "@mui/material";
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
      <Card className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden ">
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="flex flex-col">
              <div className="flex items-center ">
                <img src={data.logo} alt="logo" className="w-16 h-auto mr-4" />
                <Typography variant="h5" className="mb-1">
                  {lang_data.title}
                </Typography>
              </div>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                sx={{
                  marginLeft: "2.5rem",
                  marginRight: "2.5rem",
                }}
              >
                {data.created_at}
              </Typography>
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
          <Typography variant="body1" className="mb-4">
            {lang_data.description}
          </Typography>
          <div className="data-content bg-gray-100 p-8 rounded-lg shadow-md my-3">
            {lang_data.data}
          </div>
        </CardContent>
        <Grid container spacing={2} className="p-4">
          {data.tags.map((tag, index) => (
            <Grid item key={index}>
              <Typography
                variant="caption"
                className="bg-gray-200 p-1 rounded-md"
              >
                <a href={BaseUri + routes.category.path + "/" + tag}>
                  {"#" + tag}
                </a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
