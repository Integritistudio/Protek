import Link from "next/link";


const AboutSection = () => {
  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tekup-thumb">
              <img src="/images/v1/thumb1.webp" alt="" />
              <div className="tekup-thumb-card">
                <img src="/images/v3/Satisfaction.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>15+ Years of Engineering Excellence</h2>
              <p>At Protek Solutions, we bridge the gap between physical infrastructure and digital intelligence. Our journey began over 15 years ago, focused on the "Physical Layer" of IT—the cables, servers, and connectivity that keep the world online. Having supported industry giants like <strong> Bell, Rogers, TELUS, Microsoft, and Dell</strong>, we mastered the art of building the backbone of modern telecommunications.</p>
              {/* <div className="tekup-icon-list">
                  <ul>
                    <li><i className="ri-check-line"></i>Easily Build Custom Reports And Dashboards</li>
                    <li><i className="ri-check-line"></i>Legacy Software Modernization</li>
                    <li><i className="ri-check-line"></i>Software For The Open Enterprise</li>
                  </ul>
                </div> */}
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" href="services">Our Services <i className="ri-arrow-right-up-line"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;