
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const users = require('./data/users.json')

// serving static files
app.use(express.static('public'))

console.log(path.join('/about', '/services', '/faq'))
console.log(path.join(__dirname, '/newpath'))

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
// app.get('/about', (req, res) => {
//     res.send('<h1>This is About</h1>')
// })
console.log(__dirname)
// app.get('/', (req, res) => {
//     // work only on may PC
//     // res.sendFile('/views/index.html')
//     res.sendFile('/Users/uladzimirsiauko/SuperCode/express.js-1/views/index.html')
// })
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

// Solution 2
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './views/about.html'))
})

app.get('/api', (req, res) => {
    res.json([{ id: 1, name: 'supername' }])
})
app.get('/api/all', (req, res) => {
    res.json(users)
})
app.get('/api/all/:id', (req, res) => {
    console.log(req.params.id)
    let user = users.filter(elt => elt.id == req.params.id)
    console.log(user)
    if (user.length > 0) {
        res.json(user)
    } else {
        res.send('user not found')
    }
})
app.get('/api/firstname/:id', (req, res) => {
    console.log(req.params.id)
    let user = users.filter(elt => elt.first_name == req.params.id)
    console.log(user)
    if (user.length > 0) {
        res.json(user)
    } else {
        res.send('user not found')
    }
})

app.listen(3000, () => {
    console.log('listening at: localhost:3000')
})