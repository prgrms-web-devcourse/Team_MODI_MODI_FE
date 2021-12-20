import {
  useContext,
  useMemo,
  useReducer,
  useCallback,
  createContext,
} from 'react';
import PropTypes from 'prop-types';

const OttInfoState = createContext(null);
const OttInfoDispatch = createContext(null);

const INITIAL_STATE = {
  ottServices: [],
};

const ACTION_TYPES = {
  UPDATE: 'update',
};

const ACTIONS = {
  [ACTION_TYPES.UPDATE]: (state, action) => {
    const value = action.payload;

    return {
      ...state,
      ...value,
    };
  },
};

const OttListReducer = (state, action) => {
  return ACTIONS[action.type](state, action) || state;
};

export const OttInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OttListReducer, INITIAL_STATE);

  const handleUpdate = useCallback(newValue => {
    dispatch({
      type: ACTION_TYPES.UPDATE,
      payload: newValue,
    });
  }, []);

  const actions = useMemo(
    () => ({
      onUpdate: handleUpdate,
    }),
    [handleUpdate],
  );

  return (
    <OttInfoState.Provider value={state}>
      <OttInfoDispatch.Provider value={actions}>
        {children}
      </OttInfoDispatch.Provider>
    </OttInfoState.Provider>
  );
};

OttInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useOttInfoState = () => {
  const state = useContext(OttInfoState);

  if (!state) {
    throw new Error(`Cannot find OttInfoState`);
  }

  return state;
};

export const useOttInfoDispatch = () => {
  const dispatch = useContext(OttInfoDispatch);

  if (!dispatch) {
    throw new Error(`Cannot find OttInfoDispatch`);
  }

  return dispatch;
};
