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
