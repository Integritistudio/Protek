import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tekup-thumb">
              <img src="/images/v1/thumb1.webp" alt="" />
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>The Protek Ecosystem: Total Industrial Modernization</h2>
              {/* <p>
                At Protek Solutions, we bridge the gap between physical
                infrastructure and digital intelligence. Founded on over 15
                years of experience supporting giants like{" "}
                <strong>Bell, Rogers, TELUS, DELL, HPE and Microsoft,</strong>{" "}
                we have grown into a multi-disciplinary technology firm.
              </p> */}
              <p>
                We are the definitive partner for the entire lifecycle of modern
                business. Protek is as comfortable engineering the high-pressure
                environment of a <strong> Tier-1 Data Center</strong> as we are
                training an <strong> AI model</strong> to optimize a global
                supply chain. Our mission is to provide the technical and
                intellectual backbone that allows you to scale without limits.
                We master the <strong>Physical Layer</strong> of connectivity
                through high-tier IT infrastructure and precision commissioning.
                We transform traditional facilities into{" "}
                <strong>Smart Logistics</strong> hubs using AI-driven throughput
                optimization. We bridge the gap between concept and launch with{" "}
                <strong>Multi-Sector Contract Manufacturing</strong> across the
                Beauty, Health, Automotive, and IT sectors. Finally, we ensure
                you dominate the digital shelf through{" "}
                <strong>Market Acceleration</strong> and AI-driven e-commerce
                architecture. From the fiber optic backhaul to the final
                consumer sale, Protek delivers the integrated solutions that
                power tomorrow.
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
