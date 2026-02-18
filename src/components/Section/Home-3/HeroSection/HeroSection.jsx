import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="tekup-hero-section3 bg-light1">
      <div className="container">
        <div className="row gap-5">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-hero-content dark-color">
              {/* <h5>We provide professional IT services</h5> */}
              <h2>Engineering the Future of Infrastructure & Intelligence.</h2>
              <p>
                At Protek Solutions, we don’t just provide technology; we
                engineer the competitive edge. With over 15 years of engineering
                excellence, we have evolved from a specialized infrastructure
                provider into a multi-disciplinary technology powerhouse.
                {/* Our history is rooted in supporting global giants like Bell, Dell,
                TELUS, HPE, Rogers, Samsung, and Microsoft across the Telecom
                and IT Infrastructure sectors. Today, we leverage that
                high-stakes experience to provide the technical backbone for B2B
                and B2C eCommerce. This spans from sophisticated digital
                warehousing combined with AI-powered solutions to modernized and
                cost-effective logistics services. We occupy a unique niche in
                the market because we possess the rare capability to master both
                the physical layer of technology and the digital intelligence
                that allows businesses to scale without limits. */}
              </p>
              <div className="tekup-extra-mt">
                <div className="tekup-hero-btn-wrap">
                  <Link
                    className="tekup-default-btn home3-consult-btn"
                    href="contact-us"
                  >
                    Get a Technical Consultation{" "}
                    <i className="ri-arrow-right-up-line"></i>
                  </Link>
                  {/* <Link className="tekup-default-btn outline-btn-dark" href="portfolio-01">Our Works <i className="ri-arrow-right-up-line"></i></Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tekup-hero-thumb">
              <img src="/images/hero/hero-img.avif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
