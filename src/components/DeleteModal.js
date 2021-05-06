import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Modal } from 'semantic-ui-react'
import { writeDelete } from './actions'


const DeleteModal = ({ comment }) => {

    const [open, setOpen] = useState(false)

    const show = () => {
        setOpen(true)
    }
    const close = () => {
        setOpen(false)
    }

    const {push} = useHistory();
    const err = useSelector(state => state.deleteWrterror)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(writeDelete(id, close, push))
    }

    return (
        <>
            <Button onClick={show} color="red">Delete</Button>

            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Delete Title and Content</Modal.Header>
                <Modal.Content>
                    <p>Do you want to delete {comment.title}</p>
                    {err && <p>{err}</p>}
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={close} negative>No</Button>
                    <Button
                        positive
                        icon="delete"
                        labelPosition="right"
                        content="Yes, Delete"
                        onClick={() => handleDelete(comment.id)} />
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default DeleteModal
