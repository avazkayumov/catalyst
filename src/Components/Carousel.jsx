import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CarouselImg from "../assets/carousel-img-1.png";

const Slider = () => {
  return (
    <Wrapper className="wrapper">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch
        showArrows={false}
        interval={2000}
      >
        <div>
          <img src={CarouselImg} alt="" />
        </div>
        <div>
          <img src={CarouselImg} alt="" />
        </div>
        <div>
          <img src={CarouselImg} alt="" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  @media (max-width: 475px) {
    padding: 0;
    width: 360px;
    .carousel-root {
        width: 352px;
    }
    .carosel-slider {
        width: 352px;
    }

    .slider-wrapper {
      width: 352px;
    }
  }

  text-align: center;
  background-color: #edf4f1;
  padding: 0px 69px 14px 69px;
  width: 100%;

  .control-arrow {
    display: none;
  }

  .control-dots {
    display: none;
  }

  .carousel-status {
    display: none;
  }
`;
