import React from 'react'
// import { format } from 'date-fns'
import {Link} from 'react-router-dom'
import "./Folder.css";

export default function FolderNotes (props) {
    return (
      <div>
        <h2 className="note-title"> 
          <Link to={`/note/${props.id}`}>
          {props.name} 
          </Link> 
        </h2>
        <button type='button'>
          Remove
        </button>
        {console.log}
        {/* <div>
          Modified {''}
          <span>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div> */}
 
      </div>
    )
}


