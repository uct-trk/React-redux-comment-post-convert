
const INITIAL_STATE = {
    letterList: [],
    letterListError: ""
}


export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "BRING_WRITE_LIST":
            return { ...state, letterList : action.payload}
        case "BRING_WRITE_LIST_ERROR":
            return { ...state, letterListError: action.payload}
        default:     
        return state
    }
}