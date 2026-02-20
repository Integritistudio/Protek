"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PageHeader = ({
  title,
  bgImage = "/images/breadcrumb/hero.jpg",
  breadcrumbs = null,
}) => {
  const images = [
    bgImage,
    "/images/v1/Infrastructure.jpeg", // Placeholder repeat
    "/images/v1/Industrial.jpeg"      // Placeholder repeat
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    fade: true // Smooth transition for headers
  };

  const breadcrumbItems =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? breadcrumbs
      : [title === "404" ? "404 page not found" : title];

  return (
    <div className="tekup-breadcrumb-slider-wrap">
      <Slider {...settings} className="tekup-breadcrumb-slider">
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="tekup-breadcrumb"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="container text-center">
                <h1 className="post__title">{title}</h1>
                <nav className="breadcrumbs">
                  <ul className="justify-content-center">
                    <li><Link href="/">Home</Link></li>
                    {breadcrumbItems.map((item, idx) => {
                      if (typeof item === "string") {
                        return <li key={`${item}-${idx}`}>{item}</li>;
                      }

                      return item?.href ? (
                        <li key={`${item.label}-${idx}`}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ) : (
                        <li key={`${item?.label || idx}-${idx}`}>{item?.label}</li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PageHeader;
