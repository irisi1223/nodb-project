import React, {Component} from 'react'

class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            inputEdit: ''
        }

    } 
    handleSaveChange = ()=>{
        this.props.editNoteProp(this.state.inputEdit, this.props.notesProp.id)
        this.setState({isEditing: false})
    }

    handleChange = (event) =>{
        this.setState({inputEdit: event.target.value})
    }

    toggleEdit = () =>{
        this.setState({isEditing: true})
    }
    handleDelete = () =>{
        this.props.remNoteProp(this.props.notesProp.id)
    }
  


    render(){
        console.log(this.props)
        return(
            <div className= 'input-field'>{
                this.state.isEditing? <div>
                    <div className='save'>
                         <button onClick= {() => this.handleSaveChange()}>save changes</button>
                    </div>    
                            <div className='input'>
                                 <input  name= 'edit input' onChange= {(event)=> this.handleChange(event)} value={this.state.inputEdit}  />
                            </div>
                </div>:<div className='prop'>
                    <h1 className='stuck-note'>{this.props.notesProp.valNote}</h1>
                <button className='edit-button' onClick= {() => this.toggleEdit()}>edit</button>
                <button onClick= {() => this.handleDelete()}>delete</button></div>}
                
            </div>    
        )
    }
}


export default Note;