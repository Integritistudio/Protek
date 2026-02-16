
const BrandLogo = ({ logoImage = "/images/logo/logo-dark.svg", className = "light-version-logo", style = {} }) => {
    return (
        <img src={logoImage} alt="" className={className} style={style} />
    );
};

export default BrandLogo;