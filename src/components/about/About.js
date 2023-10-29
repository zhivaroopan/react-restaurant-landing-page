import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import {BsFillPlayCircleFill} from "react-icons/bs";

const About = () => {
  return <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="Backgorund"/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="About Food Bowl"/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading" >
                Abees: A Culinary Journey of Italian and Japanese Delights
                </h1>
                <p className="primary-text">
                Step into the world of Abees, where we take you on a gastronomic voyage that 
                seamlessly blends the rich and diverse flavors of Italian and Japanese cuisines. Our restaurant is a haven for those who seek a truly unique and extraordinary dining experience.
                </p>
                <p className="primary-text">
                Savor the tantalizing taste of perfectly baked pizzas, adorned with the finest ingredients, 
                and indulge in our signature sushi rolls that combine the freshest seafood with creative flair. 
                The result? A culinary masterpiece that excites the senses and satisfies the soul.
                </p>
                <div className="about-buttons-container">
                <a href="https://www.thekitchn.com/arroz-con-pollo-recipe-2-23590008" target="_blank">
                <button className="secondary-button">Learn More</button>
                </a>
                    <button className="watch-video-button"> 
                    <a href="https://www.youtube.com/watch?v=R0SqY6biadQ" className="watch-video-button" target="_blank" rel="noreferrer">
  <BsFillPlayCircleFill /> Watch Video
</a>
                    </button>
                </div>
            </div>
  </div>;
};

export default About;