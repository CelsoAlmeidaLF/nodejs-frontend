const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const routes = require('./routes')
const port = 8000

// config
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

// public
app.use(express.static(path.join(__dirname,'../public')))

// rotas
app.use('/', routes);

// outros
app.listen(port, () => { console.log(`server runnin is http://localhost:${port}`) })
