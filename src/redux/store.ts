import {counterReducer} from "./counter-reducer";
import {legacy_createStore} from "@reduxjs/toolkit";

export const store = legacy_createStore(counterReducer)

export type AppRootType = ReturnType<typeof store.getState>