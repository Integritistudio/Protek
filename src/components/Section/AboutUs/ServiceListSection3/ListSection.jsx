import Link from "next/link";

const ListSection = () => {
  return (
    <div
      id="beauty-ecommerce-incubation"
      className="section bg-light1 tekup-section-padding service-list-section1 service-anchor-target"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img
                src="/images/v3/icon3.webp"
                alt=""
                className="service-list-image"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Beauty & E-Commerce Incubation</h2>
              <div className="tekup-extra-mt">
                <p>
                  We provide end-to-end commercialization, transforming ideas
                  into market-ready brands. Our services include product
                  development, contract manufacturing, and full-stack e-commerce
                  solutions, including launches on Amazon. Using data from
                  Nielsen, POS systems, and AI-driven analytics, we optimize
                  sales and strengthen market positioning. We help brands
                  accelerate growth with a clear, scalable go-to-market
                  strategy. Our integrated approach ensures faster market entry
                  and stronger consumer reach. From concept to customer
                  delivery, we provide complete support for long-term commercial
                  success.
                </p>
              </div>
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" href="contact-us">
                  Get in touch <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
