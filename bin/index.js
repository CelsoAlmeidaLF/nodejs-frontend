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
// app.get('/',(red, res) => { res.sendFile(
//     path.join(__dirname,'../pages/index.html'))
// })

app.get('/', (req, res) => { res.render('home/index')})
app.get('/about', (req, res) => { res.render('home/about')})
app.get('/contact', (req, res) => { res.render('home/contact')})
app.get('/journal', (req, res) => { res.render('home/journal')})
app.get('/work', (req, res) => { res.render('home/work')})

// outros
app.listen(port, () => { console.log(`server runnin is http://localhost:${port}`) })
