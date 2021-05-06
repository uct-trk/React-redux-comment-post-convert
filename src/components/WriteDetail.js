import React, { useEffect } from 'react'
import WriteComments from './WriteComments'
import { Link, useHistory, useParams } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import { addComment, bringWrite } from './actions'
import { useDispatch, useSelector } from 'react-redux'


const WriteDetail = () => {


    const letterDetail = useSelector(state => state.letterDetail)

    // destructuring
    /* const { id } = props.match.params */
    const {id} = useParams() // üsttekinin aynısı 
    
    const history = useHistory()
    const dispatch = useDispatch()

    // yazılan yorumları apı ye gönderiyoruz, veri tabanına obje içerisindeki isimler ile kayıt olur
    const handleCommentSubmit = (event, comment) => {
        event.preventDefault();
        dispatch(addComment(id, comment));
    }

    
    
    useEffect(() => {
            dispatch(bringWrite(id))
    }, [])


    return (
        <>
            <div className="ui grid">
                <div className="ui buttons" style={{marginLeft:"450px"}}>
                    <Link to={`/posts/${letterDetail.id}/edit`} className="ui button blue">Edit</Link>
                    <DeleteModal comment={letterDetail}/>
                </div>
            </div>
            <h2 className="ui header">{letterDetail.title}</h2>
            <p>{letterDetail.content}</p>

            <p>{letterDetail.created_at}</p>

            <WriteComments comments={letterDetail.comments} handleCommentSubmit={handleCommentSubmit} />

        </>
    )
}

export default WriteDetail
