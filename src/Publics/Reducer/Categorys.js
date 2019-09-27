const initialState = {
  categoryList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const categorys = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORYS_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_CATEGORYS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_CATEGORYS_FULFILLED':
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: action.payload.data.values,
      };
    default:
      return state;
  }
};

export default categorys;
