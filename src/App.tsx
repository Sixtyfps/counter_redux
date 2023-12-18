import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {errorAC, incAC, proposalAC, resetAC, setAC} from "./redux/counter-reducer";
import {AppRootType} from "./redux/store";

function App() {
    const dispatch = useDispatch()
    const counterValue = useSelector<AppRootType, number | string>(state => state.counterValue)
    const isIncDisabled = useSelector<AppRootType, boolean>(state => state.isIncDisabled)
    const isResetDisabled = useSelector<AppRootType, boolean>(state => state.isResetDisabled)
    const isSetDisabled = useSelector<AppRootType, boolean>(state => state.isSetDisabled)

    const maxValueRedux = useSelector<AppRootType, number>(state => state.maxValue)
    const minValueRedux = useSelector<AppRootType, number>(state => state.minValue)

    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)


    const inc = () => {
        dispatch(incAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    const set = () => {
        dispatch(setAC(maxValue, minValue))
    }

    const setMax = (e:ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value<=0 || value<=minValue || minValue<0) {
            console.log('error max')
            dispatch(errorAC())
            setMaxValue(value)
        } else {
            dispatch(proposalAC())
            setMaxValue(value)
        }
    }
    const setMin = (e:ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value<0 || value>=maxValue) {
            console.log('error min')
            dispatch(errorAC())
            setMinValue(value)
        } else {
            dispatch(proposalAC())
            setMinValue(value)
        }
    }

    return (

        <div className="App">
            <div className={'counter'}>
                <div className={'display'}>{counterValue}</div>
                <div>
                    <button onClick={inc} disabled={isIncDisabled || counterValue >= maxValueRedux}>inc</button>
                    <button onClick={reset} disabled={isResetDisabled || counterValue <= minValueRedux}>reset</button>
                </div>
            </div>

            <div className={'settings'}>
                <input type="number" onChange={setMax} value={maxValue}/>
                <input type="number" onChange={setMin} value={minValue}/>
                <button onClick={set} disabled={isSetDisabled}>set</button>
            </div>

        </div>
    );
}

export default App;
