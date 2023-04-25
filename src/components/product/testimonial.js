import React, {} from "react";
import TestimonialSliderSection from "./testimonialcarousel";
function TestimonialSection() {
    
  return (
    <div >
       <div className="container-fluid  testimonial py-0 my-0 wow fadeInUp bg-primaryimagewhite" data-wow-delay="0.1s">
            <div className="container-fluid py-5 px-lg-5 bottom-header">
                <div className="text-center py-5" data-wow-delay="0.1s" >
                    <h2 className="mt-0 fs-1 text-dark1">Trusted by over 800+ EBusiness Store Owners</h2>
                    <p className="text-dark1">From startups to established brands, you'll be in a good company.</p>
                </div>
                <div >
                <TestimonialSliderSection/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TestimonialSection;
