import Link from "next/link";


const CtaThreeSection = () => {
  return (
    <div className="tekup-cta-section tekup-section-padding" style={{ backgroundImage: 'url(/images/v4/cta-bg.png)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="tekup-cta-content">
              <h2>Let’s work together </h2>
              <p>Our trusted partner for IT and Telecom excellence. With 15+ years of experience serving industry leaders like Bell, Rogers, and Microsoft, Protek Solutions provides the equipment and expertise necessary to build a seamless, scalable network for any business environment.</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 d-flex align-items-center justify-content-end">
            <div className="tekup-cta-btn">
              <Link className="tekup-default-btn tekup-white-btn" href="contact-us.html">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaThreeSection;