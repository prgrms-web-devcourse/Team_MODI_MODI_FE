import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import isLogin from './isLogin';

const PublicRoute = ({ children }) => {
  return isLogin() ? <Navigate to="/" /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
