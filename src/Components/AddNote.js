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
            <div className='ip'>
                
                <h1 className='notes'>Notes:</h1>
                <h1 className='display-note'>{this.state.inputField}</h1>
                <input name= 'inputField'
                 value= {this.state.inputField} 
                onChange = {(event)=> this.handleChange(event)}></input>
                <button className='add-button' onClick = {() => this.props.addNoteProp(this.state.inputField)}>add note</button>
                
            </div>
        )
    }
}

export default AddNote;