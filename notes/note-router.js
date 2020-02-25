const express = require('express')
const NoteService = require('./note-service')

const noteRouter = express.Router()
const jsonParser = express.json()

const serializeNotes = note =>({
    id: note.id,
    name: note.name,
    folderid: note.folderid,
    content: note.content
})

noteRouter
    .route('/')
    .get((req,res,next)=>{
        const knexInstance = req.app.get('db')
        NoteService.getAllNotes(knexInstance)
        .then(notes=>{
            res.json(notes.map(serializeNotes))
        })
        .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const {name, folderid, content} = req.body;
        const newNote = {name, folderid, content}
        for (const [key, value] of Object.entries(newNote))
            if(value === null){
                return res.status(400)
                .json({ error: {message: `Missing ${key} in request body`}
                })}
        NoteService.insertNote(
            req.app.get('db'),
            newNote
        )
        .then(note =>{
            res 
                .status(201)
                .json(serializeNotes(note))
        })
        .catch((err) => {
            console.error('insert note error:', err);
            next(err);
          });    })

    noteRouter  
        .route('/:note_id')
        .all((req, res, next) => {
            NoteService.getById(
                req.app.get('db'),
                req.params.note_id
            )
            .then(note => {
                if (!note) {
                    return res.status(404).json({
                        error: {message: `Note doesn't exist`}
                    })
                }
                res.note = note
                next()
            })
            .catch(next)
        })
        .get((req,res,next) => {
            res.json(serializeNotes(res.note))
        })
        .delete((req,res,next) => {
            NoteService.deleteNote(
                req.app.get('db'),
                req.params.note_id
            )
            .then(removeRows => {
                res.status(204).end()
            })
            .catch(next)
        })
        .patch(jsonParser, (req, res, next) => {
            const {content} = req.body
            const updateNote = {content}
            const numValues = Object.values(updateNote).filter(Boolean).length
            if(numValues===0)
                return res.status(400).json({
                    error: {
                        message: 'Request body must contain text or modified change'
                    }
                })
            NoteService.updateNote(
                req.app.get('db'),
                req.params.note_id,
                updateNote
            )
            .then(
                res.status(204).end()
            )
            .catch(next)
        })

module.exports = noteRouter
