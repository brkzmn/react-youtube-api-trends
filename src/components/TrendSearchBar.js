import React, { useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import CountrySelect from "./CountrySelect";
import { SearchBarContext } from "../contexts/SearchBarContext";
import ResultsNumberSelect from "./CountryNumber";

const TrendSearchBar = () => {
  const countryDetailsUrl = "https://restcountries.com/v2/all";
  const { data, isLoading, error } = useFetch(countryDetailsUrl);

  return (
    <div className="searchbar-container">
      {error !== null && <div>{error}</div>}
      {isLoading === true && <div>Loading...</div>}
      {data !== null && (
        <div className="input-field-container">
          <CountrySelect data={data} />
          <ResultsNumberSelect />
        </div>
      )}
    </div>
  );
};

export default TrendSearchBar;
