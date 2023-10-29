/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import Navbar from "../newUI/Navbar";
import BannerBackground from "../../Assets/home-banner-background.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Banner Image" />
          </div>
        </div>
    </div>
  );
}

export default Home;