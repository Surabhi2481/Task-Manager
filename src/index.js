const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    //console.log(user)

    try{
        await user.save()
        res.status(201).send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
        
    // })

})

app.get('/users', async (req, res) => {

    try{
        const user = await User.find({})
        res.send(user)
    }
    catch (e){
        res.status(400).send(e)
    }
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch(() => {
    //     res.status(500).send()
    // })
})

app.get('/users/:id', async (req,res) => {
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }
    catch (e){
        res.status(500).send()
    }
    console.log(req.params)

    // User.findById(_id).then((user) => {
    //     if(!user){
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
    // console.log(req.params)
})

app.post('/tasks', async (req,res) => {
    const task = new Task(req.body)
    //console.log(task)

    try{
        await task.save()
        res.status(201).send(task)
    }
    catch (e){
        res.status(400).send(e)
    }

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

app.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({})
        res.send(task)
    }
    catch (e) {
        res.status(500).send()
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch(() => {
    //     res.status(500).send()
    // })
})



app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById({_id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch (e){
        res.status(500).send()
    }

    // Task.findById({_id}).then((task) => {
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
    console.log(req.params)
})

app.listen(port, () => {
    console.log('Server is up on the port '+ port)
})