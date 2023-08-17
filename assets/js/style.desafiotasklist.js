
class Task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList{
    constructor(teste){
        this.tasks = [];
    }
    addTask(param){
        this.tasks.push(param);

    }
    teste(){
        console.log()
    }
}

function randomId(){
    return Math.floor(Math.random() * 9998) + 1;
}

function clearInput(){
    document.getElementById("writeBox").value = "";
}


const taskList = new TaskList();


function createTask(){
    const title = document.getElementById("writeBox").value;
    const task = new Task(randomId(),title,false);
    taskList.addTask(task);
    console.log(task)

    publishTask();
    clearInput();


}

function publishTask(){
    document.getElementById("publish").classList.remove("hidden");

    let msg = '';

    taskList.tasks.forEach(task => {
        msg += `
        <div>
        <div class="card">
            <p>${task.title}</p>
            <div id="actionButtons">
                <button type="button" class="check" id="${task.id}-check"><i class="fa-solid fa-check"></i></button>
                <button type="button" class="edit" id="${task.id}-edit"><i class="fa-solid fa-pencil"></i></button>
                <button type="button" class"edit" id="${task.id}-title"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </div>
        `
    });

    document.getElementById("publish").innerHTML = msg;

}