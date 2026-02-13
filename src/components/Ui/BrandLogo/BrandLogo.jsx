
const BrandLogo = ({ logoImage = "/images/logo/Logo SVG-01.svg", className = "light-version-logo" }) => {
    return (
        <img src={logoImage} alt="" className={className} />
    );
};

export default BrandLogo;