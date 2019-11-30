import React from 'react';
import FolderNotes from '../Folder/FolderNotes'
import { findNote } from '../notes-helper'
import ApiContext from '../ApiContext'

export default class PageMain extends React.Component{
    static defaultProps ={
        match: {
            params: {}
        }
    }
    static contextType = ApiContext
    handleDeleteNote = noteId => {
        this.props.history.push(`/`)
    }
    render(){
        const { notes= []} = this.context
        const {noteId} = this.props.match.params
        const note = findNote(notes, noteId) || {content: ''}
        return(
            <section> 
                <FolderNotes
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDeleteNote}
                />
                <div>{note.content.split(/\n \r|\n/).map((para,i) => <p key={i}> {para}</p>
                        )}
                </div>
            </section>
        )
    }
    
}