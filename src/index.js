const express = require('express')
const path = require('path')
const port = 3000

const app = express()
app.set("/", "html")
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=> {
    res.render('index')
})

app.listen(port, ()=>{
    console.log(`Application running on the port ${port}`)
})