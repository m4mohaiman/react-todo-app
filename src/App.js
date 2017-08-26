import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';


class App extends Component {

  constructor(props){
    super(props);

    //React states of out Component
    this.state = {
      notes : [
        { id: 1, noteContent : "Note 1 is here!!"},
        { id: 2, noteContent : "Note 2 is here!!"},
      ],
    }

  }

  render() {
    return (
       <div className="notesWrapper">
         <div className="notesHeader">
           <div className="heading">React and Firebase To-Do List</div>
         </div>
         <div className="notesBody">
           {
             this.state.notes.map((note) => {
               return (
                 <Note noteContent={note.noteContent} noteId={note.Id} key={note.Id}/>
               )
             })
           }
         </div>
          <div className="notesFooter">
            <NoteForm />
          </div>
       </div>
    );
  }
}

export default App;
