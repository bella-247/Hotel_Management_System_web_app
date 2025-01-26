import React from "react";
// import  from "prop-types";
import { Link } from "react-router-dom";
import { useTab } from "../../Components/Contexts/navTab-Context";
import Testimony from "../../Components/Testimony/Testimony";

import { foodImages } from "../../assets/Foods/images";
import "./Home.css";

// import { roomImages } from "../../assets/Rooms/images";
// import { bathroomImages } from "../../assets/Bathrooms/images";

const Home = () => {
    const { setTab } = useTab();

    const handleLinkClick = (link) => {
        console.log("this is the rooms link",link);
        setTab(link);
    };




    return (
        <main>
            <section id="hero">
                <h1>
                    Welcome to <span>Utopia</span>
                </h1>
                <p className="hero-phrase">
                    Discover unmatched hospitality and premium service tailored
                    to your needs.
                </p>
                {/* "Experience the luxury and comfort of your dreams." */}

                <button className="explore-btn">
                    <Link to="/services" onClick={(e) => handleLinkClick(e)}>
                        Explore Now
                    </Link>
                </button>
            </section>

            <section id="services">
                <h2>Our Services</h2>
                <div className="services-preview">
                    <div className="service">
                        <div className="service-text-content">
                            <h3>Luxury Rooms</h3>
                            <p>
                                Stay in elegantly designed rooms with premium
                                amenities. 
                                {/* sjaflajsflkasjfas
                                fasdfasfljaskfja;asdf asdfjaskdfjsalfksadf
                                  ajsdflkasflaksfasf */}
                            </p>
                            <button className="services-btn">
                                <Link
                                    to="/services/Rooms"
                                    onClick={(e) => {
                                      // handleLinkClick("/services")
                                      setTab("/")
                                      console.log("here it is")
                                    }
                                    }
                                >
                                    See more
                                </Link>
                            </button>
                        </div>
                        <div className="service-image-content">
                            <img src={foodImages.food18} />
                        </div>
                    </div>
                    <div className="service">
                        {/* <h3>Fine Dining</h3> */}
                        <div className="service-text-content">
                            <h3>Delicious Foods</h3>
                            <p>
                                Experience world-class cuisine in a delightful
                                ambiance.
                            </p>
                            <button className="services-btn">
                                <Link
                                    to="/services/Foods"
                                    onClick={(e) => handleLinkClick("/services")}
                                >
                                    See more
                                </Link>
                            </button>
                        </div>
                        <div className="service-image-content">
                            <img src={foodImages.food19} />
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-text-content">
                            <h3>Spa & Wellness</h3>
                            <p>
                                Rejuvenate your mind and body with our relaxing
                                treatments.
                            </p>
                            <button className="services-btn">
                                <Link
                                    to="/services/Bathrooms"
                                    onClick={(e) => handleLinkClick(e)}
                                >
                                    See more
                                </Link>
                            </button>
                        </div>
                        <div className="service-image-content">
                            <img src={foodImages.food20} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <h2>About Us</h2>
            </section>

            <section id="review">
                <h2>Review Us</h2>
                <div className="testimonials-preview">
                  <h3>Testimonials</h3>
                  <div className="testimonials-container">
                    <Testimony
                        header_quote = "A Home Away from Home!"
                        body_quote = "From the moment we arrived, the staff made us feel like royalty. The rooms were spotless, the beds incredibly comfortable, and the food was simply divine. I can't wait to come back!"
                        type = "Positive"
                        reviewer="Sarah Johnson"
                    />
                  </div>
                </div>
            </section>
        </main>
    );
};

export default Home;