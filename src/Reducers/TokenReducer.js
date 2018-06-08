const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function(state = [], action){
  return state;
}

switch(action.type) {
  case FETCHING_TOKEN_DATA:
    return Object.assign({}, state, {
      isFetching: true,
      data: null,
      hasError: false,
      errorMessage: null
    });

    case FETCHING_TOKEN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err
      });

      case FETCHING_TOKEN_DATA:
        return Object.assign({}, state, {
          isFetching: true,
          data: action.payload,
          hasError: true,
          errorMessage: action.err
        });

    default:
      return state;
    }
}
