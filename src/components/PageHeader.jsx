import { Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/system';
import OttLogo from './PartyTitle/OttLogo';

const PageHeader = ({ title, hasLogo, size = 72, children }) => {
  return (
    <PageHeaderStyle>
      {hasLogo && <OttLogo ottName={title} size={size} />}
      <Typography variant="large" component="h2">
        {title}
      </Typography>
      {children && children}
    </PageHeaderStyle>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  hasLogo: PropTypes.bool,
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
