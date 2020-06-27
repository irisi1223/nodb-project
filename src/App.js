import React, {Component} from 'react'
import AddNote from './Components/AddNote'
import Notes from './Components/Note'
import axios from 'axios'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes: [],
            currentId: 0
        }

    }
      componentDidMount(){
        axios.get('/api/notes').then((res) =>{
          this.setState({
            notes: res.data
          })
        }).catch((err) =>{
          console.log(err)
        })
      }
      
      removeNote = (id) =>{
        axios.delete(`/api/notes/${id}`).then((res) =>{
          this.setState({
            notes: res.data
          })
        }).catch((err) =>{
          console.log(err)
        })
      }

      addNote = (input) =>{
        axios.post('/api/notes', {
          valNote: input
        }).then((res) =>{
          this.setState({
            notes: res.data
          })
        }).catch((err) =>{
          console.log(err)
        })
      }

      editNote = (input, id) =>{
        const body = {
          valNote: input,
        }
        axios.put(`/api/notes/${id}`, body).then((res) =>{
          this.setState({
            notes: res.data
          })
        }).catch((err) =>{
          console.log(err)
        })
      }

    // editNote = (input, id) =>{
    //   const index = this.state.notes.findIndex((e) => e.id === id)
    //   const note = this.state.notes[index]
    //   note.valNote = input
    //   let changedNote = [...this.state.notes]
    //     changedNote.splice(index, 1, note)
    //     this.setState({notes: changedNote})
    // }


    // editNote = (input, i) =>{
    //     let changedNote = [...this.state.notes]
    //     changedNote.splice(i, 1, input)
    //     this.setState({notes: changedNote})
    // }

    // removeNote = (id) =>{
    //   const index = this.state.notes.findIndex((e) => e.id === id)
    //     let remNote = [...this.state.notes]
    //     remNote.splice(index, 1)
    //     this.setState({notes: remNote})
    // }

    // addNote = (input) => {
    //   const note = {
    //     valNote: input,
    //     id: this.state.currentId
    //   }
    //     this.setState({notes: [...this.state.notes, note], currentId: this.state.currentId + 1})
    //     }

    // addNote= (input) => {
    //     let newNotes = [...this.state.movies]
    //     newNotes.push(input)
    //     this.setState({notes: newNotes })
    // }

   render(){
       return(
         
           <div><header></header>
             {this.state.notes.map( (e, i) => {
           return <Notes notesProp = {e}
           indexProp ={i}
           key = {e.id}

           remNoteProp = {this.removeNote}
           editNoteProp={this.editNote}/>
           })}
               <AddNote addNoteProp =  {this.addNote}/>
               <footer></footer>
           </div>
       )
   } 
}

export default App;
