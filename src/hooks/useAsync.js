import { useCallback, useEffect, useReducer, useRef } from 'react';

const initialAsyncState = {
  isLoading: false,
  value: null,
  error: null,
};

const loadingState = {
  isLoading: true,
  value: null,
  error: null,
};

const success = value => ({
  isLoading: false,
  value,
  error: null,
});

const error = error => ({
  isLoading: false,
  value: null,
  error,
});

const asyncReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return loadingState;
    case 'success':
      return success(action.payload);
    case 'error':
      return error(action.error);
    default:
      throw new Error(
        `Unhanded action type, current action type is ${action.type}`,
      );
  }
};

const useAsync = (fn, deps = [], skip = false) => {
  const lastCallId = useRef(0);
  const [state, dispatch] = useReducer(asyncReducer, initialAsyncState);

  const callback = useCallback(async (...args) => {
    const callId = ++lastCallId.current;
    dispatch({ type: 'loading' });

    try {
      const value = await fn(...args);
      callId === lastCallId.current &&
        dispatch({
          type: 'success',
          payload: value,
        });
    } catch (e) {
      callId === lastCallId.current &&
        dispatch({
          tyep: 'error',
          error: e,
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    !skip && callback();
  }, [skip, callback]);

  return [state, callback];
};

export default useAsync;
