import Link from "next/link";

const ListSection = () => {
  return (
    <div
      id="logistics-supply-chain-ai-powered"
      className="section bg-light1 tekup-section-padding service-list-section1 service-anchor-target"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img
                src="/images/v3/icon2.webp"
                alt=""
                className="service-list-image"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Logistics & Supply Chain (AI-Powered)</h2>
              <div className="tekup-extra-mt">
                <p>
                  We integrate high-speed networks and industrial barcode
                  systems to modernize logistics operations. Using AI-driven SKU
                  rationalization and demand prediction, we optimize inventory
                  flow and eliminate bottlenecks. Our solutions upgrade legacy
                  warehouses into intelligent, automated hubs, improving
                  efficiency, accuracy, and scalability with end-to-end IT
                  infrastructure built for high-performance distribution
                  environments. Our approach enhances real-time visibility and
                  control across your entire supply chain. We help businesses
                  reduce operational costs while increasing speed and accuracy.
                  From integration to optimization, we deliver reliable
                  solutions that support long-term logistics growth.
                </p>
              </div>
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" href="/contact-us">
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
        </div>
      </div>
    </div>
  );
};

export default ListSection;
