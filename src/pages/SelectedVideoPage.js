import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import YoutubeFrame from "../components/YoutubeFrame";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SelectedVideoPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="selected-video-page-container">
        <div className="close-icon-wrapper">
          <Link to={"/trends"}>
            <CloseIcon />
          </Link>
        </div>
        <div>
          <YoutubeFrame activeVideoId={id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectedVideoPage;
