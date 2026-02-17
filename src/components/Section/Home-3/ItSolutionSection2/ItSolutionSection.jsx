import Link from "next/link";

const ItSolutionSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding home3-beauty-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src="/images/v3/thumb3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              {/* <h2>The Intersection of Hardware and Intelligence</h2> */}
              <h2>Beauty & E-Commerce Incubation</h2>
              {/* <h5>15+ Years of Engineering Excellence</h5> */}
              <h5>Taking products from the lab to the digital shelf.</h5>
              {/* <p>At Protek Solutions, we bridge the gap between physical infrastructure and digital intelligence. Our journey began over 15 years ago, focused on the "Physical Layer" of IT—the cables, servers, and connectivity that keep the world online.</p> */}
              <p>
                We provide end-to-end solutions for the beauty industry, from
                Product Development, offering expert consultation in formula
                creation and brand building, to Contract Manufacturing,
                streamlining partnerships to bring your vision to life. Our
                Digital Commerce services include full-stack e-commerce
                development and Amazon launch strategies, while Data-Driven
                Growth leverages Nielsen and POS data combined with AI analytics
                to optimize sales performance and strengthen market positioning.
              </p>
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn home3-beauty-btn" href="service">
                  Launch Your Beauty Brand{" "}
                  <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItSolutionSection;
