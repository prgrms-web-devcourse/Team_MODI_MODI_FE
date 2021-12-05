export const createAsyncDispatcher = (type, fn) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  const actionHandler = async (dispatch, ...rest) => {
    dispatch({ type });

    try {
      const data = await fn(...rest);
      dispatch({
        type: SUCCESS,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error,
      });
    }
  };

  return actionHandler;
};

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = data => ({
  loading: false,
  data,
  error: null,
});

const error = error => ({
  loading: false,
  data: null,
  error,
});

export const createAsyncHandler = (type, key) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  const asyncHandler = (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };

      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  };

  return asyncHandler;
};
