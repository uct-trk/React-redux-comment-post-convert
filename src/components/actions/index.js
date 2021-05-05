import { api } from "../../api"

export const bringWriteList = () => dispatch => {
    api()
        .get("/posts")
        .then((response) => {
                dispatch({type: "BRING_WRITE_LIST" ,payload: response.data})
            })
        .catch(() => {dispatch({
            type: "BRING_WRITE_LIST_ERROR",
            payload: "Found Error"
        })
    })     
}