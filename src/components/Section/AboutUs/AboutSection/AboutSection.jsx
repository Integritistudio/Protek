import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tekup-thumb">
              <img src="/images/v1/Infrastructure.jpeg" alt="" />
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Engineering the Future of Infrastructure & Intelligence</h2>
              {/* <p>
                At Protek Solutions, we bridge the gap between physical
                infrastructure and digital intelligence. Founded on over 15
                years of experience supporting giants like{" "}
                <strong>Bell, Rogers, TELUS, DELL, HPE and Microsoft,</strong>{" "}
                we have grown into a multi-disciplinary technology firm.
              </p> */}
              <p>
                At Protek Solutions, we don’t just provide technology; we
                engineer the competitive edge. With over 15 years of engineering
                excellence, we have evolved from a specialized infrastructure
                provider into a multi-disciplinary technology powerhouse. Our
                history is rooted in supporting global giants like{" "}
                <strong>
                  {" "}
                  Bell, Dell, TELUS, HPE, Rogers, Samsung, and Microsoft{" "}
                </strong>{" "}
                across the Telecom and IT Infrastructure sectors. Today, we
                leverage that high-stakes experience to provide the technical
                backbone for B2B and B2C eCommerce. This spans from
                sophisticated digital warehousing combined with AI-powered
                solutions to modernized and cost-effective logistics services.
                We occupy a unique niche in the market because we possess the
                rare capability to master both the physical layer of technology
                and the digital intelligence that allows businesses to scale
                without limits.
              </p>
              {/* <div className="tekup-icon-list">
                  <ul>
                    <li><i className="ri-check-line"></i>Easily Build Custom Reports And Dashboards</li>
                    <li><i className="ri-check-line"></i>Legacy Software Modernization</li>
                    <li><i className="ri-check-line"></i>Software For The Open Enterprise</li>
                  </ul>
                </div> */}
              {/* <p>
                Whether we are deploying core processing equipment in a data
                center or training an AI model to optimize a supply chain, our
                mission remains the same: to provide the technical backbone that
                allows businesses to scale without limits.
              </p> */}
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" href="service">
                  Our Services <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
