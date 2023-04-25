import React, { } from "react";
import HeroSection from "./header/herosection";
import ProductSection from "./product/productsection";
import BusinessSection from "./product/business";
import SupplierSection from "./product/supplier";
import ClientSection from "./product/client";
import TestimonialSection from "./product/testimonial";
import JourneySection from "./product/journey";
import FooterSection from "./product/footer";

function SinglebagComponent() {
 
  return (
    <div >
      <div className="container-fluid bg-white p-0">
         <HeroSection/>
         <ProductSection/>
         <BusinessSection/>
         <SupplierSection/>
          <ClientSection/>
          <TestimonialSection/>
          <JourneySection/>
          <FooterSection/>
      </div>
    </div>
  );
}

export default SinglebagComponent;
