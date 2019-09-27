const initialState = {
  mainList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const mains = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MAINS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_MAINS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_MAINS_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        mainList: action.payload.data.values
      };
    case "GET_MAIN_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_MAIN_DETAIL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_MAIN_DETAIL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        mainList: action.payload.data.values
      };
    case "ADD_MAIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "ADD_MAIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_MAIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true
      };
    case "EDIT_MAIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "EDIT_MAIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "EDIT_MAIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true
      };
    case "DELETE_MAIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_MAIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_MAIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true
      };
    default:
      return state;
  }
};

export default mains;
