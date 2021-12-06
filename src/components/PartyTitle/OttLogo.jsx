import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

import logo from 'assets/logo-main.svg';

const ottLogoSrc = {
  넷플릭스: logo,
  '디즈니 플러스': logo,
  웨이브: logo,
};

const OttLogo = ({ ottName, size }) => {
  const ottLogoSx = {
    width: size,
    height: size,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  };

  return (
    <Avatar alt={`${ottName}-logo`} sx={ottLogoSx} src={ottLogoSrc[ottName]} />
  );
};

OttLogo.propTypes = {
  ottName: PropTypes.oneOf(['넷플릭스', '왓챠', '디즈니 플러스', '웨이브'])
    .isRequired,
  size: PropTypes.number,
};

export default OttLogo;
