import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import TrendSearchBar from "../components/TrendSearchBar";
import TrendVideos from "../components/TrendVideos";
import { SearchBarContext } from "../contexts/SearchBarContext";

const TrendVideosPage = () => {
  const {
    countryCode,
    setCountryCode,
    countryName,
    setCountryName,
    resultsNumber,
    setResultsNumber,
  } = useContext(SearchBarContext);

  return (
    <div className="trend-videos-page">
      <Navbar />
      <TrendSearchBar />
      {countryCode && <TrendVideos />}
    </div>
  );
};

export default TrendVideosPage;