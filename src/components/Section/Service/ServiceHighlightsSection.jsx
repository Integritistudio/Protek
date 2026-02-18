const ServiceHighlightsSection = ({
  eyebrow = "",
  title = "Core Capabilities",
  items = [],
}) => {
  return (
    <div className="section tekup-section-padding service-highlights-section">
      <div className="container">
        <div className="tekup-section-title center">
          {eyebrow ? <p className="service-highlights-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        <div className="row">
          {items.map((item) => (
            <div className="col-xl-3 col-md-6" key={item.heading}>
              <div className="tekup-iconbox-wrap4 service-highlights-card">
                <div className="tekup-iconbox-data4">
                  <h4>
                    {item.heading}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlightsSection;
