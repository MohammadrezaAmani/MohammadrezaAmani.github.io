import React from "react";
import { blogItemTypes } from "@/configs/types";
import { Card, CardContent, Grid, Typography } from "@mui/material"; // Import Material-UI components

export function BlogDetailsComponent({ lang, theme, blog }: blogItemTypes) {
  return (
    <div className="mx-4">
      <Card className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden ">
        <CardContent>
          <div className="flex items-center mb-4">
            <img src={blog.logo} alt="logo" className="w-16 h-auto mr-4" />
            <div>
              <Typography variant="h5" className="mb-1">
                {lang === "en" ? blog.en.title : blog.fa.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {blog.created_at}
              </Typography>
            </div>
          </div>
          <img src={blog.image} alt="blog" className="w-full mb-4 rounded-lg" />
          <Typography variant="body1" className="mb-4">
            {lang === "en" ? blog.en.description : blog.fa.description}
          </Typography>
          <div className="blog-content">
            {lang === "en" ? blog.en.data : blog.fa.data}
          </div>
        </CardContent>
        <Grid container spacing={2} className="p-4">
          {blog.tags.map((tag, index) => (
            <Grid item key={index}>
              <Typography
                variant="caption"
                className="bg-gray-200 p-1 rounded-md"
              >
                <a href={"#/category/" + tag}>{"#" + tag}</a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
