const initialState = {
    counterValue: 'set values',
    maxValue: 0,
    minValue: 0,
    isIncDisabled: true,
    isResetDisabled: true,
    isSetDisabled: true,
}

//-------------------------TYPES------------------------------------------
export type ActionsTypes = ReturnType<typeof incAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setAC>
    | ReturnType<typeof errorAC>
    | ReturnType<typeof proposalAC>


export type StateType = {
    //-----VALUES-----
    counterValue: number | string,
    maxValue: number,
    minValue: number,
    //------BUTTONS--------
    isIncDisabled: boolean,
    isResetDisabled: boolean,
    isSetDisabled: boolean,
}

export const counterReducer = (state: StateType = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counterValue: +state.counterValue + 1
            }
        case 'RESET':
            return {
                ...state,
                counterValue: state.minValue
            }
        case 'SET':
            return {
                ...state,
                //----VALUES-------
                counterValue: action.minValue,
                maxValue: action.maxValue,
                minValue: action.minValue,
                //-----BUTTONS---------
                isIncDisabled: false,
                isResetDisabled: false,
                isSetDisabled: true,
            }

        case 'ERROR':
            return {
                ...state,
                //----VALUES-------
                counterValue: 'Error',
                //-----BUTTONS---------
                isSetDisabled: true,
                isResetDisabled: true,
                isIncDisabled: true
            }

        case 'PROPOSAL':
            return {
                ...state,
                //----VALUES-------
                counterValue: 'set values',
                //-----BUTTONS---------
                isSetDisabled: false,
                isResetDisabled: true,
                isIncDisabled: true
            }

        default: {
            return state
        }

    }
}

export const incAC = () => ({type: 'INCREMENT'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const setAC = (maxValue: number, minValue: number) => ({type: 'SET', maxValue, minValue} as const)
export const errorAC = () => ({type: 'ERROR'} as const)
export const proposalAC = () => ({type: 'PROPOSAL'} as const)