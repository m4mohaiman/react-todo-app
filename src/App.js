import React, { Component } from 'react';
import Note from './Note/Note';


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
       <div className="noteswarpper">
         <div className="noteHeader">
           <div className="heading"><h1>React and Firebase To-Do List</h1></div>
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

          <div className="notesFooter">This is footer </div>

       </div>
    );
  }
}

export default App;
