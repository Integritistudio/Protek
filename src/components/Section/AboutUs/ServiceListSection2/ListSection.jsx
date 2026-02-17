import Link from "next/link";

const ListSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding service-list-section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Logistics & Supply Chain (AI-Powered)</h2>
              <p>Modernizing the warehouse through Intelligence.</p>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list">
                  <ul>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Hardware Integration:</strong> High-speed network
                      setups for massive facilities and industrial-grade barcode
                      scanning ecosystems.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Process Optimization:</strong> AI-driven SKU
                      rationalization to ensure your inventory moves faster and
                      smarter.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Structural Empowerment:</strong> We upgrade legacy
                      systems into intelligent, automated hubs, allowing
                      logistics providers to compete at a global scale.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Smart Warehousing:</strong> Upgrade your
                      management systems with advanced barcode scanning
                      integration and SKU rationalization.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>AI Optimization:</strong> We leverage Artificial
                      Intelligence to predict demand, optimize inventory flow,
                      and remove bottlenecks in your supply chain.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Operational Efficiency:</strong> End-to-end IT
                      solutions designed specifically for the high-pressure
                      environment of logistics and distribution centers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" href="contact-us">
                  Get in touch <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
              {/* <div className="tekup-extra-mt">
                <p>
                  We specialize in the digital modernization of logistics
                  structures. Our team integrates advanced IT solutions directly
                  into your supply chain to solve modern bottlenecks
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tekup-thumb ml-60">
              <img src="/images/v3/icon2.webp" alt="" className="service-list-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
