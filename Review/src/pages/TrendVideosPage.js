import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import TrendSearchBar from "../components/TrendSearchBar";
import TrendVideos from "../components/TrendVideos";
import { SearchBarContext } from "../contexts/SearchBarContext";
import Footer from "../components/Footer";

const TrendVideosPage = () => {
  const { countryCode } = useContext(SearchBarContext);

  return (
    <div className="trend-videos-page">
      <Navbar />
      <div
        className={`container ${
          countryCode ? "select-active" : "select-not-active"
        } `}
      >
        <TrendSearchBar />
        {countryCode && <TrendVideos />}
      </div>
      <Footer />
    </div>
  );
};

export default TrendVideosPage;
