import React, {} from "react";
import Slider from "react-slick";



function TestimonialSliderSection() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
       
      };
    
  return (
    <Slider {...settings}>
       <div> 
          <div className=" bg-white border rounded text-dark1 p-4 " >
              <div className="d-flex align-items-center">
                  <span  className="imageround img-fluid flex-shrink-0 rounded-circle bg-light text-center py-2 pt-2 text-dark1 fs-5 ">TH</span>
                  <div className="ps-3">
                      <h6 className="text-dark1 mb-1">Thomas</h6>
                      <small>Store owner</small>
                  </div>
                    <i className="fa fa-quote-right fa-1px mb-3 ms-auto"></i>
              </div> 
              <p className="py-5">We use Singlebag to build ecommerce websites mainly for its impactful site explorers. Our business has immensely improved by using the link targets. We use it for getting a quick analysis of our site and for utilizing our store’s extensive index when we want to dive deep. Build an effective ecommerce website to expand your business.
              </p>
          </div>
       </div>
      <div>
      <div className=" bg-white border rounded text-dark1 p-4">
          <div className="d-flex align-items-center">
              <span  className="imageround img-fluid flex-shrink-0 rounded-circle bg-light text-center py-2 pt-2 text-dark1 fs-5 ">RA</span>
              <div className="ps-3">
                  <h6 className="text-dark1 mb-1">Ranganathan</h6>
                  <small>Store owner</small>
              </div>
                <i className="fa fa-quote-right fa-1px mb-3 ms-auto"></i>
          </div> 
          <p className="py-5">Singlebag platform is super easy to use and helps us step into the world of ebusiness market. It's the best ecommerce site we’ve ever used.</p>
      </div>
      </div>
     <div>
     <div className=" bg-white border rounded text-dark1 p-4">
          <div className="d-flex align-items-center">
              <span  className="imageround img-fluid flex-shrink-0 rounded-circle bg-light text-center py-2 pt-2 text-dark1 fs-5 ">RK</span>
              <div className="ps-3">
                  <h6 className="text-dark1 mb-1">Rajesh Kumar</h6>
                  <small>Store owner</small>
              </div>
                <i className="fa fa-quote-right fa-1px mb-3 ms-auto"></i>
          </div> 
          <p className="py-5">Having an online store in Singlebag eCommerce platform is the easiest way to increase sales and retain customers. Think about the best online business to start and join Singlebag because online selling has never been more convenient.
          </p>
      </div>
     </div>
    </Slider>
  );
}

export default TestimonialSliderSection;
