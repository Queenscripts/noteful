import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Note from "../Note/Note";
import PageMain from "../PageMain/PageMain"
import NoteList from "../NoteList/NoteList";
import NoteNav from "../NoteNav/NoteNav";
import AddFolder from "../AddFolder/AddFolder"
import AddNote from "../AddNote/AddNote"
import store from "../store";
import "./App.css";
import ApiContext from '../ApiContext';
import config from '../config';
import FolderNotes from "../Folder/FolderNotes";


export default class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json()
          .then(e=>Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json()
          .then(e=> Promise.reject(e));
          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({notes, folders});
      })
      .catch(error => {
        console.error({error});
      });
  }
  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note=> note.id !== noteId)
    });
  };
  renderFolder() {
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
          component={NoteNav}
        /> 
    </>
  );
}
  renderFolderRoutes() {
    return (
      <>
        
        <Route
          exact key= "/folder/:folderId"
          path="/folder/:folderId"
          component={Note}
        />
        <Route
          exact key= "/"
          path="/"
          component={Note}
        />
      <Route
        path='/add-folder'
        component={AddFolder}
      />
      <Route
        path='/add-note'
        component={AddNote}
      />
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