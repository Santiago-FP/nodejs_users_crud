//Import express
const express = require('express')

//get the router
const usersRouter = require('./users/users.router')
const port = 9000;
const app = express();

//makes json readable
app.use(express.json())

// a test
app.get('/',(req,res) => {
    res.status(200).json({message: "working fine"})
});

app.use('/api/v1',usersRouter);

//Starts server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})