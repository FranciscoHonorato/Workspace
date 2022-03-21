
let myStorage = window.localStorage
let tasks = []

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
    myStorage.setItem("tasks", JSON.stringify(tasks))
}


deleteTask = function (id) {
    tasks = tasks.filter(task => task.id != id)

    myStorage.setItem("tasks", JSON.stringify(tasks))
}

loadTasks = function () {
    let tasks_str = myStorage.getItem("tasks")

    if (tasks_str) {
        tasks = JSON.parse(tasks_str)
    }
}
