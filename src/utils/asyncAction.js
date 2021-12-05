const crateAsyncDispatcher = (type, fn) => {
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

export default crateAsyncDispatcher;
