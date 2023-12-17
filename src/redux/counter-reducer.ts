const initialState = {
    counterValue: 0,
    maxValue: 0,
    minValue: 0,
    isIncDisabled: false,
    isResetDisabled: true,
    isSetDisabled: true,
    showCounterValue: false,
    showProposalMessage: true,
    showErrorMessage: false
}

//--------------------------------------TYPES------------------------------------------
export type ActionsTypes = ReturnType<typeof incAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof setMinAC>
    | ReturnType<typeof setAC>


export type StateType = {
    //-----VALUES-----
    counterValue: number,
    maxValue: number,
    minValue: number,
    //------BUTTONS--------
    isIncDisabled: boolean,
    isResetDisabled: boolean,
    isSetDisabled: boolean,
    //------COUNTER-INFO-DISPLAY------
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
                //----VALUES-------
                counterValue: state.minValue,
                //-----BUTTONS---------
                isIncDisabled: false,
                isResetDisabled: false,
                isSetDisabled: true,
                //------COUNTER-INFO-DISPLAY------
                showCounterValue: true,
                showErrorMessage:false,
                showProposalMessage: false

            }
        case 'SET-MAX':
            if (action.value<=0 ||  action.value<=state.minValue || state.minValue<0) {
                return {
                    ...state,
                    //----VALUES-------
                    maxValue: action.value,
                    //-----BUTTONS---------
                    isIncDisabled: true,
                    isResetDisabled: true,
                    isSetDisabled:true,
                    //------COUNTER-INFO-DISPLAY------
                    showCounterValue: false,
                    showErrorMessage:true,
                    showProposalMessage: false,
                }
            } else {
                return {
                    ...state,
                    //----VALUES-------
                    maxValue: action.value,
                    //-----BUTTONS---------
                    isIncDisabled: true,
                    isResetDisabled: true,
                    isSetDisabled:false,
                    //------COUNTER-INFO-DISPLAY------
                    showCounterValue: false,
                    showErrorMessage:false,
                    showProposalMessage: true,
                }
            }


        case 'SET-MIN':
            if (action.value<0 || action.value>=state.maxValue) {
                return {
                    ...state,
                    //----VALUES-------
                    minValue: action.value,
                    //-----BUTTONS---------
                    isIncDisabled: true,
                    isResetDisabled: true,
                    isSetDisabled: true,
                    //------COUNTER-INFO-DISPLAY------
                    showCounterValue: false,
                    showErrorMessage:true,
                    showProposalMessage: false
                }
            } else {
                return {
                    ...state,
                    //----VALUES-------
                    minValue: action.value,
                    //-----BUTTONS---------
                    isIncDisabled: true,
                    isResetDisabled: true,
                    isSetDisabled: false,
                    //------COUNTER-INFO-DISPLAY------
                    showCounterValue: false,
                    showErrorMessage:false,
                    showProposalMessage: true
                }
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