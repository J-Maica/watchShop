import sampleImg from '../assets/images/productSample.png'

function Popper() {
  return (
    <div className="row align-items-center my-5 ">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
        <h1 className="display-6 fw-bold lh-1">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quidem? Doloremque, rem qui? Debitis quasi sit a hic, cumque inventore!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-light btn-lg px-4 me-md-2 fw-bold">Shop Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg  px-4">Explore More</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 overflow-hidden shadow-sm m-lg-5 mt-lg-3">
          <img className="rounded img-fluid" src={sampleImg} alt="candino watch"/>
      </div>
    </div>
  )
}

export default Popper