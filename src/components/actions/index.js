import axios from "axios"
import { api } from "../../api"

export const bringWriteList = () => dispatch => {
    api()
        .get("/posts")
        .then((response) => {
            dispatch({ type: "BRING_WRITE_LIST", payload: response.data })
        })
        .catch(() => {
            dispatch({
                type: "BRING_WRITE_LIST_ERROR",
                payload: "Found Error"
            })
        })
}

export const bringWrite = (id) => dispatch => {
    axios.all([
        api().get(`/posts/${id}`),
        api().get(`/posts/${id}/comments`)])
        .then(responses => {
            // yazının içeriği ve yorumları tek bir obje altında toplandı
            const payload = {
                ...responses[0].data,
                comments: responses[1].data,
            }
            dispatch({ type: "BRING_WRITE", payload })
        })
        .catch((error) => {
            dispatch({ type: "BRING_WRITE_ERROR", payload: "Loading error" })
        })
}

// yazı edit
export const editWrite = (id, write, push) => dispatch => {
    api()
        .put(`/posts/${id}`, write)
        .then((response) => {
            dispatch({type: "EDIT_WRITE", payload: response.data})
            push(`/posts/${id}`)
        })
        .catch((err) => {
            dispatch({type: "EDIT_WRITE_ERROR", payload: "You have to fill Header and Content"})
        });
}



//yorumları dataya ekliyoruz
export const addComment = (id, comment) => dispatch => {
    api()
        .post(`/posts/${id}/comments`, comment)
        .then(response => {
            dispatch({ type: "ADD_COMMENT", payload: response.data })
        })
        .catch((error) => {
            dispatch({
                type: "ADD_COMMENT_ERROR",
                payload: "Add comment error"
            })
        })
}

export const writeDelete = (id, close, push) => dispatch => {
    api()
        .delete(`/posts/${id}`)
        .then(() => {
            dispatch({ type: "DELETE_W", payload: id })
            // modal close
            close()
            // anasayfaya push yapıcaz push yapabilmek için historye ihtiyaç var 2 yolla 1. yol withRouter ile export bu sayede historye erişim olucak 2. yol props ile push metodunu alma
            push(`/`)
        })
        .catch(() => {
            dispatch({ type: "DELETE_W_ERR", payload: "Become Error during delete" })
        })
}