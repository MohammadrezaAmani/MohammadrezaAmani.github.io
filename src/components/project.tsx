import React, { useEffect, useState } from "react";
import { commonArgs, projectItemTypes } from "../configs/types";
import { List, Typography, Grid } from "@mui/material";
import { langs } from "../configs/site";
import { projectData } from "../configs/projectdata";
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
    <a href={"/#/project/" + project.slug} className="block w-full">
      <div
        id={`project-item-${project.slug}`}
        className="shadow-lg rounded-sm p-6"
      >
        <div className="h-48 w-72">
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
        <div className="mt-2">
          <List className="flex text-xs text-wrap flex-auto space-x-1">
            {project.tags.map((tag, index) => (
              <li className="m-x-1" key={index}>
                {"#"}
                {tag}
              </li>
            ))}
          </List>
        </div>
      </div>
    </a>
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

export const Project = ({ lang, theme }: commonArgs) => {
  const [data, setData] = useState(projectData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(filterprojectData(value, lang));
  };

  return (
    <div className="m-6">
      <div className="ltr:m-8 rtl:my-6 ml-8 mr-8">
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
    </div>
  );
};
