"use client";

const FeatureListSection = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#916935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
            ),
            title: "End-to-End Lifecycle",
            description: "We don't just supply; we design, install, commission, and maintain."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#916935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22l-.75-12.07A4.001 4.001 0 0 1 12 2z" /><path d="M8.5 8.5 4 12l4.5 3.5" /><path d="M15.5 8.5 20 12l-4.5 3.5" /></svg>
            ),
            title: "AI Integration",
            description: "We don't just provide data; we provide insights via AI-driven SKU and sales optimization."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#916935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            ),
            title: "Industry Versatility",
            description: "Deep expertise spanning Telecom, Logistics, and specialized Beauty/Consumer Goods."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#916935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
            ),
            title: "Tier-1 Standards",
            description: "15 years of experience meeting the rigorous standards of global tech leaders."
        }
    ];

    return (
        <div className="section bg-light1" style={{ paddingBottom: '100px' }}>
            <div className="container">
                <div className="tekup-section-title center mb-60">
                    <h2>What It Means for You</h2>
                </div>
                <div className="row">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-6 mb-4">
                            <div className="bg-white p-5 rounded h-100" style={{ borderLeft: '5px solid #916935', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
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
