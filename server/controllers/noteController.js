const notes = [{
    valNote: '',
    id: 1
}];
let currentId = 2

module.exports = {
    // get
    getNotes: (req, res) =>{
        res.status(200).send(notes)
    },
    // post
    addNote: (req, res) =>{
        const {valNote} = req.body
        const note = {
            valNote: valNote,
            id: currentId
        } 
        currentId++
        notes.push(note)
        res.status(200).send(notes)
    },
    // delete
    removeNote: (req, res) =>{
        const {id} = req.params
                            // dont forget the + in front of id to change it from a string to a number from the url
        const index = notes.findIndex((e) => e.id === +id)
        notes.splice(index, 1)
        res.status(200).send(notes)
    },
    // put
    editNote: (req, res) =>{
        const {id} = req.params
        const {valNote} = req.body
        const index = notes.findIndex((e) => e.id === +id )
        const note = notes[index]
        note.valNote = valNote
        notes.splice(index, 1, note)
        res.status(200).send(notes)
    },
} 
