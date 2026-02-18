import Link from "next/link";

const ServiceCard = ({ service, className }) => {
  const detailsLink = service.link || "/single-service";

  return (
    <div className={className}>
      <div className="tekup-iconbox-wrap3 bg-white">
        <div className="tekup-iconbox-icon3">
          <img
            src={service.icon}
            alt={service.title}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(41%) sepia(32%) saturate(436%) hue-rotate(357deg) brightness(92%) contrast(90%)",
            }}
          />
        </div>
        <div className="tekup-iconbox-data3">
          <Link href={detailsLink}>
            <h5>{service.title}</h5>
          </Link>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
