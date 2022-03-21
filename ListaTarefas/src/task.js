var tasks = []

idGenerator = function () {
    var times = new Date()
    var id = times.getHours().toString() +
        times.getMinutes().toString() +
        times.getSeconds().toString() +
        times.getUTCMilliseconds()

    return id
}

createTask = function (taskDescription) {

    var task = {
        id: idGenerator(),
        data: {
            descripition: taskDescription
        }
    }
    tasks.push(task)
}



deleteTask = function (id) {
    tasks = tasks.filter(task => task.id != id)

    updateScreen()
}