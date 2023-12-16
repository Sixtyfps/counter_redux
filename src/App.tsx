import React, {ChangeEvent} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incAC, resetAC, setAC, setMaxAC, setMinAC} from "./redux/counter-reducer";
import {AppRootType} from "./redux/store";

function App() {
    const dispatch = useDispatch()
    const counterNumber = useSelector<AppRootType, number>(state => state.counterValue)
    const isIncDisabled = useSelector<AppRootType, boolean>(state => state.isIncDisabled)
    const isResetDisabled = useSelector<AppRootType, boolean>(state => state.isResetDisabled)
    const isSetDisabled = useSelector<AppRootType, boolean>(state => state.isSetDisabled)
    const showCounterValue = useSelector<AppRootType, boolean>(state => state.showCounterValue)
    const showProposalMessage = useSelector<AppRootType, boolean>(state => state.showProposalMessage)
    const showErrorMessage = useSelector<AppRootType, boolean>(state => state.showErrorMessage)

    const inc = () => {
        dispatch(incAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    const set = () => {
        dispatch(setAC())
    }

    const setMax = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC(+e.currentTarget.value))
    }
    const setMin = (e:ChangeEvent<HTMLInputElement>) => {
       dispatch(setMinAC(+e.currentTarget.value))
    }

    console.log(counterNumber)
    return (

        <div className="App">
            <div className={'counter'}>
                {showCounterValue && <div className={'display'}>{counterNumber}</div>}
                {showProposalMessage && <div>Enter and set</div>}
                {showErrorMessage && <div>Error</div>}
                <div>
                    <button onClick={inc} disabled={isIncDisabled}>inc</button>
                    <button onClick={reset} disabled={isResetDisabled}>reset</button>
                </div>
            </div>

            <div className={'settings'}>
                <input type="number" onChange={setMax}/>
                <input type="number" onChange={setMin}/>
                <button onClick={set} disabled={isSetDisabled}>set</button>
            </div>

        </div>
    );
}

export default App;
