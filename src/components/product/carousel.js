import React, {} from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import singleBag from '../../assets/img/partner/Singlebag-Partners.png';
import singleBag1 from '../../assets/img/partner/Singlebag-Partners1.png';
import singleBag2 from '../../assets/img/partner/Singlebag-Partners2.png';
import singleBag3 from '../../assets/img/partner/Singlebag-Partners3.png';
import singleBag4 from '../../assets/img/partner/Singlebag-Partners4.png';
import singleBag5 from '../../assets/img/partner/Singlebag-Partners5.png';
import singleBag6 from '../../assets/img/partner/Singlebag-Partners6.png';
import singleBag7 from '../../assets/img/partner/Singlebag-Partners7.png';
import singleBag8 from '../../assets/img/partner/Singlebag-Partners8.png';
import singleBag9 from '../../assets/img/partner/Singlebag-Partners9.png';


function SliderSection() {
    const settings = {
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
  return (
    <Slider {...settings}>
        <div className="partner bg-white text-dark1 p-4">
            <img src={singleBag} className="img-fluid shadow "/>
        </div>
        <div className="partner bg-white text-dark1  p-4">
            <img src={singleBag1} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white text-dark1  p-4">
            <img src={singleBag2} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white text-dark1  p-4">
            <img src={singleBag3} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white  text-dark1  p-4">
                <img src={singleBag4} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white text-dark1  p-4">
                <img src={singleBag5} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white  text-dark1  p-4">
            <img src={singleBag6} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white  text-dark1  p-4">
                <img src={singleBag7} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white  text-dark1  p-4">
                <img src={singleBag8} className="img-fluid shadow"/>
            </div>
            <div className="partner bg-white text-dark1  p-4">
                <img src={singleBag9} className="img-fluid shadow"/>
            </div>
    </Slider>
  );
}

export default SliderSection;
