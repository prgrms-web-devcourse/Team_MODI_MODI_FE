import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';

const PageHeader = ({ title, hasLogo, size = '4.5rem', children }) => {
  return (
    <PageHeaderStyle>
      {hasLogo && <OttLogo ottName={title} size={size} />}
      {title && (
        <Typography variant="large" component="h2">
          {title}
        </Typography>
      )}
      {children && children}
    </PageHeaderStyle>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  hasLogo: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

const PageHeaderStyle = styled(Box)(({ theme }) => ({
  padding: '32px 24px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  gap: 10,

  button: {
    marginLeft: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 15px',
  },
}));

export default PageHeader;
