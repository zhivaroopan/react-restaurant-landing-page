import React from 'react'
import Home from "../home/Home";
import About from "../about/About";
import Work from "./Work";
import Testimonial from "../testimonials/Testimonial";
import Contact from "../contact/Contact";
import Footer from "./Footer";

function LandingPage() {
    return(
        <div>
            <Home/>
            <Footer/>
        </div>
    )
}

export default LandingPage