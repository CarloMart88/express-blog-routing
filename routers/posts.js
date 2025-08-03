const express = require('express')

const router = express.Router()

// INDEX - GET /posts
router.get('/' , (req , res) => {
  res.send(('Lista dei post'))
})

// SHOW - GET /posts/:id
router.get('/:id' , (req , res) => {
  res.send((`mostra il post con id ${req.params.id}`))
})


// CREATE - POST /posts
router.post('/' , (req , res) => {
  res.send(('Crea un nuovo post'))
})

// UPDATE - PUT /posts/:id
router.put('/:id' , (req , res) => {
  res.send((`modifica un post con id ${req.params.id}`))
})

// NODIFY - PATCH /posts/:id
router.patch('/:id' , (req , res) => {
  res.send((`modifica parziale un post con id ${req.params.id}`))
})

// DELETE - DELETE /posts/:id

router.delete('/:id' , (req , res) => {
  res.send((`rimuove un post con id ${req.params.id}`))
})

module.exports = router