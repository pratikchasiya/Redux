import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

/* APRE JYRE EK COMPONENT MATHI BIJA COMPONENT MA DATA JOITA HOI A DIRECT APRNE DATA MALTA HOI REAL TIME A COMMUNICATION THY ANA MATE NU EK MILDLEWAY USE THAY REDUX-THUNK A APRE APPLY MIDDLEWARE MA LEVANU */

/* AA STORE NO USE BDHE THAY ATLE ANE INDEX.JS MA PROVIDER NI UNDER LEVANU */
export const store = createStore(rootReducer, applyMiddleware(thunk) );{

}