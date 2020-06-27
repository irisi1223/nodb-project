import React, {Component} from 'react'

class AddNote extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputField: ''
        }
    }

    handleChange = (event) => {
        this.setState({inputField: event.target.value})
    }

    render(){
        return(
            <div>
                
                <h1>Notes</h1>
                <h1>{this.state.inputField}</h1>
                <input name= 'inputField'
                 value= {this.state.inputField} 
                onChange = {(event)=> this.handleChange(event)}></input>
                <button onClick = {() => this.props.addNoteProp(this.state.inputField)}>add note</button>
                <h1>Notes</h1>
            </div>
        )
    }
}

export default AddNote;