import React, { useState } from 'react';
import heroImg from '../assets/images/heroImg.jpg';

function Profile() {
  const [showModal, setShowModal] = useState(false);

  const handleTrackOrder = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5 text-white py-5'>
      <div className="row align-items-center">
        <div className="col-lg-4 overflow-hidden shadow-sm m-lg-5 mt-lg-3">
          <img className="rounded img-fluid" src={heroImg} alt="User Profile"/>
        </div>
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
          <h1 className="display-4 fw-bold lh-1">Jean Maica</h1>
          <p className="lead">Email: jm@example.com</p>
          <p className="lead">Address: 123 Main Street, Cityville, Country</p>
          <p className="lead">Contact No: +1 234-567-8901</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-light px-4 me-md-2 fw-bold" onClick={handleTrackOrder}>Track Order</button>
            <button type="button" className="btn btn-outline-secondary px-4">Edit Profile</button>
          </div>
        </div>
      </div>

    {/* Modal to display details orders*/}
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog " role="document">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title">Tracking Orders</h5>
              <button type="button" className="btn text-white fw-bold" aria-label="Close" onClick={closeModal}>X</button>
            </div>
            <div className="modal-body">
              <p>Order 1: ...</p>
              <p>Order 2: ...</p>
              <p>Order 3: ...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default Profile;
