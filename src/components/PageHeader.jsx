import { Avatar, Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/system';

const PageHeader = ({ src, alt, title, children }) => {
  return (
    <PageHeaderStyle>
      <Avatar
        src={src}
        alt={alt}
        size={72}
        sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)' }}
      />
      <Typography variant="large">{title}</Typography>
      {children && children}
    </PageHeaderStyle>
  );
};

PageHeader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
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
