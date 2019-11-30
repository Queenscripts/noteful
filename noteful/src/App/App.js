import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Note from "../Note/Note";
import NoteList from "../NoteList/NoteList";
import NoteNav from "../NoteNav/NoteNav";
import AddFolder from "../AddFolder/AddFolder"
import AddNote from "../AddNote/AddNote"
import store from "../store";
import "./App.css";
import { getNotesForFolder, findNote, findFolder } from "../notes-helper";


export default class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    //add date to note section
    setTimeout(() => this.setState(store), 600);
  }

  renderFolder() {
    const {notes, folders} = this.state
    return (
      <>
        <Route
          exact
          key="/"
          path="/"
          render={routeProps => 
            <NoteList 
              folders={folders} 
              notes={notes}{...routeProps}
            />
          }
        />
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            return ( 
            <NoteNav 
              {...routeProps}       
              folder={folder}
              note={note} />
            )
          }}
        />
        
        <Route
          exact
          key="/folder/:folderId"
          path="/folder/:folderId"
          render={routeProps => 
            <NoteList 
              folders={folders}
              notes={notes}
              {...routeProps}
            />
          }
        />
          <Route path="/add-folder"  render={routeProps => {
              const {noteId} = routeProps.match.params;
              const note = findNote(notes, noteId) || {}
              const folder = findFolder(folders, note.folderId)
              return ( 
              <NoteNav 
                {...routeProps}       
                folder={folder}
                note={note} />
              )
            }}
        />
          <Route path="/add-note"    render={routeProps => {
              const {noteId} = routeProps.match.params;
              const note = findNote(notes, noteId) || {}
              const folder = findFolder(folders, note.folderId)
              return ( 
              <NoteNav 
                {...routeProps}       
                folder={folder}
                note={note} />
              )
            }}
        /> 
    </>
  )}
  renderFolderRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        <Route
          exact key= "/folder/:folderId"
          path="/folder/:folderId"
          render={routeProps => {
            const {folderId} = routeProps.match.params
            const notesForFolder = getNotesForFolder(notes, folderId)
            return (
              <div>
              <Note
                {...routeProps}
                notes={notesForFolder}
              />
              </div>
              
            )
          }}
        />
        <Route
          exact key= "/"
          path="/"
          render={routeProps => {
            const {folderId} = routeProps.match.params
            const notesForFolder = getNotesForFolder(notes, folderId)
            return (
              <div>
              <Note
                {...routeProps}
                notes={notesForFolder}
              />
              </div>
              
            )
          }}
        />
      <Route
        path='/add-folder'
        component={AddFolder}
      />
      <Route
        path='/add-note'
        render={routeProps =>{
          return (
            <AddNote
              {...routeProps}
              folders={folders}
            />
          )
        }}
      />
    </>
    )
  }
  //second render

  render() {
    // final main render to bring it all together now
    return (
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
    );
    }
}