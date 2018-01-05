import {
    UPDATE_VALUE_ACTION
} from "./globalActions";

const initialState = {
    test : "test",
    value : 0
};

export default function (state = initialState, action) {
    console.log("globalReducer called");

    if (action.type === UPDATE_VALUE_ACTION) {
        
        let newState = {
            ...state,
            value : new Date().getTime()
        }

        return newState;
    }

    return {
        ...state,
        test : "223232"
    };
}
  