const ContentSection = () => {
  return (
    <div className="section tekup-section-padding about-content-section2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tekup-thumb">
              <img src="/images/v1/thumb1.webp" alt="" className="about-content2-image" />
              <div className="tekup-thumb-card about-content2-card">
                <img src="/images/v3/Satisfaction.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Our Integrated Approach</h2>
              <p>
                Our mission is to provide the technical and intellectual
                backbone that allows businesses to scale without limits. Whether
                it is Provisioning and Commissioning core processing equipment
                for Tier-1 data centers. Integrating AI-driven logic into
                warehouse management for SKU rationalization. Synthesizing
                Nielsen and POS data to launch and scale beauty brands on global
                e-commerce platforms.
              </p>
              <p>
                Protek is the partner that understands both the minute technical
                details and the "big picture" strategy simultaneously. From
                fiber optic backhaul to Artificial Intelligence, we deliver the
                solutions that power tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
