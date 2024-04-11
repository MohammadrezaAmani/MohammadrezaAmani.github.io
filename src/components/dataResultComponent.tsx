import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@mui/material";

import { SearchBar } from "../components/search-bar";
import { resultType, Data as DataType } from "../configs/types";
import { DataItem } from "./dataItem";
import { useLang } from "../hooks/langHook";
import { useTheme } from "../hooks/themeHook"; // Import useTheme hook

const shownItemsPerPage = 12;

const filterData = (data: DataType[], searchText: string, lang: string) =>
  data.filter((item) => {
    let lang_data = item.langs.find((item) => item.lang === lang);
    if (!lang_data) {
      lang_data = item.langs[0];
    }
    return (
      lang_data.title.toLowerCase().includes(searchText.toLowerCase()) ||
      lang_data.description.toLowerCase().includes(searchText.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(searchText.toLowerCase())
    );
  });

export const Data: React.FC<resultType> = (props) => {
  const { lang } = useLang();
  const { theme } = useTheme(); // Access the theme state
  const [pageData, setPageData] = useState<DataType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const data = props.data;
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

  // Define classes based on theme
  const searchBarClass = theme === "light" ? "bg-white" : "bg-gray-800";

  return (
    <div className="m-8">
      <div className={`flex flex-row ${searchBarClass}`}>
        {" "}
        {/* Apply conditional class */}
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
            <DataItem data={item} slug={props.slug} />
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
