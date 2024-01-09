import React from 'react';

function Contact() {
  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg  gap-5 text-white py-5'>
      <div className="row align-items-center">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
          <h1 className="display-4 fw-bold lh-1">Contact Us</h1>
          <p className="lead">Have questions or need assistance? Feel free to reach out to us. Our dedicated team is here to help you with anything related to watches, orders, or general inquiries.</p>
          <p className="lead">Visit our store or contact us using the information below:</p>
          <address>
            <strong>Watch Shop</strong><br />
            123 Time Avenue<br />
            Cityville, Watchland<br />
            Zip: 56789<br />
          </address>
          <p>Email: info@watchshop.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="col-lg-4 offset-lg-1 overflow-hidden shadow-sm m-lg-5 mt-lg-3">
          <iframe
            title="Watch Shop Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-74.005941!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA1JzU5LjUiTiA3NMKwNDknMjMuMiJX!5e0!3m2!1sen!2sus!4v1641700000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
