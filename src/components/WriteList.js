import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bringWriteList } from './actions';

const WriteList = () => {

    const writeList = useSelector(state => state.letterList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bringWriteList())
    }, [])

    return ( 
    <div className="ui relaxed divided list"> 
    <Link to="/addwrite" className="ui primary button">Add Comment</Link>
   
    {writeList.map(comment => {
        return (
            <div key={comment.id} className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <Link to={`/posts/${comment.id}`} className="header">{comment.title}</Link>
                    <div className="description">{comment.content}</div>
                    <div className="description">{comment.created_at}</div>
                </div>
            </div>
        )
    })}
    </div>
    );
};

export default WriteList
