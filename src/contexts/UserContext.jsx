import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const initialState = {
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

//로딩 중일 때의 상태
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const successFetch = data => ({
  loading: false,
  data,
  error: null,
});

const errorFetch = error => ({
  loading: false,
  data: null,
  error,
});

const userReducer = (state, action) => {
  let newState = state;

  switch (action.type) {
    case 'GET_USER':
      newState = {
        ...state,
        user: loadingState,
      };
      break;

    case 'GET_USER_SUCCESS':
      newState = {
        ...state,
        user: successFetch(action.data),
      };
      break;

    case 'GET_USER_ERROR':
      newState = {
        ...state,
        user: errorFetch(action.error),
      };
      break;

    default:
      throw new Error(`Action Type Error: current action type: ${action.type}`);
  }

  return newState;
};

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = userReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const useUserState = () => {
  const state = useContext(UserStateContext);

  if (!state) {
    throw new Error('Cannot find UserProvider');
  }

  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);

  if (!dispatch) {
    throw new Error('Cannot find UserProvider');
  }

  return dispatch;
};

export const getUser = async (dispatch, id) => {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(
      `https://198716b8-3226-4714-b0fc-3190ce76b098.mock.pstmn.io/api/users/${id}`,
    );
    dispatch({
      type: 'GET_USER_SUCCESS',
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'GET_USER_ERROR',
      error,
    });
  }
};
