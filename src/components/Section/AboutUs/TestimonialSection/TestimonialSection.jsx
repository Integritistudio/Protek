"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  return (
    <div className="section bg-light1 tekup-section-padding">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Trusted by more than 200+ client’s around the world</h2>
        </div>
        <Slider {...settings} className="tekup-testimonial-slider">
          <div className="tekup-testimonial-data">
            <div className="tekup-testimonial-rating">
              <ul>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
              </ul>
            </div>
            <p>“ Protek Solutions has been our go-to supplier for high-performance SFPs and servers for over five years. Their technical knowledge and ability to source industry-standard equipment under tight deadlines have made them an invaluable partner for our data center operations. ”</p>
            <div className="tekup-testimonial-author">

              <h5>Adam Wing</h5>
              <span>Senior Infrastructure Manager</span>
            </div>
          </div>
          <div className="tekup-testimonial-data">
            <div className="tekup-testimonial-rating">
              <ul>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
              </ul>
            </div>
            <p>“ As a company working in the telecommunications sector, we require 100% reliability. Protek’s fiber patch cords and networking gear meet the highest standards. Their 15+ years of experience really show in the quality of the solutions they recommend. ”</p>
            <div className="tekup-testimonial-author">

              <h5>Alex wienstone</h5>
              <span>Network Operations Lead</span>
            </div>
          </div>
          <div className="tekup-testimonial-data">
            <div className="tekup-testimonial-rating">
              <ul>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
              </ul>
            </div>
            <p>“ Finding a supplier that understands both hardware and professional installation is rare. Protek Solutions handled our warehouse network rollout with incredible efficiency. Their deployment team is top-notch, and the performance metrics speak for themselves. ”</p>
            <div className="tekup-testimonial-author">

              <h5>Clark Jason</h5>
              <span>Operations Director</span>
            </div>
          </div>
          <div className="tekup-testimonial-data">
            <div className="tekup-testimonial-rating">
              <ul>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
              </ul>
            </div>
            <p>“ We rely on Protek for everything from Ethernet cables to office printing supplies. Having a single, trusted point of contact for our IT and stationery needs saves us hours of procurement time. Their service is always prompt and professional. ”</p>
            <div className="tekup-testimonial-author">

              <h5>Peter Kind</h5>
              <span>Procurement Officer</span>
            </div>
          </div>
          <div className="tekup-testimonial-data">
            <div className="tekup-testimonial-rating">
              <ul>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
                <li><i className="ri-star-s-fill"></i></li>
              </ul>
            </div>
            <p>“ Protek Solutions provides the perfect balance of competitive pricing and high-end hardware. Whether it's a bulk order of laptops or a complex router configuration, they treat every project with same level of expertise and care. ”</p>
            <div className="tekup-testimonial-author">

              <h5>Jhon Ali</h5>
              <span>IT Director</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;