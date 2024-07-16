import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

export type InputType = {
    type: string,
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void,
    value: number,
    isInputError: boolean
}

export const Input: React.FC<InputType> = (props) => {
    return (
        <>
            <input className={s.input}
                type={props.type}
                   onChange={props.onChangeCallback}
                   value={props.value}
                   style={props.isInputError? {backgroundColor: '#ffcccc'} : {}}/>
        </>
    );
};