require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ffd5e3068405a2d18ef0d79').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed : false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
