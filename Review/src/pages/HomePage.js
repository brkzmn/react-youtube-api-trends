import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="container">
        <section className="explore-trends-wrapper">
          <div className="explore-trends-image-wrapper homepage-image-wrapper">
            <img
              className="homepage-image"
              src="/images/explore-trends.jpg"
              alt="explore-trend-videos"
            />
          </div>
          <div className="watch-trends-demo">
            <p className="homepage-description-text">
              Do you want to know what everyone is watching? You can search
              trends videos
            </p>
          </div>
        </section>
        <section className="watch-trends-wrapper">
          <div className="watch-trends-image-wrapper homepage-image-wrapper">
            <img
              className="homepage-image"
              src="/images/youtube-videos.jpg"
              alt="youtube-videos"
            />
          </div>
          <div className="watch-trends-demo">
            <p className="homepage-description-text">
              Watch trend videos all around the world.
            </p>
          </div>
        </section>
        <section className="watch-later-wrapper ">
          <div className="watch-later-image-wrapper homepage-image-wrapper">
            <img
              className="homepage-image"
              src="/images/watch-later.jpg"
              alt="youtube-videos"
            />
          </div>
          <div className="watch-later-demo">
            <p className="homepage-description-text">
              Watch trend videos <span>when you want.</span>
            </p>
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
      <Footer />
    </div>
  );
};

export default HomePage;
