import React from 'react';

export type ButtonType = {
    onClick: () => void,
    disabled: boolean,
    name: string
}

export const Button: React.FC<ButtonType> = (props) => {
    return (
        <>
            <button onClick={props.onClick}
                    disabled={props.disabled}>{props.name}</button>
        </>
    );
};