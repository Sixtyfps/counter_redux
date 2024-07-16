import React from 'react';
import s from "./Button.module.css"

export type ButtonType = {
    onClick: () => void,
    disabled: boolean,
    name: string
}

export const Button: React.FC<ButtonType> = (props) => {
    return (
        <>
            <button className={`${s.button} ${props.disabled? s.disabled : ''}`}
                    onClick={props.onClick}
                    disabled={props.disabled}>{props.name}</button>
        </>
    )
}