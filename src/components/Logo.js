import PropTypes from 'prop-types';
import LogoColorSvg from 'assets/logo-main.svg';
import LogoWhiteSvg from 'assets/logo-white.svg';

const Logo = ({ size, color }) => {
  return color === 'color' ? (
    <img src={LogoColorSvg} alt="" style={{ width: size }} />
  ) : (
    <img src={LogoWhiteSvg} alt="" style={{ width: size }} />
  );
};

Logo.defaultProps = {
  size: 56,
  color: 'color',
};

Logo.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Logo;
