import React from 'react';

class Form extends React.Component{

    initialState = {
        "name":'',
        "job":''
    }
    state = this.initialState;

    handleChange =(event) =>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
        console.log("Inside the handleChange name",name);
        console.log("Inside the handleChange value",value);
    }
    submitForm = () =>{
        console.log("this.props.state",this.props.onSubmit);
        console.log("this.state is",this.state);
        this.props.onSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const { name, job } = this.state;
      
        return (
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
            <label htmlFor="job">Job</label>
            <input
              type="text"
              name="job"
              id="job"
              value={job}
              onChange={this.handleChange} />
            <button type="button" value="Submit"   onClick={this.submitForm}> Submit</button>
          </form>
        );
      }
      
      
    }
    export default Form;