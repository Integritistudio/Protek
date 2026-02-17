import Link from "next/link";

const ListSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding service-list-section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src="/images/v3/icon3.webp" alt="" className="service-list-image"/>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Beauty & E-Commerce Incubation</h2>
              <p>Taking products from the lab to the digital shelf.</p>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list">
                  <ul>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>
                        End-to-End Commercialization & Brand Launchpad:
                      </strong>{" "}
                      The bridge from production to profit. Protek integrates
                      contract manufacturing with digital storefront
                      development, creating a seamless pipeline that takes your
                      product from the lab to the consumer’s doorstep.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Product Development:</strong> Expert consultation
                      in formula development and brand creation for the beauty
                      industry.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Contract Manufacturing:</strong> Streamlined
                      manufacturing partnerships to bring your vision to life.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Digital Commerce:</strong> Full-stack E-commerce
                      development and Amazon launch strategies.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Data-Driven Growth:</strong> We utilize Nielsen
                      and POS data combined with AI analytics to optimize sales
                      performance and market positioning.
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
                  Delivering end-to-end solutions from product development to
                  digital commerce, we empower beauty brands to launch, scale,
                  and succeed globally.
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
