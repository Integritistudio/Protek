"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from "~/db/homeThreeServices.json";
import ServiceCardThree from "~/components/Ui/Cards/ServiceCardThree";

const WeDealSection = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1397,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="section tekup-section-padding service-slide-section-home">
      <div className="container">
        <div className="tekup-section-title center home3-ecosystem-title">
          {/* <h2>We deal with the aspects of professional IT services</h2> */}
          <h2>
            <span className="forced-title-line">The Protek Ecosystem</span>
            <br />
            <span className="forced-title-line">Total Industrial</span>
            <br />
            <span className="forced-title-line">Modernization</span>
          </h2>
        </div>
        <Slider {...settings}>
          {[...services]?.map((item, idx) => (
            <ServiceCardThree item={item} key={idx}></ServiceCardThree>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WeDealSection;
