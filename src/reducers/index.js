import changeTheNumber from "./updown";
//import resetNumber from "./reset";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber,
        //resetNumber
    }
);

export default reducers;