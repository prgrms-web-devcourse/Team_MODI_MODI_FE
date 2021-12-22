import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Typography, Box, Chip } from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';

const PageHeader = ({
  title,
  sub,
  hasLogo,
  size = '4.5rem',
  children,
  isLeader,
}) => {
  return (
    <PageHeaderStyle>
      {hasLogo && <OttLogo ottName={title} size={size} />}
      {title && (
        <Box>
          <Typography variant="small">{sub}</Typography>
          <Typography
            variant="large"
            component="h2"
            sx={{ wordBreak: 'keep-all' }}
          >
            {title}
            {isLeader && (
              <Chip
                color="error"
                label="파티장"
                variant="contained"
                size="small"
                sx={{
                  ml: 0.7,
                  height: 20,
                  fontSize: '12px',
                  fontWeight: 400,
                }}
              />
            )}
          </Typography>
        </Box>
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
  sub: PropTypes.string,
  isLeader: PropTypes.bool,
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
