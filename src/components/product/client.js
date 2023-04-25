import React, {} from "react";
import SliderSection from "./carousel";

function ClientSection() {
    
  return (
    <div >
       <div className="container-fluid  testimonial py-0 my-0 wow fadeInUp " data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="text-center py-2" data-wow-delay="0.1s" >
                    <h3 className="mt-0 fs-2 text-dark1">Our Partners</h3>
                </div>
                <SliderSection/>
            </div>
        </div>
    </div>
  );
}

export default ClientSection;
