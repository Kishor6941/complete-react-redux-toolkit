import { createStore } from "redux";

let initialState   = 0
const reducer = (state=initialState,action) => {
    switch(action.type) {
        case  'INCREMENT':
          return state + 1  
          
         case 'DECREMENT' :
            return state - 1;

        default :
        return state
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())