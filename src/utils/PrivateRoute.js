import { useAuthState } from 'contexts/authContext';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuthState();

  return isLoggedIn ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
