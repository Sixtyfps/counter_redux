import {counterReducer, incAC, resetAC} from "./counter-reducer";

test ('state incrementation', () => {
    const startState = {
        counterValue: 1,
        maxValue: 5,
        minValue: 5,
        isIncDisabled: false,
        isResetDisabled: false,
        isSetDisabled: false,
        isInputError: false
    }
    const endState = counterReducer(startState, incAC())

    expect(endState.counterValue).toBe(2)
})

test ('state reset to zero', () => {
    const startState = {
        counterValue: 1,
        maxValue: 5,
        minValue: 0,
        isIncDisabled: false,
        isResetDisabled: false,
        isSetDisabled: false,
        isInputError: false
    }
    const endState = counterReducer(startState, resetAC())

    expect(endState.counterValue).toBe(0)
})