import Link from "next/link";

const ItSolutionSection = () => {
  return (
    <div className="section bg-light1 tekup-section-padding home3-it-solution-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src="/images/v3/thumb1.webp" alt="" className="home3-it-solution-image" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              {/* <h2>The Intersection of Hardware and Intelligence</h2> */}
              <h2>Data Center & Telecom</h2>
              {/* <h5>15+ Years of Engineering Excellence</h5> */}
              <h5>Precision, Reliability, and End-to-End Execution.</h5>
              {/* <p>At Protek Solutions, we bridge the gap between physical infrastructure and digital intelligence. Our journey began over 15 years ago, focused on the "Physical Layer" of IT—the cables, servers, and connectivity that keep the world online.</p> */}
              <p>
                We provide complete Infrastructure Design & Build services,
                including expert data center layouts, equipment provisioning,
                and commissioning. Our Installation & Maintenance covers full
                deployment of core equipment and specialized data center upkeep
                to ensure optimal performance. For Connectivity Solutions, we
                offer fiber optic backhaul and high-speed network architecture.
                Our Hardware & Peripherals include routers, switches,
                high-performance servers, SFPs, fiber jumper cables, and patch
                cords. Finally, our Power & Resilience solutions feature
                industrial battery backups and advanced power management systems
                to keep your infrastructure stable and reliable.
              </p>
              <div className="tekup-extra-mt">
                <Link
                  className="tekup-default-btn home3-it-solution-btn"
                  href="/service/data-center-telecom"
                >
                  View Data Center Services <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItSolutionSection;
