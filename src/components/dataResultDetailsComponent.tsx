import { Card, CardContent, Grid, Typography } from "@mui/material";

import { dataType } from "../configs/types";

import { routes } from "../configs/routes";
import { BaseUri } from "../configs/site";

export function DataDetails({ theme, lang, slug, data }: dataType) {
  let lang_data = data.langs.find((item) => item.lang === lang);
  if (!lang_data) {
    lang_data = data.langs[0];
  }
  return (
    <div className="mx-4">
      <Card className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden ">
        <CardContent>
          <div className="flex items-center mb-4">
            <img src={data.logo} alt="logo" className="w-16 h-auto mr-4" />
            <div>
              <Typography variant="h5" className="mb-1">
                {lang_data.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {data.created_at}
              </Typography>
            </div>
          </div>
          <img src={data.image} alt="data" className="w-full mb-4 rounded-lg" />
          <Typography variant="body1" className="mb-4">
            {lang_data.description}
          </Typography>
          <div className="data-content">{lang_data.data}</div>
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
