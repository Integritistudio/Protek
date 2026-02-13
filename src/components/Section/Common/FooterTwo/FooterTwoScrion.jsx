import Link from 'next/link';

export default function FooterTwo() {
    return (
        <>
            <footer className="tekup-footer-section dark-bg">
                <div className="container">
                    <div className="tekup-footer-top tekup-section-padding">
                        <div className="row">
                            <div className="col-xl-4 offset-xl-1 col-lg-4 order-lg-4">
                                <div className="tekup-footer-title light-color light-color">
                                    <h5>Subscribe Our Newsletter</h5>
                                    <p>Get ready to work together for the better solution for your business</p>
                                </div>
                                <div className="tekup-subscription">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email" />
                                        <button id="tekup-subscription-btn" type="button">
                                            <i className="ri-send-plane-fill" />
                                        </button>
                                    </form>
                                </div>
                                <div className="tekup-social-icon m_bottom">
                                    <ul>
                                        <li>
                                            <Link href="https://www.facebook.com/">
                                                <i className="ri-facebook-fill" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/">
                                                <i className="ri-linkedin-fill" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://twitter.com/">
                                                <i className="ri-twitter-fill" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/">
                                                <i className="ri-instagram-fill" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tekup-footer-menu light-color">
                                    <div className="tekup-footer-title light-color">
                                        <h5>Quick Links</h5>
                                    </div>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="about-us">About Us</Link></li>
                                        <li><Link href="service">Services</Link></li>
                                        <li><Link href="contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tekup-footer-bottom center">
                        <div className="tekup-copywright light-color right">
                            <p> © 2026 PROTECK SOLUTIONS
                                . All rights reserved.  </p>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}