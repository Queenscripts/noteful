import React from 'react'
import ApiContext from '../ApiContext'
import {findNote, findFolder} from '../notes-helper'
import './NoteNav.css'
import PropTypes from 'prop-types'

export default class NoteNav extends React.Component{
    static defaultProps={
        history: {
            goBack: ()=> {}
        },
        match:{
            params:{}
        }
    }
    static contextType = ApiContext;
    render() {
        const {notes, folders,} = this.context
        const {noteId} = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        return(
            <div className="NoteDetails">
                <div>
                    <button type="button"
                        onClick={()=> this.props.history.goBack()}>
                            Back
                    </button>
                    
                    {folder && (
                        <h3>
                            {folder.name}
                        </h3>
                    )}
                </div>
                </div>
         )
    }
}

NoteNav.propTypes={
    notes: PropTypes.array,
};
