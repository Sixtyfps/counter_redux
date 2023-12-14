import {counterReducer, incAC, resetAC} from "./counter-reducer";

test ('state incrementation', () => {
    const startState: number = 0
    const endState = counterReducer(startState, incAC())

    expect(endState).toBe(1)
})

test ('state reset to zero', () => {
    const startState: number = 3
    const endState = counterReducer(startState, resetAC())

    expect(endState).toBe(0)
})