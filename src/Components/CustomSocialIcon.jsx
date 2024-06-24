import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";
import geeksforgeeksIcon from "../assets/gfg-icon.png";

const CustomSocialIcon = ({
  network,
  url,
  className,
  bgColor,
  style,
  size = 50,
  padding = 5,
}) => {
  const iconStyle = { width: size, height: size, padding: padding, ...style };

  if (network === "geeksforgeeks") {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={geeksforgeeksIcon}
          alt="GeeksforGeeks"
          className={className}
          style={{ backgroundColor: bgColor, ...iconStyle }}
        />
      </a>
    );
  }

  return (
    <SocialIcon
      network={network}
      url={url}
      className={className}
      bgColor={bgColor}
      style={iconStyle}
    />
  );
};

CustomSocialIcon.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
  padding: PropTypes.number,
};

export default CustomSocialIcon;
