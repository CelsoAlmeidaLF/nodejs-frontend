const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const port = 8000

// config
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

// public
app.use(express.static(path.join(__dirname,'../public')))

// rotas
app.get('/', (req, res) => {
  res.render('home/index',
  {
    title: 'Inicio',
    cover_title: 'Mighty Web Design Agency',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

app.get('/about', (req, res) => {
  res.render('home/about',{
    title: 'Sobre',
    cover_title: 'Sobre',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

app.get('/contact', (req, res) => {
  res.render('home/contact',
  {
    title: 'Contato',
    cover_title: 'Contato',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

app.get('/journal', (req, res) => {
  res.render('home/journal',
  {
    title: 'Blog',
    cover_title: 'Blog',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

app.get('/work', (req, res) => {
  res.render('home/work',
  {
    title: 'Serviços',
    cover_title: 'Serviços',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

// outros
app.listen(port, () => { console.log(`server runnin is http://localhost:${port}`) })
