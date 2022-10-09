import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
function Note(props) {

    function handleDelete() {
        props.Deleting(props.id)
    }
    
    function handleUpdate(){
        
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleUpdate} className="update">
                <EditIcon />
            </button>
            <button onClick={handleDelete} className="delete">
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}

export default Note;