import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

/* ROOT REDUCER MA APE BDHA REDUCER NE COMBINE KARI SAKAY COMBINE REDUCERS NA USE THI */
export const rootReducer = combineReducers({
    counter : counterReducer,

    // user : userReducer /* AA RITE BIJA REDUCER ADD KARI SAKAY */
})