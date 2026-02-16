
const ListSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src="/images/v3/thumb2.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Our Integrated Approach</h2>
              <p>Our mission is to provide the technical and intellectual backbone that allows businesses to scale without limits. Whether it is:</p>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list">
                  <ul>
                    <li><i className="ri-check-line"></i><strong>Provisioning and Commissioning</strong> core processing equipment for Tier-1 data centers.</li>
                    <li><i className="ri-check-line"></i><strong>Integrating AI-driven</strong> logic into warehouse management for SKU rationalization.</li>
                    <li><i className="ri-check-line"></i><strong>Synthesizing Nielsen and POS data</strong> to launch and scale beauty brands on global e-commerce platforms.</li>
                  </ul>
                </div>
              </div>
              <div className="tekup-extra-mt">
                <p>Protek is the partner that understands both the minute technical details and the "big picture" strategy simultaneously. From fiber optic backhaul to Artificial Intelligence, we deliver the solutions that power tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;