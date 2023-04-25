import React, {} from "react";
import productImg1 from '../../assets/img/1.jpg';
import productImg2 from '../../assets/img/2.jpg';
import productImg3 from '../../assets/img/3.jpg';
import productImg4 from '../../assets/img/4.jpg';
import productImg5 from '../../assets/img/5.jpg';
import productImg6 from '../../assets/img/6.jpg';
import iconImage1 from '../../assets/img/icon/1.png';
import iconImage2 from '../../assets/img/icon/2.png';
import iconImage3 from '../../assets/img/icon/3.png';
import iconImage4 from '../../assets/img/icon/4.png';
import iconImage5 from '../../assets/img/icon/5.png';

function ProductSection() {

  return (
    <div >
       <div className="container-fluid py-0 bg-primaryimage">
            <div className="container px-lg-5">
                <div className="row g-5 pt-5">
                    <div className="text-center" data-wow-delay="0.1s">
                        <h2 className="mt-2 fs-1 text-dark1">Singlebag, The Best Ecommerce Platform for Best Results</h2>
                        <p className="fs-5 pt-4">We provide a cutting-edge platform for every business. Singlebag offers you the best tools to build</p>
                        <p className="fs-5 pt-sm-1"> an online store through which your products will reach diverse customers, be it Cafes, Electronics, Flowers, Fast food, Furniture, Books, or any other product.</p>
                    </div>
                    <div className="col-lg-4 produc">
                        <img className="img-fluid wow zoomIn shadow rounded-2 " data-wow-delay="0.5s" src={productImg1} />
                    </div>
                    <div className="col-lg-4 produc">
                        <img className="img-fluid wow zoomIn shadow rounded-2" data-wow-delay="0.5s" src={productImg2}/>
                    </div>
                    <div className="col-lg-4 produc">
                        <img className="img-fluid wow zoomIn shadow rounded-2" data-wow-delay="0.5s" src={productImg3}/>
                    </div>
                    <div className="col-lg-4 produc">
                        <img className="img-fluid wow zoomIn shadow rounded-2" data-wow-delay="0.5s" src={productImg4}/>
                    </div>
                    <div className="col-lg-4 produc">
                        <img className="img-fluid wow zoomIn shadow rounded-2" data-wow-delay="0.5s" src={productImg5}/>
                    </div>
                    <div className="col-lg-4 produc">
                        <img className="img-fluid wow zoomIn shadow rounded-2" data-wow-delay="0.5s" src={productImg6}/>
                    </div>
                </div>
                <div className="row g-5 pt-5">
                    <div className="text-left" data-wow-delay="0.1s">
                        <h2 className="mt-2 fs-4 text-dark1 " style={{textAlign:"left"}}>What do we offer?</h2>
                    </div>
                    <div className="col-lg-4 ">
                       <div className="borderstyle">
                        <div><img src={iconImage1} alt=""  className="img-fluidstyle"/></div>
                        <h6 className="py-3 fs-5"> Start an online business</h6>
                        <p>Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!</p>
                       </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="borderstyle">
                         <div><img src={iconImage2} alt=""  className="img-fluidstyle"/></div>
                         <h6 className="py-3 fs-5"> Become a wholesaler</h6>
                         <p>Become a reseller and earn money like a full fledged entrepreneur.</p>
                         <br/>
                        </div>
                     </div>
                     <div className="col-lg-4 ">
                        <div className="borderstyle">
                         <div><img src={iconImage3} alt=""  className="img-fluidstyle"/></div>
                         <h6 className="py-3 fs-5">Become a reseller</h6>
                         <p>Become a reseller and earn money like a full fledged entrepreneur.</p>
                         <br/>
                        </div>
                     </div>
                   
                    <div className="col-lg-6">
                        <div className="borderstyle text-center">
                            <div><img src={iconImage4} alt=""  className="img-fluidstylelg"/></div>
                            <h6 className="py-3 fs-5">Earn a recurring revenue</h6>
                            <p>Partner with Singlebag and help other businesses create their ecommerce stores and earn a commission.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="borderstyle text-center">
                            <div><img src={iconImage5} alt=""  className="img-fluidstylelg"/></div>
                            <h6 className="py-3 fs-5">Share your knowledge</h6>
                            <p>Educate others and get educated, join our Community Forum and network with online store owners from any part of the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductSection;
