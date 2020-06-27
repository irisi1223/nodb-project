const express = require('express');


const app = express()
const noteCtrl = require('./controllers/noteController')

app.use(express.json())


app.listen(3333, () => console.log('Server running on 3333'))


app.get('/api/notes', noteCtrl.getNotes)
app.post('/api/notes', noteCtrl.addNote)
app.delete('/api/notes/:id', noteCtrl.removeNote)
app.put('/api/notes/:id', noteCtrl.editNote)