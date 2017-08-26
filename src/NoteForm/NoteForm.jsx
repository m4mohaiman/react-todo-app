import React, { Component } from 'react';
import'./NoteFrom.css';


class NoteForm extends Component{
  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <div className="formWrapper">
        <input className="noteInput" placeholder="Write add new to do"/>
        <button className="noteButton">Add Note</button>
      </div>
    )
  }
}

export default NoteForm;
