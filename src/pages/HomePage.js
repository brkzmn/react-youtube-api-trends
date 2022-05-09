import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import TrendSearchBar from "../components/TrendSearchBar";
import TrendVideos from "../components/TrendVideos";
import { SearchBarContext } from "../contexts/SearchBarContext";

const HomePage = () => {
  const {
    countryCode,
    setCountryCode,
    countryName,
    setCountryName,
    resultsNumber,
    setResultsNumber,
  } = useContext(SearchBarContext);

  return (
    <div className="home-page">
      <Navbar />
      <TrendSearchBar />
      {countryCode && <TrendVideos />}
    </div>
  );
};

export default HomePage;
