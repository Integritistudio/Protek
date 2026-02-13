"use client"

import Link from "next/link";

const ContactSection = () => {
  return (
    <>
      <div className="section tekup-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 d-flex align-items-center">
              <div className="tekup-default-content">
                <h2>Let’s Build a Smart Infrastructure Together</h2>
                <p>Whether you're scaling a data center or optimizing a local network, our team is ready to help. Reach out today to discuss your equipment needs or schedule a consultation with our technical experts.</p>
                <div className="tekup-contact-info-wrap wrap2">
                  {/* <div className="tekup-contact-info mb-0">
                    <i className="ri-map-pin-2-fill"></i>
                    <h5>Address</h5>
                    <p>1791 Yorkshire Circle Kitty<br />
                      Hawk, NC 279499</p>
                  </div> */}
                  <div className="tekup-contact-info mb-0">
                    <i className="ri-mail-fill"></i>
                    <h5>Contact</h5>
                    <Link href="mailto:Sales@ProtekSolutions.ca">Sales@ProtekSolutions.ca</Link>
                    <Link href="tel:+19053300671">905-330-0671</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className="tekup-main-form">
                <h3>Fill The Contact Form</h3>
                <p>Feel free to contact with us, we don’t spam your email</p>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tekup-main-field">
                        <input type="text" placeholder="Your name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tekup-main-field">
                        <input type="number" placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tekup-main-field">
                        <input type="email" placeholder="Email address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tekup-main-field">
                        <textarea name="textarea" placeholder="Write your message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button id="tekup-main-form-btn" type="button">Send Message <i className="ri-arrow-right-up-line"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
};

export default ContactSection;