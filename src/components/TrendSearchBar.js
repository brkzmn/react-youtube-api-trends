import React, { useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import CountrySelect from "./CountrySelect";
import { SearchBarContext } from "../contexts/SearchBarContext";

const TrendSearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchBarContext);

  const countryDetailsUrl = "https://restcountries.com/v3.1/all";
  const { data, isLoading, error } = useFetch(countryDetailsUrl);
  console.log(data);

  return (
    <div className="input-field">
      {error !== null && <div>{error}</div>}
      {isLoading == true && <div>Loading...</div>}
      {data !== null && <CountrySelect data={data} />}
    </div>
  );
};

export default TrendSearchBar;
