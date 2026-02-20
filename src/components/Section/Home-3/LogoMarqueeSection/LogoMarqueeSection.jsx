const logos = [
    {
        // Rogers
        src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Rogers_logo.svg",
        alt: "Rogers"
    },
    {
        // Samsung
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Samsung_Electronics_logo_%28english%29.svg",
        alt: "Samsung"
    },
    {
        // Microsoft - Clean SVG
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        alt: "Microsoft"
    },
    {
        // Dell - Clean SVG
        src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
        alt: "Dell"
    },
    {
        // TELUS
        src: "https://upload.wikimedia.org/wikipedia/commons/6/63/Telus-Logo.svg",
        alt: "TELUS"
    },
    {
        // HPE
        src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg",
        alt: "HPE"
    },
    {
        // Bell
        src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bell_logo.svg",
        alt: "Bell"
    },
];

const LogoMarqueeSection = () => {
    return (
        <section className="logo-marquee-section">
            <div className="logo-marquee-label">
                <span>Trusted by Industry Leaders</span>
            </div>
            <div className="logo-marquee-viewport" aria-label="Partner logos">
                <div className="logo-marquee-track">
                    {/* Original set */}
                    {logos.map((logo, i) => (
                        <div className="logo-marquee-item" key={`a-${i}`}>
                            <img src={logo.src} alt={logo.alt} draggable="false" />
                        </div>
                    ))}
                    {/* Duplicate set — ensures seamless loop */}
                    {logos.map((logo, i) => (
                        <div className="logo-marquee-item" key={`b-${i}`} aria-hidden="true">
                            <img src={logo.src} alt="" draggable="false" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarqueeSection;