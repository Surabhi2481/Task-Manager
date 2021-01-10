//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    //console.log("Connected Correctly!")
    
    // db.collection('users').insertOne({
    //     name : 'Surabhi',
    //     age : 22
    // }, (error,result) => {
    //     if(error)
    //     {
    //         return console.log("Unable to insert the user.")
    //     }

    //     console.log(result.ops);

    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Ankita',
    //         age : 18
    //     },
    //     {
    //         name : 'Sweta',
    //         age : 23
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert the document.")
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description : 'Water the plants',
            completed : true
        },
        {
            description : 'Fill the bottles',
            completed : true
        },
        {
            description : 'Clean the living room',
            completed : false
        }
    ], (error, result) => {
        if(error){
            return console.log("Unable to insert the documents")
        }

        console.log(result.ops)
    })

    
})