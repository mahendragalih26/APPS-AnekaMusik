const initialState = {
  branchList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const branches = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BRANCHES_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_BRANCHES_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_BRANCHES_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        branchList: action.payload.data.values
      };
    default:
      return state;
  }
};

export default branches;
