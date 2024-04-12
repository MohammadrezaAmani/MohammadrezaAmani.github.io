import React, { useEffect, useState } from "react";

import { SearchBar } from "../components/search-bar";
import { resultType, Data as DataType } from "../configs/types";
import { DataItem } from "./dataItem";
import { useLang } from "../hooks/langHook";

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
  const [pageData, setPageData] = useState<DataType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  // const [loading, setLoading] = useState(true);
  const data = props.data;
  useEffect(() => {
    setPageData(data.slice(0, pageNumber * shownItemsPerPage));
    // setLoading(false);
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
  return (
    <div className="mt-20 m-8">
      <div className={`flex flex-row `}>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {pageData.map((item, index) => (
          <DataItem key={index} data={item} slug={props.slug} />
        ))}
      </div>
      <div id="observer"></div>
    </div>
  );
};
