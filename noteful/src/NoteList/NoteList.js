import React from 'react';
import {Link, NavLink} from "react-router-dom"
import { countNotesForFolder } from '../notes-helper';
import "./NoteList.css"
export default function NoteList (props){
    return (
        <div className="leftNav">
            <ul>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                    <NavLink
                        to={`/folder/${folder.id}`}>{folder.name}
                            <span> ({countNotesForFolder(props.notes, folder.id)})
                            </span> 
                    </NavLink>
                    </li>
                    )}
            </ul>
            <button type="button">
                <Link to="/add-folder">
                    Add Folder
                </Link>

            </button>
        </div>
    )
}

NoteList.defaultProps={
    folders: []
}