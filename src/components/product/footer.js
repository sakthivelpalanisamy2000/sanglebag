import React, {} from "react";
import logo from '../../assets/img/logo.png';
function FooterSection() {
    
  return (
    <div >
       <div className="container-fluid bg-white text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-0 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6  ">
                            <img src={logo} alt="Logo" className="img-fluid4 " style={{marginLeft:'-70%'}}/>
                        <p className="text-dark text-left" style={{textAlign:'left'}}>Singlebag is an efficient and user-friendly eCommerce platform that provides you with all advanced facilities and powerful tools to start your online store without any coding knowledge. Whether you are a start-up or an established business, Singlebag is an all-in-one e-commerce platform that helps to stabilize and accelerate your online business. 
                            <h6 className="text-dark1 dt">We help in making your dream of business a reality.</h6>
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-dark1 mb-4 " style={{textAlign:'left'}}>COMMUNITY</h5>
                        <a className="btn btn-link" href="">Forums</a>
                        <a className="btn btn-link" href="">Blogs</a>
                        <a className="btn btn-link" href="">Academy</a>
                        <a className="btn btn-link" href="">Knowledgebase</a>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-dark1 mb-4" style={{textAlign:'left'}}>COMPANY</h5>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Partner Program</a>
                        <a className="btn btn-link" href="">Features</a>
                        <a className="btn btn-link" href="">Pricing</a>
                        <a className="btn btn-link" href="">Get in touch</a>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-dark1 mb-4" style={{textAlign:'left'}}>POLICY</h5>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <hr className="text-dark1"/>
                        <div className="col-md-12 text-center  mb-3 mb-md-0">
                            <p className="text-dark1">© 2023 | Singlebag An Orange Holdings Company | All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FooterSection;
