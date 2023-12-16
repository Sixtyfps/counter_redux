const initialState = {
    counterValue: 0,
    maxValue: 0,
    minValue: 0,
    isIncDisabled: false,
    isResetDisabled: false,
    isSetDisabled: false,
    showCounterValue: true,
    showProposalMessage: false,
    showErrorMessage: false
}

//--------------------------------------TYPES------------------------------------------
export type ActionsTypes = ReturnType<typeof incAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof setMinAC>
    | ReturnType<typeof setAC>


export type StateType = {
    counterValue: number,
    maxValue: number,
    minValue: number,
    isIncDisabled: boolean,
    isResetDisabled: boolean,
    isSetDisabled: boolean,
    showCounterValue: boolean,
    showProposalMessage: boolean,
    showErrorMessage: boolean
}

export const counterReducer = (state: StateType = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case 'RESET':
            return {
                ...state,
                counterValue: state.minValue
            }
        case 'SET':
            return {
                ...state,
                counterValue: state.minValue,
                isIncDisabled: false,
                isResetDisabled: false,
                showCounterValue: true,
                showErrorMessage:false,
                showProposalMessage: false
            }
        case 'SET-MAX':
            return {
                ...state,
                maxValue: action.value,
                isIncDisabled: true,
                isResetDisabled: true,
                showCounterValue: false,
                showErrorMessage:false,
                showProposalMessage: true
            }
        case 'SET-MIN':
            return {
                ...state,
                minValue: action.value,
                isIncDisabled: true,
                isResetDisabled: true,
                showCounterValue: false,
                showErrorMessage:false,
                showProposalMessage: true
            }
        default: {
            return state
        }

    }
}

export const incAC = () => ({type: 'INCREMENT'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const setAC = () => ({type: 'SET'} as const)

export const setMaxAC = (value: number) => {
    return {type: 'SET-MAX', value} as const
}

export const setMinAC = (value: number) => {
    return {type: 'SET-MIN', value} as const
}