import React from 'react'
import heroImg from '../assets/images/heroImg.jpg'

function Hero() {
  return (
  <div>
    <div className="row align-items-center mb-5">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
        <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
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