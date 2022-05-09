import { createContext, useState } from "react";

export const SearchBarContext = createContext();

export const SearchBarProvider = (props) => {
  const [countryCode, setCountryCode] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [resultsNumber, setResultsNumber] = useState(10);

  const search = {
    countryCode,
    setCountryCode,
    countryName,
    setCountryName,
    resultsNumber,
    setResultsNumber,
  };

  return (
    <SearchBarContext.Provider value={search}>
      {props.children}
    </SearchBarContext.Provider>
  );
};
