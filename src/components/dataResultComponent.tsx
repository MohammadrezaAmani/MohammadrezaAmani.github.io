import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";

import { dataType, result_Type, Data as DataType } from "../configs/types";
import { langs } from "../configs/site";
import { SearchBar } from "../components/search-bar";
import { categoryRoute } from "../configs/site";
import { BaseUri } from "../configs/site";
const DataItem = ({ data, lang, theme, slug }: dataType) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(`data-item-${data.slug}`);
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
  }, [data.slug]);

  return (
    <div id={`data-item-${data.slug}`} className="shadow-lg rounded-sm p-6">
      <a href={BaseUri + slug + "/" + data.slug} className="block w-full">
        <div className="h-48 w-full ">
          {isVisible && (
            <img
              src={data.image}
              alt={data[lang as keyof typeof langs].title}
              className="rounded-lg object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex justify-between mt-4">
          <Typography variant="h6">
            {data[lang as keyof typeof langs].title}
          </Typography>
          <Typography variant="caption">{data.updated_at}</Typography>
        </div>
        <Typography variant="body1" className="mt-2">
          {data[lang as keyof typeof langs].description}
        </Typography>
      </a>
      <div className="mt-2 flex flex-row flex-wrap space-x-1 w-full">
        {data.tags.map((tag, index) => (
          <Grid item key={index}>
            <Typography
              variant="caption"
              className="bg-gray-400 p-1 rounded-md flex-wrap"
            >
              <a href={categoryRoute + "/" + tag}>{"#" + tag}</a>
            </Typography>
          </Grid>
        ))}
      </div>
    </div>
  );
};

const filterData = (data: DataType[], searchText: string, lang: string) =>
  data.filter(
    (item) =>
      item[lang as keyof typeof langs].title
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item[lang as keyof typeof langs].description
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(searchText.toLowerCase())
  );

export const Data = ({ lang, theme, data, slug }: result_Type) => {
  const [pageData, setPageData] = useState(data);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPageData(filterData(data, value, lang));
  };

  return (
    <div className="m-8">
      <div className="flex flex-row">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <Grid container spacing={4} justifyContent="center mt-4">
        {pageData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="grid-flow-dense"
          >
            <DataItem data={item} lang={lang} theme={theme} slug={slug} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
