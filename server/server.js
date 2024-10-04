const express = require('express')
const HomeRouter = require('./Routes/HomeRouter')
const app = express()


app.get('/', (req , res) =>{


    res.send("hell world")
} ) 




//Middleware

app.use('/index', HomeRouter)



app.listen(3300, ()=>{

    console.log(`runing on port ${3300}`);
    

})