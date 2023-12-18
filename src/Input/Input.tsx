import React, {ChangeEvent} from 'react';

export type InputType = {
    type: string,
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void,
    value: number
}

export const Input: React.FC<InputType> = (props) => {
    return (
        <>
            <input type={props.type}
                   onChange={props.onChangeCallback}
                   value={props.value}/>
        </>
    );
};