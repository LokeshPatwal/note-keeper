import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        const { name, value } = event.target;

        setNote((curValue) => {
            if (name === "title") {
                return {
                    title: value,
                    content: curValue.content,
                }
            }
            else if (name === "content") {
                return {
                    title: curValue.title,
                    content: value,
                }
            }
        })
    }
    function handleAdd(event) {
        props.Adding(note)
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        })

    }

    return (
        <div>
            <form className="create-note">
                <input className="input" onChange={handleChange} name="title" value={note.title} placeholder="Title" />
                <textarea className="textarea" onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button className="add" onClick={handleAdd}>
                    <AddCircleOutlineIcon />
                </button>
            </form>
        </div>
    )
}

export default CreateArea;