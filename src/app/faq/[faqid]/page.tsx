import { useParams } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import { commonArgs } from "../../../configs/types";
import { blogData } from "../../../configs/blogdata";
import { langs } from "../../../configs/site";

import { routes } from "../../../configs/routes";
import { BaseUri } from "../../../configs/site";

export default function BlogDetails({ theme, lang, slug }: commonArgs) {
  const { blogid } = useParams();
  console.log(blogid);
  const blog = blogData.find((blog) => blog.slug === blogid);

  if (!blog) {
    return <div>Not Found</div>;
  }

  return (
    <div className="mx-4">
      <Card className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden ">
        <CardContent>
          <div className="flex items-center mb-4">
            <img src={blog.logo} alt="logo" className="w-16 h-auto mr-4" />
            <div>
              <Typography variant="h5" className="mb-1">
                {blog[lang as keyof typeof langs].title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {blog.created_at}
              </Typography>
            </div>
          </div>
          <img src={blog.image} alt="blog" className="w-full mb-4 rounded-lg" />
          <Typography variant="body1" className="mb-4">
            {blog[lang as keyof typeof langs].description}
          </Typography>
          <div className="blog-content">
            {blog[lang as keyof typeof langs].data}
          </div>
        </CardContent>
        <Grid container spacing={2} className="p-4">
          {blog.tags.map((tag, index) => (
            <Grid item key={index}>
              <Typography
                variant="caption"
                className="bg-gray-200 p-1 rounded-md"
              >
                <a href={BaseUri + "/" + routes.category.path + "/" + tag}>
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
