import Link from "next/link";

const ListSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding service-list-section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src="/images/v3/icon1.webp" alt="" className="service-list-image" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Data Center & Telecom</h2>
              <p>Precision, Reliability, and End-to-End Execution.</p>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list">
                  <ul>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Infrastructure Design & Build:</strong> Expert
                      data center layout design, equipment provisioning, and
                      commissioning.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Installation & Maintenance:</strong> Full-scale
                      installation of core processing equipment and specialized
                      data center "clean-up" maintenance to ensure peak thermal
                      and operational efficiency.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Connectivity Solutions:</strong> Fiber optic
                      backhaul connectivity and high-speed network architecture.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      <strong>Hardware & Peripherals: * Core Gear:</strong>{" "}
                      Routers, switches, and high-performance servers.
                      <ul>
                        <li>
                          <i className="ri-check-line"></i>
                          <strong>Components:</strong> SFPs Transceivers, Fiber
                          Jumper cables, and specialized patch cords.
                        </li>
                        <li>
                          <i className="ri-check-line"></i>
                          <strong>Power & Resilience:</strong> Industrial
                          battery backups and sophisticated power management
                          systems.
                        </li>
                      </ul>
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
