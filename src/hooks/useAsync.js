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

const asyncReducer = (_state, action) => {
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

const useAsync = (fn, initialArgs = [], deps = [], skip = false) => {
  const lastCallId = useRef(0);
  const [state, dispatch] = useReducer(asyncReducer, initialAsyncState);

  const callback = useCallback(
    async (...newArgs) => {
      const callId = ++lastCallId.current;
      dispatch({ type: 'loading' });
      const args = newArgs.length ? newArgs : initialArgs;
      try {
        const value = await fn(...args);

        callId === lastCallId.current &&
          dispatch({
            type: 'success',
            payload: value,
          });
      } catch (e) {
        console.error(e);
        callId === lastCallId.current &&
          dispatch({
            type: 'error',
            error: e,
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps],
  );

  useEffect(() => {
    !skip && callback(...initialArgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...initialArgs, skip, callback]);

  return [state, callback];
};

export default useAsync;
