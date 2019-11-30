import React from 'react';
import './NoteNav.css'

export default function NoteNav (props){
    return(
        <div className="NoteDetails">
            <div>
                <button type="button"
                    onClick={()=> props.history.goBack()}>
                        Back
                </button>
                
                {props.folder && (
                <h3>{props.folder.name}
                </h3>
            )}
            </div>
            <div className="details">
            {console.log(props.note.name)}

                <h3>{props.note.name}</h3>
                <p>{props.note.content}</p>
            </div>
                
        </div>
    )
}

NoteNav.defaultProps = {
    history: {
        goBack: ()=> {}
    }
}