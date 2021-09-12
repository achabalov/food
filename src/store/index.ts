import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../redux/reducer";


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type Reducer = ReturnType<typeof reducer>