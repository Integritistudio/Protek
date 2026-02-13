"use client";

const FeatureListSection = () => {
    const features = [
        {
            title: "End-to-End Lifecycle",
            description: "We don't just supply; we design, install, commission, and maintain."
        },
        {
            title: "AI Integration",
            description: "We don't just provide data; we provide insights via AI-driven SKU and sales optimization."
        },
        {
            title: "Industry Versatility",
            description: "Deep expertise spanning Telecom, Logistics, and specialized Beauty/Consumer Goods."
        },
        {
            title: "Tier-1 Standards",
            description: "15 years of experience meeting the rigorous standards of global tech leaders."
        }
    ];

    return (
        <div className="section tekup-section-padding bg-light1">
            <div className="container">
                <div className="tekup-section-title center mb-60">
                    <h2>What It Means for You</h2>
                </div>
                <div className="row">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-6 mb-4">
                            <div className="bg-white p-5 rounded h-100" style={{ borderLeft: '5px solid #000', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <h4 className="mb-3" style={{ fontWeight: '700' }}>{feature.title}</h4>
                                <p className="mb-0 text-gray" style={{ fontSize: '18px', lineHeight: '1.6' }}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureListSection;
