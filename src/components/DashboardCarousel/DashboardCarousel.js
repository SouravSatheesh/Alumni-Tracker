import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./DashboardCarousel.css";

function DashboardCarousel({ cardCount, ...props }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: cardCount ? cardCount : 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div {...props}>
      <Carousel responsive={responsive} infinite={true}>
        <div className="carousel-card">Item 1</div>
        <div className="carousel-card">Item 2</div>
        <div className="carousel-card">Item 3</div>
        <div className="carousel-card">Item 4</div>
      </Carousel>
    </div>
  );
}

export default DashboardCarousel;
