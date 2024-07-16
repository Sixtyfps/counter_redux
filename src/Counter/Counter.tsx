import React from 'react';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../redux/store";
import {incAC, resetAC} from "../redux/counter-reducer";

export const Counter: React.FC = () => {
    const dispatch = useDispatch()

    const counterValue = useSelector<AppRootType, number | string>(state => state.counterValue)
    const isIncDisabled = useSelector<AppRootType, boolean>(state => state.isIncDisabled)
    const isResetDisabled = useSelector<AppRootType, boolean>(state => state.isResetDisabled)
    const isInputError = useSelector<AppRootType, boolean>(state => state.isInputError)

    const maxValueRedux = useSelector<AppRootType, number>(state => state.maxValue)
    const minValueRedux = useSelector<AppRootType, number>(state => state.minValue)

    const inc = () => {
        dispatch(incAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    return (
        <div>
            <div style={counterValue === maxValueRedux || isInputError ? {color: 'red'} : {}}>{counterValue}</div>
            <div>
                <Button onClick={inc}
                        disabled={isIncDisabled || counterValue >= maxValueRedux} name='inc'/>
                <Button onClick={reset}
                        disabled={isResetDisabled || counterValue <= minValueRedux} name='reset'/>
            </div>
        </div>
    );
};