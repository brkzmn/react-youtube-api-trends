import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import TrendSearchBar from "../components/TrendSearchBar";
import TrendVideos from "../components/TrendVideos";
import { SearchBarContext } from "../contexts/SearchBarContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
      <div className="container">
        <section className="explore-trends-wrapper">
          <div className="explore-trends-image-wrapper">
            <img
              className="homepage-image"
              src="/images/1.jpg"
              alt="explore-trend-videos"
            />
          </div>
          <div className="watch-trends-demo">
            <pre>Do you want to know what everyone is watching?</pre>
            <pre>You can search trends videos</pre>
          </div>
        </section>
        <section className="watch-trends-wrapper">
          <div className="watch-trends-image-wrapper">
            <img
              className="homepage-image"
              src="/images/2.jpg"
              alt="youtube-videos"
            />
          </div>
          <div className="watch-trends-demo">
            <pre>Watch trend videos all around the world.</pre>
          </div>
        </section>
        <section className="watch-later-wrapper">
          <div className="watch-later-image-wrapper">
            <img
              className="homepage-image"
              src="/images/3.jpg"
              alt="youtube-videos"
            />
          </div>
          <div className="watch-later-demo">
            <pre>
              Watch trend videos <span>when you want.</span>
            </pre>
          </div>
        </section>
        <div className="started-btn-wrapper">
          <Link to="/trends">
            <Button
              variant="contained"
              className="get-started-btn"
              color="secondary"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
