/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider({ slide }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <Carousel {...settings}>
      {slide.map(function (value) {
        return (
          
         <React.Fragment>
            <img
              width="100%"
              height="100%"
              position="relative"
              z-index="1"
              src={value.feature_img}
              alt=""
            />

            <div style={{ display: "flex", justifyContent: "center" }}>
            {value.premium?
                <Back>
                <Icon src="https://img.icons8.com/windows/32/000000/diamond.png" />
               </Back>:null}
              <Title>
                {value.title}
              </Title>
              <Button>WATCH NOW</Button>
            </div>
          </React.Fragment>
        );
      })}
    </Carousel>
  );
}
const Icon = styled.img`
  position: absolute;
  z-index: 3;
  width: 21px;
  height: 21px;
  bottom: 80px;
  top: 5px;
  left: 5px;
`;
const Back = styled.div`
  border-radius: 50%;
  background-color: #fee000;
  height: 33px;
  width: 33px;
  z-index: 2;
  position: absolute;
  bottom: 60px;
`;
const Button = styled.button`
  position: absolute;
  bottom: 80px;
  padding: 10px 35px;
  border-radius: 30px;
  align-content: center;
  align-self: center;
  color: #fee000;
  font-weight: 600;
  border-color: #fee000;
  border-style: solid;
  background-color: transparent;
  &:hover {
    background-color: #fee000;
    color: black;
    transition: 0.3s ease;
  }
`;

const Title = styled.span`
  color: white;
  font-size:25px;
  font-weight: 500;
  position: absolute;
  bottom: 150px;
`;
const Carousel = styled(Slider)`
  position: relative;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: #fee000;
    }
  }
  li.slick-active button:before {
    color: #fee000;
  }
`;
