import React from 'react'
import heroImg from '../assets/images/heroImg.jpg'

function Hero() {
  return (
  <div>
    <div className="row align-items-center mb-5">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
        <h1 className="display-4 fw-bold lh-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
        <p className="lead mt-2 mt-lg-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sed voluptatibus ipsum quos dignissimos vel exercitationem eveniet deleniti at commodi! Eius, pariatur obcaecati. Assumenda ea, incidunt fugit voluptates dolore praesentium!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-light btn-lg px-4 me-md-2 fw-bold">Shop Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg  px-4">Explore More</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 overflow-hidden shadow-sm m-lg-5 mt-lg-3">
          <img className="rounded img-fluid" src={heroImg} alt="candino watch"/>
      </div>
    </div>
  </div>
  )
}

export default Hero