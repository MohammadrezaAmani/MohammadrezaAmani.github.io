import React from "react";
import { projectItemTypes } from "../configs/types";
import { Card, CardContent, Grid, Typography } from "@mui/material"; // Import Material-UI components

export function ProjectDetailsComponent({
  lang,
  theme,
  project,
}: projectItemTypes) {
  return (
    <div className="mx-4 md-20">
      <Card className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden ">
        <CardContent>
          <div className="flex items-center mb-4">
            <img src={project.logo} alt="logo" className="w-16 h-auto mr-4" />
            <div>
              <Typography variant="h5" className="mb-1">
                {lang === "en" ? project.en.title : project.fa.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {project.created_at}
              </Typography>
            </div>
          </div>
          <img
            src={project.image}
            alt="project"
            className="w-full mb-4 rounded-lg"
          />
          <Typography variant="body1" className="mb-4">
            {lang === "en" ? project.en.description : project.fa.description}
          </Typography>
          <div className="project-content">
            {lang === "en" ? project.en.data : project.fa.data}
          </div>
        </CardContent>
        <Grid container spacing={2} className="p-4">
          {project.tags.map((tag, index) => (
            <Grid item key={index}>
              <Typography
                variant="caption"
                className="bg-gray-200 p-1 rounded-md"
              >
                {tag}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
