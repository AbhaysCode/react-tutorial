import React from 'react';
import Table from './Table.js';
import Form from './Form.js';

class App extends React.Component{
    state = {
         characters:[
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]
    }
    removeCharacter = (index) =>{
        const characters = this.state.characters;
        this.setState({
            "characters":characters.filter((elem,i)=> i!== index)
        })
    }
    addData = (character) =>{
        console.log("Inside the add Data");
        this.setState({ characters: [...this.state.characters, character] })
    }
    render(){
      return(
        <div className='App'>
          <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
          <Form onSubmit={this.addData}/>
        </div>
      )
    }
  }

export default App;