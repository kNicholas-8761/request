import { ActionTypes } from "../constants/ActionTypes";

const initState = {
  items: [],
};

const rootReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
export default rootReducer;
