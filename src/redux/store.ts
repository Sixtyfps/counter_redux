import {counterReducer} from "./counter-reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
        counter: counterReducer
    })

export type AppRootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)