const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

const {createEngine} = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())


app.get('/:number_of_bottles', (req, res) => {
        num = Number(req.params.number_of_bottles)

    if(num>0){
       res.send(`
       <div>
       <h1> ${num} Bottles of soda on the wall </h1> 
       <a href="/${num - 1 }">take one down, pass it around</a>
       </div>`
       )
    } else {
        res.send(`
        <div>
        <h1> ${num} Bottles of soda on the wall </h1> 
        <a href="/"> Start over</a>
        </div>`
        )
    }
    })


app.get('/', (req, res) => {

    res.send(`
    <div>
    <h1>99 Bottles of soda on the wall </h1> 
    <a href="/${99}">take one down, pass it around</a>
    </div>`
    )
})

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})