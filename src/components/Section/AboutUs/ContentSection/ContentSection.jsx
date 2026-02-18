import Link from "next/link";

const ContentSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding home3-logistics-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="tekup-thumb ml-30">
              <img src="/images/v3/content.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content mr-60">
              {/* <h2>The Evolution: Beyond the Hardware</h2> */}
              <h2>Logistics & Supply Chain (AI-Powered)</h2>
              <h5>Modernizing the warehouse through Intelligence.</h5>
              {/* <p>
                As technology evolved, so did we. We realized that world-class
                hardware is only as effective as the intelligence running on it.
                Today, Protek Solutions is a multi-disciplinary technology firm
                that doesn't just build the engine—we tune it for maximum
                performance.
              </p> */}
              <p>
                We specialize in modernizing logistics by integrating advanced
                IT solutions directly into your supply chain to tackle today’s
                operational bottlenecks. Our services include high-speed network
                setups, industrial-grade barcode scanning, AI-driven inventory
                and SKU optimization, and upgrading legacy systems into
                intelligent, automated hubs. With smart warehousing solutions,
                predictive AI tools, and comprehensive operational support, we
                help logistics providers streamline workflows, improve
                efficiency, and build faster, more responsive, and globally
                competitive supply chains.
              </p>
              {/* <div className="tekup-extra-mt">
                <div className="tekup-icon-list">
                  <p>
                    We occupy a unique space in the market: we are as
                    comfortable in the high-pressure environment of a Data
                    Center installation as we are training an AI model to
                    optimize a global supply chain.
                  </p>
                </div>
              </div> */}
              <div className="tekup-extra-mt">
                <Link
                  className="tekup-default-btn home3-logistics-btn"
                  href="/service/logistics-supply-chain-ai-powered"
                >
                  Our Service <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
