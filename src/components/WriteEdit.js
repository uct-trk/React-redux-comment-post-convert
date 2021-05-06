import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { api } from '../api'
import WriteForm from './WriteForm'

const WriteEdit = (props) => {

   /*  const [ editWrite, setEditWrite ] = useState({}) */

    const {id} = useParams()

    const editWrite = useSelector(state => state.letterDetail)

    /* useEffect(() => {
        api().get(`/posts/${id}`)
        .then((response) => {setEditWrite({ title: response.data.title, content: response.data.content})})
    }, []) */

    return (
        <div>
            <h2>Write Edit Form</h2>
            <WriteForm editWrite={editWrite} />
        </div>
    )
}

export default WriteEdit
