import Link from "next/link";
import BrandLogo from "~/components/Ui/BrandLogo/BrandLogo";

const FooterEight = () => {
  return (
    <footer className="tekup-footer-section dark-bg">
      <div className="container">
        <div className="tekup-footer-top tekup-section-padding">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="tekup-footer-textarea light-color">
                <Link href="/">
                  <BrandLogo />
                </Link>
                <p>Our trusted partner for IT and Telecom excellence. With 15+ years of experience serving industry leaders like Bell, Rogers, and Microsoft, Protek Solutions provides the equipment and expertise necessary to build a seamless, scalable network for any business environment.</p>
                <div className="tekup-footer-info">
                  <ul>
                    <li><Link href="tel:+19053300671"><i className="ri-phone-fill"></i>905-330-0671</Link></li>
                    <li><Link href="mailto:Sales@ProtekSolutions.ca"><i className="ri-mail-fill"></i>mthemeus@example.com</Link></li>
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
                  <h5>Information</h5>
                </div>
                <ul>
                  <li><Link href="">Working Process</Link></li>

                  <li><Link href="faq">Faqs</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tekup-footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="tekup-copywright light-color right">
                <p> &copy; 2024 MthemeUs. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tekup-social-icon-box style-two right">
                <ul>
                  <li>
                    <Link href="https://www.facebook.com/">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/">
                      <i className="ri-linkedin-fill"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/">
                      <i className="ri-twitter-fill"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <i className="ri-instagram-fill"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default FooterEight;