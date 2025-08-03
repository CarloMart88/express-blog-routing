const express = require('express');

const app = express();

const port = 3000;

const postsRouter = require('./routers/posts')



// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
app.get('/', (req , res) => {
  res.send('Server del mio blog')
})
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static('public'));

// uso il router sul prefisso /posts
app.use('/posts' , postsRouter)


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})

 




