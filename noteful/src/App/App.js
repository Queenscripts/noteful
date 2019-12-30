import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Note from "../Note/Note";
import PageMain from "../PageMain/PageMain"
import NoteList from "../NoteList/NoteList";
import NoteNav from "../NoteNav/NoteNav";
import AddFolder from "../AddFolder/AddFolder"
import AddNote from "../AddNote/AddNote"
import "./App.css";
import ApiContext from '../ApiContext';
import config from '../config';
import AddFolderError from "../AddFolderError/AddFolderError"


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      notes: [],
      folders: [],
      name: '',
      content: '',
      folderId: '',
      folder: ''
    };
    this.onNameChange= this.onNameChange.bind(this);
    this.onContentChange= this.onContentChange.bind(this);
    this.onfolderChange= this.onfolderChange.bind(this)
    this.newFolder=this.newFolder.bind(this)
  }
  newFolder(e){
    e.preventDefault()
    console.log('folder', e.target.value)
    this.setState({
      folder: e.target.value
    })
  }
  onNameChange(e){
    e.preventDefault()
    this.setState({
        name: e.target.value
    }
    )
  }  
  onContentChange(e){
    e.preventDefault()
    this.setState({
        content: e.target.value
    }
    )
  }  
  onfolderChange(e){
    e.preventDefault()
    this.setState({
        folderId: e.target.value
    })
  }
  
  componentDidMount() {
    let fetchData = () => {
      const endpts = [
        `${config.API_ENDPOINT}/notes`,
        `${config.API_ENDPOINT}/folders`
      ];
      //map each endpoint to the promise of the fetch
      let requests = endpts.map(endpt=>
        fetch(endpt)
        .then(response => response.json())
        );
      //promise.all will wait until all jobs are executed
      return Promise.all(requests)

    }
    fetchData().then(res=>{
      console.log('res',res[1])
      this.setState({
        notes: res[0],
        folders: res[1],
      })
 
    //   })
    // })
    // .catch(err => {
    //   this.setState({
    //     error: err.message
    //   });
    // });
    })
  }

folderSubmit = (e) =>{
  e.preventDefault();
  const folder = {name: this.state.folder};
  console.log('newfolder', folder)
  fetch("http://localhost:9090/folders", {
      method: "POST",
      body: JSON.stringify(folder),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error ('Something is wrong, try again')
      }
      return res.json()
    })
    .then(data => {
      console.log('data',data)
      let newFolder= this.state.folders
      // console.log('new folder', this.state.folders)
      newFolder.push(data)
      console.log('new folder', newFolder)
      this.setState({folders: newFolder})
    })
    .catch(error => alert(error))
}

handleSubmit = (e) => {
  e.preventDefault();
  const {name, content,folderId} = this.state;
  const newNote = {name, content,folderId}
  console.log('newnote', newNote)

  fetch("http://localhost:9090/notes", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error ('Something is wrong, try again')
      }
      return res.json()
    })
    
    .then(data => {
      console.log('data',data)
      let tempNotes= this.state.notes
      tempNotes.push(newNote)
      this.setState({
          name: data.name,
          content: data.content,
          folderId: data.folderId,
          notes: tempNotes
      });
      
    })
    .catch(error => alert(error))
  }


handleDeleteNote = (noteId) => {
  console.log('delnote', noteId)

  this.setState({
    notes: this.state.notes.filter(note=> note.id !== noteId)
  });
};
  renderFolder() {
    const {notes} = this.state
    return (
      <>
        <Route
          exact
          key="/"
          path="/"
          component={NoteList}
        />
        <Route
          path="/note/:noteId"
          component={NoteNav}
        />
        <Route
          path="/note/:noteId"
          component={PageMain}
        />
        <Route
          exact
          key="/folder/:folderId"
          path="/folder/:folderId"
          component={NoteList}
        />
        <Route path="/add-folder"  
          component={NoteNav}
        />
        <Route 
          path="/add-note"    
          render={props =>   
            <NoteNav {...props} 
            notes={notes} />
          }
        /> 
    </>
  )
}
  renderFolderRoutes() {
    console.log('notes', this.state.notes)

    return (
      <>
      <Route
        exact key= "/folder/:folderId"
        path="/folder/:folderId"
        component={Note}
      />
      <Route
        key= "/"
        exact path="/"
        component={Note}
      />
      <Route
        path='/add-folder'
        render={props=>
          <AddFolderError>
            <AddFolder {...props}
              folderSubmit={this.folderSubmit}
              newFolder={this.newFolder}
              folder={this.state.folder}
            />
          </AddFolderError>
        }
      />
      <Route
        path='/add-note'
        render={ props => 
            <AddNote {...props} 
              handleSubmit={this.handleSubmit}
              onContentChange={this.onContentChange}
              name={this.state.name}
              onNameChange={this.onNameChange}
              content={this.state.content}
              folder={this.state.folderId}
              onfolderChange={this.onfolderChange}
            />

        }
      />
     { console.log('NAME',this.state.name)}

    </>
    )
  }
  //second render

  render() {
    // final main render to bring it all together now
      const value = {
        notes: this.state.notes, 
        folders: this.state.folders, 
        deleteNote: this.handleDeleteNote
      };
    return (
      <ApiContext.Provider 
      value={value}>
        <div className="body">
        <header>
          <h1>
            <Link to="/" className="link" to="/">
              {" "}
              Noteful
            </Link>
          </h1>
        </header>
        {/* folder Routes - folders */}
        <div className="main">
          {/* LEFT NAVIGATION : FOLDERS */}
          {this.renderFolder()}
           {/* RIGHT NOTES & FOLDERS NAVIGATION */}
          {this.renderFolderRoutes()}
          
        </div>
        {/* Render Notes */}
      </div>
      </ApiContext.Provider>
    );
  }
}
