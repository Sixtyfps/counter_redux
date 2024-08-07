import React, {ChangeEvent, useState} from 'react';
import {Input} from "../Input/Input";
import {errorAC, proposalAC, setAC} from "../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../redux/store";
import {Button} from "./../Button/Button";
import s from './Settings.module.css'

export const Settings: React.FC = () => {
    const dispatch = useDispatch()
    const isSetDisabled = useSelector<AppRootType, boolean>(state => state.isSetDisabled)
    const isInputError = useSelector<AppRootType, boolean>(state => state.isInputError)

    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)

    const set = () => {
        dispatch(setAC(maxValue, minValue))
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value <= 0 || value <= minValue || minValue < 0) {
            console.log('error max')
            dispatch(errorAC())
            setMaxValue(value)
        } else {
            dispatch(proposalAC())
            setMaxValue(value)
        }
    }
    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value < 0 || value >= maxValue) {
            console.log('error min')
            dispatch(errorAC())
            setMinValue(value)
        } else {
            dispatch(proposalAC())
            setMinValue(value)
        }
    }

    return (
        <div className={s.settings}>
            <div className={s.inputsContainer}>
                <div className={s.inputContainer}>
                    <span>Max value: </span>
                    <Input type='number'
                           onChangeCallback={setMax}
                           value={maxValue}
                           isInputError={isInputError}/>
                </div>

                <div className={s.inputContainer}>
                    <span>Min value: </span>
                    <Input type='number'
                           onChangeCallback={setMin}
                           value={minValue}
                           isInputError={isInputError}/>
                </div>

            </div>
            <div className={s.buttonContainer}>
                <Button onClick={set} disabled={isSetDisabled} name='set'/>
            </div>

        </div>
    );
};