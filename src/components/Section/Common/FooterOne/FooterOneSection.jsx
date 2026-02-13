/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import BrandLogo from "~/components/Ui/BrandLogo/BrandLogo";

const FooterOneSection = ({ className }) => {
    return (
        <footer className={className}>
            <div className="container">
                <div className="tekup-footer-top extra-padding">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="tekup-footer-textarea light-color">
                                <Link href="/">
                                    <BrandLogo />
                                </Link>
                                <p>Our trusted partner for IT and Telecom excellence. With 15+ years of experience serving industry leaders like Bell, Rogers, and Microsoft, Protek Solutions provides the equipment and expertise necessary to build a seamless, scalable network for any business environment.</p>
                                <div className="tekup-footer-info">
                                    <ul>
                                        <li><Link href="tel:+19053300671"><i className="ri-phone-fill" />905-330-0671</Link></li>
                                        <li><Link href="mailto:Sales@ProtekSolutions.ca"><i className=" ri-mail-fill" />tachup@example.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-md-4">
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
                        <div className="col-xl-4 col-md-4">
                            <div className="tekup-footer-menu light-color mb-0">
                                <div className="tekup-footer-title light-color">
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
                            </div>
                        </div>


                    </div>
                </div>
                <div className="tekup-footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tekup-copywright light-color right">
                                <p> © 2026 PROTECK SOLUTIONS
                                    . All rights reserved.  </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tekup-social-icon-box style-two right">
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
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default FooterOneSection;