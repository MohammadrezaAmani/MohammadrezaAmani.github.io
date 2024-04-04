import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { langs } from "../configs/site";
import { projectData } from "../configs/projectdata";
import { commonArgs, projectItemTypes } from "../configs/types";
import { SearchBar } from "./search-bar";

const ProjectItem = ({ project, lang, theme }: projectItemTypes) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(
      `project-item-${project.slug}`
    );
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    observer.observe(targetElement);

    return () => observer.disconnect();
  }, [project.slug]);

  return (
    <div
      id={`project-item-${project.slug}`}
      className="shadow-lg rounded-sm p-6"
    >
      <a href={"/#/project/" + project.slug} className="block w-full">
        <div className="h-48 w-full">
          {isVisible && (
            <img
              src={project.image}
              alt={project[lang as keyof typeof langs].title}
              className="rounded-lg h-full w-full object-cover"
            />
          )}
        </div>
        <div className="flex justify-between mt-4">
          <Typography variant="h6">
            {project[lang as keyof typeof langs].title}
          </Typography>
          <Typography variant="caption">{project.updated_at}</Typography>
        </div>
        <Typography variant="body1" className="mt-2">
          {project[lang as keyof typeof langs].description}
        </Typography>
      </a>
      <div className="mt-2 flex flex-row flex-wrap space-x-1 w-full">
          {project.tags.map((tag, index) => (
            <Grid item key={index}>
              <Typography
                variant="caption"
                className="bg-slate-200 p-1 rounded-md flex-wrap shadow-sm"
              >
                <a href={"#/category/" + tag}>{"#" + tag}</a>
              </Typography>
            </Grid>
          ))}
        </div>
    </div>
  );
};

const filterprojectData = (searchText: string, lang: string) =>
  projectData.filter(
    (item) =>
      item[lang as keyof typeof langs].title
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item[lang as keyof typeof langs].description
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(searchText.toLowerCase())
  );

export const Project = ({ theme, lang, slug }: commonArgs)=> {
  const [data, setData] = useState(projectData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(filterprojectData(value, lang));
  };

  return (
    <div className="m-8 md-8">
      <div className="flex flex-row">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <Grid container spacing={4} justifyContent="center mt-4">
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="grid-flow-dense"
          >
            <ProjectItem project={item} lang={lang} theme={theme} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};