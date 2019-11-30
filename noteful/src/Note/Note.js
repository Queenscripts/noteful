import React from 'react'
import {Link} from 'react-router-dom'
import FolderNotes from '../Folder/FolderNotes'
import ApiContext from '../ApiContext'
import {getNotesForFolder} from '../notes-helper'

 export default class Note extends React.Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext
    render() {
        const {folderId} = this.props.match.params
        const {notes=[]} = this.context
        const notesForFolders = getNotesForFolder(notes, folderId)
        return (
            <section>
            
                <div className="note-main">
                        <ul className="note">
                            {notesForFolders.map(note =>
                                <li key={note.id}>
                                    <FolderNotes
                                        id={note.id}
                                        name={note.name}
                                        modified={note.modified}
                                   />
                                </li>
                            )}
                            <li>
                                <button
                                    type='button'>
                                    <Link
                                        to='/add-note'
                                    >
                                    Add Note
                                    </Link>
        
                                </button>
                            </li>
                        </ul>
                </div>
            </section>
            
        )
    }
    
}
