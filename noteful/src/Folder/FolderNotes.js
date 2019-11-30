import React from 'react'
import { format } from 'date-fns'
import {Link} from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'
import "./Folder.css";

export default class FolderNotes extends React.Component {
    static defaultProps = {
      onDeleteNote: () => {},
    }
    static contextType = ApiContext;
    handleClickDelete = e => {
      e.preventDefault()
      const noteId = this.props.id

      fetch(`${config.API_ENDPOINT}/notes/${noteId}`,{
        method: 'DELETE',
        headers:{
          'content-type': 'application/json'
        },
      })
        .then(res => {
          if(!res.ok)
            return res.json().then(e=> Promise.reject(e))
          return res.json()
        })
        .then(()=> {
          this.context.deleteNote(noteId)
          this.props.onDeleteNote(noteId)
        })
        .catch(error => {
          console.error({error})
        })
    }
    render(){
      const {name, id, modified} = this.props
      return (
        <div>
          <h2 className="note-title"> 
            <Link to={`/note/${id}`}>
              {name} 
            </Link> 
          </h2>
          <button 
            type='button'
            onClick={this.handleClickDelete}
          >
            Remove
          </button>
          
          <div>
            Modified {''}
            <span>
              {format(new Date(), 'dd/MM/yyyy HH:mm:ss', modified)}
            </span>
          </div>
        </div>
      )
    } 
}


