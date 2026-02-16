import Link from "next/link";

const ItSolutionSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tekup-thumb mr-30">
                            <img src="/images/v3/thumb1.webp" alt="" />
                            <div className="tekup-thumb-card">
                                <img src="/images/v3/Satisfaction2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content ml-60">
                            <h2>The Intersection of Hardware and Intelligence</h2>
                            <h5>15+ Years of Engineering Excellence</h5>
                            <p>At Protek Solutions, we bridge the gap between physical infrastructure and digital intelligence. Our journey began over 15 years ago, focused on the "Physical Layer" of IT—the cables, servers, and connectivity that keep the world online.</p>
                            <div className="tekup-extra-mt">
                                <Link className="tekup-default-btn" href="about-us">More About <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItSolutionSection;