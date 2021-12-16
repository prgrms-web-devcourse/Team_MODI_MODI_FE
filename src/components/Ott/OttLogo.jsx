import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';

import netflixLogo from 'assets/netflix.png';
import watchaLogo from 'assets/watcha.png';
import wavveLogo from 'assets/wavve.png';
import disneyLogo from 'assets/disney.png';
import laftelLogo from 'assets/laftel.png';
import tvingLogo from 'assets/tving.png';
import primevideoLogo from 'assets/primevideo.png';
import coupangLogo from 'assets/coupang-play.png';

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
  티빙: {
    logo: tvingLogo,
    ottNameEn: 'tving',
  },
  라프텔: {
    logo: laftelLogo,
    ottNameEn: 'laftel',
  },
  '쿠팡 플레이': {
    logo: coupangLogo,
    ottNameEn: 'coupangPlay',
  },
  '아마존 프라임': {
    logo: primevideoLogo,
    ottNameEn: 'amazonPrime',
  },
};

const OttLogo = ({ ottName, size = 72, sx }) => {
  const ottLogoSx = {
    width: size,
    height: size,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    ...sx,
  };
  const { logo: logoSrc } = ottInfoEn[ottName] || '';

  return (
    <Avatar alt={`${ottInfoEn[ottName]}-logo`} sx={ottLogoSx} src={logoSrc} />
  );
};

OttLogo.propTypes = {
  ottName: PropTypes.oneOf([
    '넷플릭스',
    '왓챠',
    '디즈니 플러스',
    '웨이브',
    '쿠팡 플레이',
    '아마존 프라임',
    '라프텔',
    '티빙',
    '',
  ]),
  size: PropTypes.number,
  sx: PropTypes.object,
};

export default OttLogo;
