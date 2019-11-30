import React from 'react';
import {Link} from 'react-router-dom';
import FolderNotes from '../Folder/FolderNotes'
import NoteList from "../NoteList/NoteList"

 function Note (props){

    return (
        <section>
        
            <div className="note-main">
                    <ul className="note">
                        {props.notes.map(note =>
                            <li key={note.id}>
                                <FolderNotes
                                    id={note.id}
                                    name={note.name}
                                    modified={note.modified}
                               />
                            </li>
                        )}
                        <button
                            type='button'
                        >
                            <Link
                                to='/add-note'
                            >
                            Add Note
                            </Link>

                        </button>
                    </ul>
            </div>
        </section>
        
    )
}

export default Note

Note.defaultProps={
    notes:[]
}