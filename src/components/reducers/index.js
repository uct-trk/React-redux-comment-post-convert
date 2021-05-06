
const INITIAL_STATE = {
    letterList: [],
    letterListError: "",
    letterDetail: { id: "", title: "", content: "", created_at: "", comments: [] },
    letterDetailError: "",
    addCommentError: "",
    deleteWrterror: "",
    letterEditError: ""
}


export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "BRING_WRITE_LIST":
            return { ...state, letterList: action.payload, letterListError: "" }
        case "BRING_WRITE_LIST_ERROR":
            return { ...state, letterListError: action.payload }
        case "BRING_WRITE":
            return { ...state, letterDetail: action.payload, letterDetailError: "" }
        case "BRING_WRITE_ERROR":
            return { ...state, letterDetailError: action.payload }
        case "ADD_COMMENT":
            return { 
                ...state, 
                letterDetail: { ...state.letterDetail, 
                    comments: [...state.letterDetail.comments, action.payload] },
                addCommentError: "" }
        case "ADD_COMMENT_ERROR":
            return { ...state, addCommentError: action.payload} 
        case "DELETE_W":
            return { ...state, letterList: state.letterList.filter(w => w.id !== action.payload),
                    deleteWrterror: ""}       
        case "DELETE_W_ERR":
            return { ...state, letterListError: action.payload}
        case "EDIT_WRITE":
            return { ...state, letterDetail: { ...state.letterDetail, ...action.payload}} 
        case "EDIT_WRITE_ERROR":
            return { ...state, letterEditError: action.payload}           
        default:
            return state
    }
}