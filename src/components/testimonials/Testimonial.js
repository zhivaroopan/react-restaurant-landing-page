import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import SamplePic from "../../Assets/User-Profile-PNG-Free-Image.png"
import ExamplePic from '../../Assets/YH5TFCE1QY-preview.png'
import {AiFillStar} from "react-icons/ai";


const Testimonial = () => {
  return <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They're Saying</h1>
                <p className="primary-text">
                purus faucibus ornare suspendisse sed nisi lacus. Interdum velit laoreet id donec ultrices 
                tincidunt arcu non sodales. Nunc sed velit dignissim sodales ut. Enim lobortis scelerisque
                 fermentum dui faucibus in ornare.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile picture" />
                <p>
                "What a hidden gem! Abees exceeded my expectations in every way. 
                From the moment we walked in, the warm and inviting atmosphere made us feel right at home. 
                The menu was diverse, and the dishes were a work of art. I highly recommend trying their ceaser salad. 
                It's a true masterpiece!"
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Narendera Modi</h2>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile picture" />
                <p>
                "I recently dined at Abees, and it was an unforgettable experience. 
                The ambiance was cozy, the staff was attentive, and the food was simply exquisite. 
                The flavors in every dish were a delight to the taste buds. 
                I can't wait to return for another culinary adventure!"
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Bill Gates</h2>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile picture" />
                <p>
                "I celebrated a special occasion at Abees, 
                and it was the perfect choice. The service was top-notch, 
                and the attention to detail was impressive. The chef's creativity truly 
                shone through in each course, and the wine selection was outstanding. 
                Abees has become my go-to place for fine dining."
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Elon Musk</h2>
            </div>
  </div>;
};

export default Testimonial;