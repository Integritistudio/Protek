import Link from "next/link";

const ListSection = () => {
  return (
    <div
      id="data-center-telecom"
      className="section bg-light1 tekup-section-padding service-list-section1 service-anchor-target"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img
                src="/images/v3/icon1.webp"
                alt=""
                className="service-list-image"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Data Center & Telecom</h2>
              <div className="tekup-extra-mt">
                <p>
                  We design and build advanced data center infrastructure,
                  including layout planning, equipment provisioning, and
                  commissioning. Our services cover full installation,
                  maintenance, and clean-up to ensure optimal performance and
                  efficiency. We provide high-speed fiber connectivity, core
                  hardware like routers and servers, essential components, and
                  reliable power backup solutions for resilient,
                  high-performance network operations. We ensure seamless
                  integration with your existing IT environment for maximum
                  compatibility and scalability. Our team follows industry best
                  practices to deliver secure, future-ready infrastructure. From
                  planning to deployment, we provide complete support to keep
                  your operations running without interruption.
                </p>
              </div>
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" href="contact-us">
                  Get in touch <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
              {/* <div className="tekup-extra-mt">
                <p>
                  Delivering innovative IT infrastructure solutions that
                  maximize uptime, enhance connectivity, and empower businesses
                  with reliable, high-performance technology systems.
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
