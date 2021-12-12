import PropTypes from 'prop-types';
import { useReducer, createContext, useContext } from 'react';

const getUserId = () => JSON.stringify(sessionStorage.getItem('userId'));

const getToken = () => JSON.stringify(sessionStorage.getItem('TOKEN'));

const isLoggedIn = !!(getUserId() && getToken());

const INITIAL_STATE = {
  isLoggedIn,
  userName: '',
  points: null,
  myparties: [],
};

const ACTION_TYPES = {
  UPDATE: 'update',
  LOGIN: 'login',
  LOGOUT: 'logout',
};

const ACTIONS = {
  [ACTION_TYPES.UPDATE]: (state, action) => {
    const newValue = action.payload;

    return {
      ...state,
      ...newValue,
    };
  },
  [ACTION_TYPES.LOGIN]: state => {
    return {
      ...state,
      isLoggedIn: true,
    };
  },
  [ACTION_TYPES.LOGOUT]: () => {
    return {
      ...INITIAL_STATE,
      isLoggedIn: false,
    };
  },
};

const AuthReducer = (state, action) => {
  return ACTIONS[action.type](state, action) || state;
};

const AuthState = createContext(null);
const AuthDispatch = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const handleUpdate = newValue => {
    dispatch({
      type: ACTION_TYPES.UPDATE,
      payload: newValue,
    });
  };

  const handleLogin = () => {
    dispatch({ type: ACTION_TYPES.LOGIN });
  };

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch({ type: ACTION_TYPES.LOGOUT });
  };

  const actions = {
    onUpdate: handleUpdate,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={actions}>{children}</AuthDispatch.Provider>
    </AuthState.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthState = () => {
  const state = useContext(AuthState);

  if (!state) {
    throw new Error(`Cannot find authState`);
  }

  return state;
};

export const useAuthDispatch = () => {
  const dispatch = useContext(AuthDispatch);

  if (!dispatch) {
    throw new Error(`Cannot find authDispatch`);
  }

  return dispatch;
};
