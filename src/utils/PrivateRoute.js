import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import isLogin from 'utils/isLogin';

function PrivateRoute({ children }) {
  return isLogin() ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
