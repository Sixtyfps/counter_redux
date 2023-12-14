import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incAC, resetAC} from "./redux/counter-reducer";
import {AppRootType} from "./redux/store";

function App() {
    const dispatch = useDispatch()
    const counterNumber = useSelector<AppRootType, number>(state => state.counter)

    const inc = () => {
        dispatch(incAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    return (
        <div className="App">
            <div className={'counter'}>
                <div className={'display'}>{counterNumber}</div>
                <div>
                    <button onClick={inc}>inc</button>
                    <button onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
