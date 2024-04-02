import React, { useEffect, useState } from "react";
import { commonArgs, blogItemTypes } from "../configs/types";
import { Typography, Grid } from "@mui/material";
import { langs } from "../configs/site";
import { blogData } from "../configs/blogdata";
import { SearchBar } from "./search-bar";

const BlogItem = ({ blog, lang, theme }: blogItemTypes) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(`blog-item-${blog.slug}`);
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
  }, [blog.slug]);

  return (
    <div id={`blog-item-${blog.slug}`} className="shadow-lg rounded-sm p-6">
      <a href={"/#/blog/" + blog.slug} className="block w-full">
        <div className="h-48 w-full ">
          {isVisible && (
            <img
              src={blog.image}
              alt={blog[lang as keyof typeof langs].title}
              className="rounded-lg object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex justify-between mt-4">
          <Typography variant="h6">
            {blog[lang as keyof typeof langs].title}
          </Typography>
          <Typography variant="caption">{blog.updated_at}</Typography>
        </div>
        <Typography variant="body1" className="mt-2">
          {blog[lang as keyof typeof langs].description}
        </Typography>
      </a>
      <div className="mt-2 flex flex-row flex-wrap space-x-1 w-full">
        {blog.tags.map((tag, index) => (
          <Grid item key={index}>
            <Typography
              variant="caption"
              className="bg-gray-400 p-1 rounded-md flex-wrap"
            >
              <a href={"#/category/" + tag}>{"#" + tag}</a>
            </Typography>
          </Grid>
        ))}
      </div>
    </div>
  );
};

const filterBlogData = (searchText: string, lang: string) =>
  blogData.filter(
    (item) =>
      item[lang as keyof typeof langs].title
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item[lang as keyof typeof langs].description
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(searchText.toLowerCase())
  );

export const Blog = ({ lang, theme }: commonArgs) => {
  const [data, setData] = useState(blogData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(filterBlogData(value, lang));
  };

  return (
    <div className="m-8">
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
            <BlogItem blog={item} lang={lang} theme={theme} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
