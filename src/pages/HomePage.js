import React from "react";
import Navbar from "../components/Navbar";
import TrendSearchBar from "../components/TrendSearchBar";
import TrendVideos from "../components/TrendVideos";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <TrendSearchBar />
    </div>
  );
};

export default HomePage;
