

newTask = function () {
    taskDescription = document.querySelector('#newTask').value

    createTask(taskDescription)
    
    updateScreen()
}

updateScreen = function () {
    var list = '<tr> <ul>'

    for(task of tasks){
        list += "<tr> <td> <li id-date=" + task.id + ">" + task.data.descripition + " </td> " 
        list += "<td> <button onclick=removeTask(this) id-date=" + task.id + "> X </button> </li> </td> </tr>  "

    }
       
    list += "</ul> "

    document.getElementById("list").innerHTML = list
    document.querySelector('#newTask').value = ""
}

removeTask = function(element){
var id = element.getAttribute("id-date")

deleteTask(id)
updateScreen()
}

loadTasks()
updateScreen()