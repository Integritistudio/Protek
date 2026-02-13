"use client"

const CtaTwoSection = () => {
  return (
    <div className="section z-index">
      <div className="container">
        <div className="tekup-cta-wrap" style={{ backgroundImage: 'url(/images/v1/cta-bg.png)' }}>
          <div className="tekup-cta-content center">
            <h2>Let’s work together </h2>
            <p>Our trusted partner for IT and Telecom excellence. With 15+ years of experience serving industry leaders like Bell, Rogers, and Microsoft, Protek Solutions provides the equipment and expertise necessary to build a seamless, scalable network for any business environment.</p>
            <div className="tekup-extra-mt">
              <a className="tekup-default-btn tekup-white-btn" href="contact-us">Start a Project <i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwoSection;