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

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false })
    return count
} 

deleteTaskAndCount('5ffed318e6305b56e801c73b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
}) 