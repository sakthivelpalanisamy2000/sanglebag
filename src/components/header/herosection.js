import React, {} from "react";
import logo from '../../assets/img/logo.png';
import heroImage from '../../assets/img/hero-img.png';

function HeroSection() {
 
  return (
    <div >
        <div className="container-fluid position-relative p-0 ">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <img src={logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-5 py-0">
                        <a href="#" className="nav-item nav-link ">Seller</a>
                        <a href="#" className="nav-item nav-link">Reseller</a>
                        <a href="#" className="nav-item nav-link">Supplier</a>
                        <a href="#" className="nav-item nav-link">Project</a>
                       
                        <a href="#" className="nav-item nav-link">Features</a>
                        <a href="#" className="nav-item nav-link">Pricing</a>
                    </div>
                    <a href="#" className="btn btn-light text-light rounded-0 py-2 px-4 ms-3 ms-auto">Login</a>
                    <a href="#" className="btn btn-light text-light rounded-0 py-2 px-4 ms-3">Create Store</a>
                </div>
            </nav>
            <div className="container-fluid py-5 bg-primary  mb-5 " >
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-dark1 mb-4 animated zoomIn fs-1 weightfont2">The Global Commerce Platform For You</h1>
                            <p className="text-dark pb-3 animated zoomIn fs-4">Building your business is now made easy with Singlebag!</p>
                            <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-0 me-3 animated slideInLeft">Start your free trial  <span className="bi-arrow-right"></span></a>
                            <p className=" pb-3 animated zoomIn pt-lg-5 fs-5  text-dark">Try Singlebag free for 14 days, no credit card required. Start your online store without any coding knowledge.</p>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start hero-header">
                            <img className="img-fluid" src={heroImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
