import { DECREMENT, INCREMENT } from "../types/type";

let defaultState = {
  count: 0,
};

export const counterReducer = (state = defaultState, action) => {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT: {
      return {
        // count:state.count + 1,
        count: state.count + action.num,
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1,
        // count:action.num ,
      };
    }

    default: {
      return defaultState;
    }
  }
};
