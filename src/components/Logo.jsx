import LogoImage from "../../assets/logo.png";

const Logo = ({ src = LogoImage, alt = "Digital Store Logo", width, height, className = "" }) => {
    const style = {};
    if (width) style.width = `${width}px`;
    if (height) style.height = `${height}px`;
    
    return (
        <img src={src} alt={alt} style={style} className={className} />
    );
}
 
export default Logo;