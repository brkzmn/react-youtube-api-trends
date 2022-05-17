import React from "react";
import useFetch from "../hooks/useFetch";
import CountrySelect from "./CountrySelect";
import ResultsNumberSelect from "./CountryNumber";
import LinearProgress from "@mui/material/LinearProgress";

const TrendSearchBar = () => {
  const countryDetailsUrl = "https://restcountries.com/v2/all";
  const { data, isLoading, error } = useFetch(countryDetailsUrl);

  return (
    <div>
      {isLoading === true && <LinearProgress color="secondary" />}
      <div className="searchbar-container">
        {error !== null && <div>{error}</div>}

        {data !== null && (
          <div className="input-field-container">
            <CountrySelect data={data} />
            <ResultsNumberSelect />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendSearchBar;
