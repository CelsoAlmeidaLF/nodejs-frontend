const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home/index',
  {
    title: 'Inicio',
    cover_title: 'Mighty Web Design Agency',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

router.get('/about', (req, res) => {
  res.render('home/about',{
    title: 'Sobre',
    cover_title: 'Sobre',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

router.get('/contact', (req, res) => {
  res.render('home/contact',
  {
    title: 'Contato',
    cover_title: 'Contato',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

router.get('/journal', (req, res) => {
  res.render('home/journal',
  {
    title: 'Blog',
    cover_title: 'Blog',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

router.get('/work', (req, res) => {
  res.render('home/work',
  {
    title: 'Serviços',
    cover_title: 'Serviços',
    cover_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis
    in tenetur doloremque, maiores doloribus officia iste. Dolores.`
  })
})

router.use(function(req, res, next) { res.status(404).redirect('/') })

module.exports = router
