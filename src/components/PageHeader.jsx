import { Avatar, Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/system';

import logo from 'assets/logo-main.svg';

const ottInfo = {
  netflix: {
    logo,
    ottNameKr: '넷플릭스',
  },
  watcha: {
    logo,
    ottNameKr: '왓챠',
  },
  disneyPlus: {
    logo,
    ottNameKr: '디즈니 +',
  },
  wavve: {
    logo,
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
