import { Avatar, Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/system';

import netflixLogo from 'assets/netflix.png';
import watchaLogo from 'assets/watcha.png';
import wavveLogo from 'assets/wavve.png';
import disneyLogo from 'assets/disney.png';

const ottInfo = {
  netflix: {
    logo: netflixLogo,
    ottNameKr: '넷플릭스',
  },
  watcha: {
    logo: watchaLogo,
    ottNameKr: '왓챠',
  },
  disneyPlus: {
    logo: disneyLogo,
    ottNameKr: '디즈니 +',
  },
  wavve: {
    logo: wavveLogo,
    ottNameKr: '웨이브',
  },
};

const PageHeader = ({ ottServiceName, size = 72, children }) => {
  const { [ottServiceName]: targetInfo } = ottInfo;
  const { logo: logoSrc, ottNameKr } = targetInfo;

  return (
    <PageHeaderStyle>
      <Avatar
        src={logoSrc}
        alt={`${ottServiceName}-logo`}
        sx={{
          width: size,
          height: size,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        }}
      />

      <Typography variant="large" component="h2">
        {ottNameKr}
      </Typography>
      {children && children}
    </PageHeaderStyle>
  );
};

PageHeader.propTypes = {
  ottServiceName: PropTypes.oneOf(['netflix', 'watcha', 'disneyPlus', 'wavve'])
    .isRequired,
  size: PropTypes.number,
  children: PropTypes.node,
};

const PageHeaderStyle = styled(Box)`
  padding: 40px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    margin-left: auto;
  }
`;

export default PageHeader;
