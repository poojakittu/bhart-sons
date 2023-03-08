import Slider from "react-slick";
import CCard from "./CarouselCard";
import { useState } from "react";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React slick carousel
const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Cards = [
    {
      name: "Access Control",
      img: "/AccessControl.jpg",
    },
    {
      name: "Bio metic",
      img: "/Biometric.jpg",
    },
    {
      name: "Visual ERP",
      img: "/VisualERP.jpg",
    },
    {
      name: "Payroll Software",
      img: "/Payroll-Software.jpg",
     
    },
    {
      name: "Website Design",
      img: "/WebsiteDesgin.jpeg",
    },

    {
      name: "Cloud & Storage",
      img: "/cloud&storage.jpg"
      
    },
    {
      name: "Email-Solutions",
      img: "/Email-Solutions.png"
      
    },
    {
      name: "Secure Socket Layer",
      img: "/SecureSocketLayer.png"
      
    },
    {
      name: "Employee-Monitoring",
      img: "/Employee-Monitoring.png"
      
    },
    {
      name: "Web-Hosting",
      img: "/web-hosting.jpg"
      
    },
  ];

  return (
    <div className="content">
      <div className="controls">
        <AiFillLeftSquare
          onClick={sliderRef?.slickPrev}
          className="ctrbtn leftar"
        />
        <AiFillRightSquare
          onClick={sliderRef?.slickNext}
          className="ctrbtn rightar"
        />
      </div>
      <Slider className="slidercomp" ref={setSliderRef} {...sliderSettings}>
        {Cards.map((el) => (
          <CCard
            key={Date.now()}
            name={el.name}
            role={el.role}
            company={el.company}
            img={el.img}
            desc={el.desc}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
