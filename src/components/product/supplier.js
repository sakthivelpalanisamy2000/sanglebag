import React, {} from "react";
import supperImg from '../../assets/img/img/p1.jpg';
import supperImg2 from '../../assets/img/img/p2.jpg';
import supperImg3 from '../../assets/img/img/p3.jpg';

function SupplierSection() {
    
  return (
    <div >
       <div className="container-fluid py-0 bg-primaryimage mt-5" style={{textAlign:"left"}}>
            <div className="container px-lg-5">
                <div className="row g-5 pt-5">
                    <div className="text-center" data-wow-delay="0.1s">
                        <h2 className="mt-2 fs-1 text-dark1">Ecommerce Business For Everyone!</h2>
                    </div>
                    <div className="col-lg-4 ">
                       <div className="">
                        <div><img src={supperImg} alt=""  className="img-fluid"/></div>
                        <h6 className="py-3 fs-5"> Ambitious Seller</h6>
                        <p>Get start your business with Singlebag and sell to global consumers</p>
                        <a href="#" className="btn btn-blue text-light rounded-0 py-2 px-4 ms-3 ms-auto rounded-3 ">Know More <span className="bi-arrow-right"></span></a>
                       </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="">
                         <div><img src={supperImg2} alt=""  className="img-fluid"/></div>
                         <h6 className="py-3 fs-5"> Smart Supplier</h6>
                         <p>Maximize your sales revenue with 1000+ Singlebag Resellers</p>
                        <a href="#" className="btn btn-blue text-light rounded-0 py-2 px-4 ms-3 ms-auto rounded-3 ">Know More <span className="bi-arrow-right"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-4 ">
                        <div className="">
                         <div><img src={supperImg3}alt=""  className="img-fluid"/></div>
                         <h6 className="py-3 fs-5">Rational Reseller</h6>
                         <p>Run your business with zero inventory and earn profits</p>
                        <a href="#" className="btn btn-blue text-light rounded-0 py-2 px-4 ms-3 ms-auto rounded-3 ">Know More <span className="bi-arrow-right"></span></a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SupplierSection;
