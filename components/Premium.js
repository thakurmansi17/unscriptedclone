/* eslint-disable react/jsx-key */
import React from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Premium({ image }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let filteredimages = image.filter((item) => {
    return item.premium;
  });
  console.log(image);
  console.log(filteredimages);
  return (
    <div className="container">
      <div className="clearfix mt-5 mb-2">
        <h2
          style={{
            color: "white",
            float: "left",
            marginLeft: "-50px",
            marginBottom: "40px",
            marginTop: "20px",
          }}
        >
          Premium
        </h2>
      </div>
      <Carousel {...settings}>
        {filteredimages.map(function (value) {
          return (
            <React.Fragment key={value.title}>
              <Col sm="11">
                <Back>
                  <Icon src="https://img.icons8.com/windows/32/000000/diamond.png" />
                </Back>
                <div
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    zIndex: "1",
                  }}
                >
                  <Image
                    alt=""
                    position="relative"
                    height="300px"
                    width="100%"
                    z-index="1"
                    object-fit="cover"
                    src={value.feature_img}
                  />
                  <Title>{value.title}</Title>
                </div>
              </Col>
            </React.Fragment>
          );
        })}
      </Carousel>
    </div>
  );
}

const Title = styled.span`
  color: white;
  position: absolute;
  z-index: 2;
  bottom: 10px;
  margin-left: 10px;
  font-weight: bold;
`;

const Carousel = styled(Slider)`
  .slick-list {
    margin: 0 -50px;
    margin-bottom: 40px;
  }
  @media all and(max-width:1024px){
   width:100%;
  }
  @media all and(max-width:600px){
   width:100%;
  }
  @media all and(max-width:480px){
   width:100%;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  transition: 0.4s;
  z-index: 1;
  position: "relative";
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 10px;
  }
`;
const Icon = styled.img`
  z-index: 3;
  position: absolute;
  width: 21px;
  height: 21px;
  left: 6px;
  top: 6px;
`;
const Back = styled.div`
  border-radius: 50%;
  background-color: #fee000;
  height: 33px;
  width: 33px;
  position: absolute;
  z-index: 2;
  margin-left: 10px;
  margin-top: 10px;
`;
