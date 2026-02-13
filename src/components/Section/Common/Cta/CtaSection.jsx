"use client"

import Link from "next/link";

const CtaSection = () => {
  return (
    <div className="section bg-cover" style={{ backgroundImage: "url(/images/v1/cta-bg.png)" }}>
      <div className="container">
        <div className="tekup-cta-wrap">
          <div className="tekup-cta-content center">
            <h2>Let’s work together </h2>
            <p>Our trusted partner for IT and Telecom excellence. With 15+ years of experience serving industry leaders like Bell, Rogers, and Microsoft, Protek Solutions provides the equipment and expertise necessary to build a seamless, scalable network for any business environment.</p>
            <div className="tekup-extra-mt">
              <Link className="tekup-default-btn tekup-white-btn" href="contact-us">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;