import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams, withRouter } from 'react-router-dom' // history geldi
import { api } from '../api'
import { editWrite } from './actions'

const WriteForm = (props) => {

    const [write, setWrite] = useState({ title: "", content: "" })
    const [err, setErr] = useState("")

    const {id} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    const onInputChange = (event) => {
        setWrite({ ...write, [event.target.name]: event.target.value })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setErr("")
           // eğer yazı kısmı yoksa daha ileriye gitme
        if (props.editWrite?.title) {
            // edit işlemi yapılacak put request 
            console.log("id", id)
            dispatch(editWrite(id, write, history.push))

        } else {
            // add işlemi yapılacak
            api().post("/posts", write)
                .then(response => { history.push("/") })  // yazımız eklendiğinde onu ana sayfaya yönlendiriyoruz
                .catch((err) => { setErr() })
        }
    }

    // propstan gelen yazı
    useEffect(() => {
        if (props.write?.title && props.write?.content)
        {setWrite({ title: props.write.title, content: props.write.content})}; 
    }, [props.write])


    return (
        <>
            {err && (
                <div className="ui error message">
                    <div className="header">Error</div>
                    <p>{err}</p>
                </div>
            )}

            <div className="ui form">
                <div className="field">
                    <label>Header</label>

                    <input name="title" value={write.title} type="text" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Short Text</label>
                    <textarea name="content" value={write.content} rows="3" onChange={onInputChange}></textarea>
                </div>
                <button className="ui primary button" onClick={onFormSubmit}>Send</button>
                <button className="ui button">Cancel</button>
            </div>
        </>
    )
}

export default WriteForm

// useParams ve useHistory kullandık withRouter e gerek kalmadı
// withRoter kullanmamızın sebebi;
// App.js içinde route olan componentlerden olmadığı için burada boyle bir yöntem kullandık
