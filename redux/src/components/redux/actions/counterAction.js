import { DECREMENT, INCREMENT } from "../types/type";

export const incrementCount = (number) => {
    return(dispatch)=>{
        dispatch({ type: INCREMENT, num : number });
    }
};
export const decrementCount = (number) => {
    return(dispatch)=>{
        dispatch({ type: DECREMENT, num : number });
    }
};
