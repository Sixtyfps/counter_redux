
export type ActionsTypes = ReturnType<typeof incAC> | ReturnType<typeof resetAC>

export const counterReducer = (state: number=0, action:ActionsTypes):number => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

export const incAC = () => {return{type:'INCREMENT'}}
export const resetAC = () => {return{type:'RESET'}}