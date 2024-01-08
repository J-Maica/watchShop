import React from 'react';
import heroImg from '../assets/images/heroImg.jpg';

function About() {
  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5 text-white py-5'>
      <div className="row align-items-center">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
          <h1 className="display-4 fw-bold lh-1">About Our Watch Shop</h1>
          <p className="lead">Welcome to our watch shop, where style meets precision. We are passionate about providing you with the latest and finest watches that not only complement your fashion sense but also enhance your lifestyle.</p>
          <p className="lead">Explore our carefully curated collection of timepieces, featuring cutting-edge technology, elegant designs, and unparalleled craftsmanship. Whether you're looking for a classic piece or a modern smartwatch, we have something for every taste.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-light btn-lg px-4 me-md-2 fw-bold">Shop Now</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Explore More</button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 overflow-hidden shadow-sm m-lg-5 mt-lg-3">
          <img className="rounded img-fluid" src={heroImg} alt="Watch Shop"/>
        </div>
      </div>
    </div>
  );
}

export default About;
