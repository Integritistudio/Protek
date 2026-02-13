import Link from "next/link";

const LetsBuildSection = () => {
    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content">
                            <h2>Protek doesn't just supply warehouses; we empower them.</h2>
                            <p>We specialize in the digital modernization of logistics structures. Our team integrates advanced IT solutions directly into your supply chain to solve modern bottlenecks.</p>
                            {/* <div className="tekup-icon-list">
                                <ul>
                                    <li><i className="ri-check-line"></i><strong>Hardware Integration:</strong> High-speed network setups & industrial-grade barcode scanning.</li>
                                    <li><i className="ri-check-line"></i><strong>Process Optimization:</strong> AI-driven SKU rationalization for smarter inventory flow.</li>
                                    <li><i className="ri-check-line"></i><strong>Structural Empowerment:</strong> Upgrading legacy systems into intelligent, automated hubs.</li>
                                </ul>
                            </div> */}
                            <div className="tekup-contact-info-wrap wrap2">
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-mail-fill"></i>
                                    <h5>Contact</h5>
                                    <Link href="mailto:Sales@ProtekSolutions.ca">Sales@ProtekSolutions.ca</Link>
                                    <Link href="tel:+19053300671">905-330-0671</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                        <div className="tekup-main-form">
                            <h3>Fill The Contact Form</h3>
                            <p>Feel free to contact with us, we don’t spam your email</p>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <input type="number" placeholder="Phone number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <input type="email" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <textarea name="textarea" placeholder="Write your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button id="tekup-main-form-btn" type="button">Send Message <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LetsBuildSection;