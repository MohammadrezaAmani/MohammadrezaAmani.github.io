import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { langs } from "../configs/site";
import { SearchBar } from "../components/search-bar";
import { result_Type, Data as DataType } from "../configs/types";
import { DataItem } from "./dataItem";

const shownItemsPerPage = 12;

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

export const Data: React.FC<result_Type> = ({ lang, data, slug, theme }) => {
  const [pageData, setPageData] = useState<DataType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageData(data.slice(0, pageNumber * shownItemsPerPage));
    setLoading(false);
  }, [data, pageNumber]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPageNumber(1);
    const filteredData = filterData(data, value, lang);
    setPageData(filteredData.slice(0, shownItemsPerPage));
  };

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    const target = document.getElementById("observer");
    if (target) {
      observer.observe(target);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

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
            <DataItem data={item} lang={lang} slug={slug} theme={theme} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <div className="flex justify-center mt-4">
          <CircularProgress />
        </div>
      )}
      <div id="observer"></div>
    </div>
  );
};
