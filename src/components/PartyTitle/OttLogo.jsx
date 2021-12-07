import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

import netflixLogo from 'assets/netflix.png';
import watchaLogo from 'assets/watcha.png';
import wavveLogo from 'assets/wavve.png';
import disneyLogo from 'assets/disney.png';

const ottInfoEn = {
  넷플릭스: {
    logo: netflixLogo,
    ottNameEn: 'netflix',
  },
  왓챠: {
    logo: watchaLogo,
    ottNameEn: 'watcha',
  },
  '디즈니 플러스': {
    logo: disneyLogo,
    ottNameEn: 'disneyPlus',
  },
  웨이브: {
    logo: wavveLogo,
    ottNameEn: 'wavve',
  },
};

const OttLogo = ({ ottName, size = 72 }) => {
  const ottLogoSx = {
    width: size,
    height: size,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  };
  const { logo: logoSrc } = ottInfoEn[ottName];
  console.log(logoSrc);

  return (
    <Avatar alt={`${ottInfoEn[ottName]}-logo`} sx={ottLogoSx} src={logoSrc} />
  );
};

OttLogo.propTypes = {
  ottName: PropTypes.oneOf(['넷플릭스', 'watcha', 'disneyPlus', 'wavve'])
    .isRequired,
  size: PropTypes.number,
};

export default OttLogo;
