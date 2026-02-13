

const ContentSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="tekup-thumb ml-30">
              <img src="/images/v3/thumb2.png" alt="" />
              <div className="tekup-thumb-card right">
                <img src="/images/v3/project-done.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content mr-60">
              <h2>The Evolution: Beyond the Hardware</h2>
              <p>As technology evolved, so did we. We realized that world-class hardware is only as effective as the intelligence running on it. Today, Protek Solutions is a multi-disciplinary technology firm that doesn't just build the engine—we tune it for maximum performance.</p>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list">
                  <p>We occupy a unique space in the market: we are as comfortable in the high-pressure environment of a Data Center installation as we are training an AI model to optimize a global supply chain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;